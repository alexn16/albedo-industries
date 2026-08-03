# Compute interest registration backend

## Architecture

The static Vite site sends HTTPS JSON to the public `compute-interest` Supabase Edge Function. The function—not the browser—holds the Supabase service-role key. It validates one of two strict Zod schemas, applies a database-backed rate limit, inserts into the corresponding RLS-protected Postgres table, and then optionally sends a minimal internal notification through Resend.

The browser contract uses `capacity_interest` and `investor_partner_interest` lead tags. Both include `sourcePage`, a client timestamp used only for diagnostics, boolean consent and an empty `website` honeypot. Database `created_at` remains the authoritative receipt time. The honeypot and client timestamp are not stored.

European candidate pages additionally send candidate ID, slug and country. Capacity leads include interest strength and willingness to discuss a non-binding LOI; partner leads include a structured local relationship type. The function accepts candidate metadata only when the complete tuple matches its allowlist. Migration `202608030002_candidate_tagging.sql` adds the corresponding constrained fields and indexes without combining the two lead tables.

No confirmation email is sent to registrants. This avoids creating a second email flow until Albedo has selected and verified its sending domain and support process. The on-page confirmation remains the authoritative acknowledgement.

## Security controls

- Strict, separate Zod schemas reject absent fields, unknown keys, invalid email addresses, false consent, unknown enums and overlong content.
- Text is trimmed and email addresses are normalized to lowercase before insertion.
- Requests are limited to 16 KiB and parsed defensively; external failures never contain database or stack details.
- CORS reflects only an exact configured origin. No wildcard origin is used.
- The `website` honeypot must remain empty.
- A salted SHA-256 hash of the forwarding IP is used only as a 15-minute rate-limit key. Raw IP addresses and user agents are not stored. The migration allows five attempts per window and removes expired keys during later checks.
- Rate limiting fails closed if its database call fails.
- All three tables use RLS and explicitly deny `anon` and `authenticated` access. Only the Edge Function's service role can insert or review records.
- Logs contain event names, lead type and, after insertion, the generated record ID; complete submissions are never logged.
- Notification failure is recorded but does not erase or misrepresent a successful database registration.

## Environment variables

Frontend build:

| Variable | Purpose |
| --- | --- |
| `VITE_COMPUTE_INTEREST_ENDPOINT` | Deployed Edge Function URL. Its absence keeps both forms in preview-only mode. |

Edge Function secrets:

| Variable | Required | Purpose |
| --- | --- | --- |
| `SUPABASE_URL` | Yes | Project API URL. Supabase normally injects this. |
| `SUPABASE_SERVICE_ROLE_KEY` | Yes | Server-only database access. Supabase normally injects this. |
| `COMPUTE_INTEREST_ALLOWED_ORIGINS` | Yes | Comma-separated exact origins. Production: `https://www.albedo-industries.com,https://albedo-industries.com`. |
| `COMPUTE_INTEREST_RATE_LIMIT_SECRET` | Yes | Long random value used to salt rate-limit hashes. |
| `COMPUTE_INTEREST_NOTIFICATION_EMAIL` | For notifications | Internal recipient; never included in client code. |
| `RESEND_API_KEY` | For notifications | Server-only Resend key. |
| `COMPUTE_INTEREST_FROM_EMAIL` | For notifications | Verified Resend sender. |

Use `.env.example` only as a name/template reference. Never commit populated secrets. Add `http://localhost:5173` to the origin list only in a local or staging project—never to the production secret.

## Deploy

Prerequisites: Supabase CLI access, a linked production project, an approved privacy retention policy and—if notifications are enabled—a verified Resend sender.

```bash
# 1. Link and inspect the target before changing it
supabase link --project-ref YOUR_PROJECT_REF
supabase db diff --linked

# 2. Apply the two protected lead tables and rate-limit function
supabase db push

# 3. Configure server-only secrets (prefer a protected shell/CI secret store)
supabase secrets set \
  COMPUTE_INTEREST_ALLOWED_ORIGINS="https://www.albedo-industries.com,https://albedo-industries.com" \
  COMPUTE_INTEREST_RATE_LIMIT_SECRET="LONG_RANDOM_VALUE" \
  COMPUTE_INTEREST_NOTIFICATION_EMAIL="APPROVED_INTERNAL_ADDRESS" \
  RESEND_API_KEY="RESEND_SECRET" \
  COMPUTE_INTEREST_FROM_EMAIL="VERIFIED_SENDER"

# 4. Deploy the endpoint; config.toml records that browser requests have no user JWT
supabase functions deploy compute-interest --no-verify-jwt

# 5. Build the website with the deployed endpoint, then deploy dist through the existing pipeline
VITE_COMPUTE_INTEREST_ENDPOINT="https://YOUR_PROJECT.supabase.co/functions/v1/compute-interest" npm run build
```

Before publishing the frontend variable, send test registrations from an allowed staging origin and verify table insertion, a `sent` notification status, rate limiting and generic failures. An endpoint deployment alone does not activate the forms; activation occurs only when the Vite production build receives the endpoint variable.

## Secure operator review

Use a named, MFA-protected Supabase dashboard account with the minimum appropriate project role. Do not distribute the service-role key for routine review. In the dashboard SQL editor, restrict selected columns unless free text is required:

```sql
select id, created_at, full_name, work_email, company, customer_type,
       desired_service, submission_status, notification_status
from public.compute_capacity_interests
order by created_at desc
limit 100;

select id, created_at, full_name, professional_email, organization,
       investor_partner_type, area_of_interest, submission_status, notification_status
from public.compute_investor_partner_interests
order by created_at desc
limit 100;
```

There is intentionally no public read API or administration UI.

## Tests

```bash
deno test --allow-env supabase/functions/compute-interest/core_test.ts
npm run lint
npm run build
VITE_COMPUTE_INTEREST_ENDPOINT=https://example.supabase.co/functions/v1/compute-interest npm run build
git diff --check
```

The Deno suite covers both valid lead types, valid candidate tags, unknown and mismatched candidate tags, invalid email, missing consent, unknown lead type, honeypot content, excessive length, unexpected keys, invalid origin, rapid repetition, database failure and notification failure after insertion.

## Rollback

1. Remove `VITE_COMPUTE_INTEREST_ENDPOINT` from the website build and redeploy. Forms immediately return to the explicit preview-only state.
2. If necessary, delete or undeploy the Edge Function: `supabase functions delete compute-interest`.
3. Do **not** drop tables during an incident rollback. Preserve registrations, restrict project access and investigate.
4. Database removal is a separate, approved data-governance action after export/deletion requirements are resolved. The migration is intentionally forward-only.

## Operator decisions before production

- Approve the retention and deletion schedule. Until then, collect only during a controlled validation window and review records for deletion when no longer needed.
- Approve the internal notification recipient and verified sender, or explicitly accept `notification_status = 'skipped'` and establish dashboard review ownership.
- Confirm which staff roles may access free-text fields and document request handling for access, correction and deletion.
- Decide whether Resend should be listed by name in the final privacy/subprocessor documentation.
