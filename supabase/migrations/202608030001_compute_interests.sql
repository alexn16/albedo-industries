create extension if not exists pgcrypto;

create table public.compute_capacity_interests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  full_name text not null check (char_length(full_name) between 1 and 120),
  work_email text not null check (char_length(work_email) <= 254),
  company text not null check (char_length(company) between 1 and 160),
  country text not null check (char_length(country) between 1 and 100),
  customer_type text not null check (customer_type in ('Startup', 'Enterprise', 'Research', 'University', 'Public institution', 'Infrastructure provider', 'Other')),
  desired_service text not null check (desired_service in ('Rack colocation', 'Dedicated infrastructure', 'Managed AI compute', 'GPU capacity', 'Storage', 'Private cloud', 'Unsure / discuss requirements')),
  approximate_rack_requirement text not null check (char_length(approximate_rack_requirement) between 1 and 120),
  approximate_power_requirement text check (char_length(approximate_power_requirement) <= 120),
  desired_start_date date not null,
  contract_duration_preference text not null check (char_length(contract_duration_preference) between 1 and 120),
  workload_description text not null check (char_length(workload_description) between 1 and 3000),
  data_residency_requirements text not null check (char_length(data_residency_requirements) between 1 and 1000),
  additional_comments text check (char_length(additional_comments) <= 2000),
  consent boolean not null check (consent is true),
  source_page text not null check (source_page = '/compute-infrastructure'),
  lead_type text not null check (lead_type = 'capacity_interest'),
  submission_status text not null default 'received' check (submission_status in ('received', 'reviewed', 'archived')),
  notification_status text not null default 'pending' check (notification_status in ('pending', 'sent', 'failed', 'skipped'))
);

create table public.compute_investor_partner_interests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  full_name text not null check (char_length(full_name) between 1 and 120),
  professional_email text not null check (char_length(professional_email) <= 254),
  organization text not null check (char_length(organization) between 1 and 160),
  role text not null check (char_length(role) between 1 and 120),
  investor_partner_type text not null check (investor_partner_type in ('Infrastructure fund', 'Angel or private investor', 'Family office', 'Strategic industry partner', 'Energy partner', 'Landowner', 'Engineering or EPC partner', 'Equipment supplier', 'Public institution', 'Other')),
  typical_investment_range text check (char_length(typical_investment_range) <= 120),
  area_of_interest text not null check (area_of_interest in ('Project financing', 'Site development', 'Energy', 'Equipment', 'Construction', 'Operations', 'Customer introductions', 'Other')),
  relevant_experience text not null check (char_length(relevant_experience) between 1 and 1500),
  preferred_involvement text not null check (char_length(preferred_involvement) between 1 and 1000),
  message text not null check (char_length(message) between 1 and 3000),
  consent boolean not null check (consent is true),
  source_page text not null check (source_page = '/compute-infrastructure'),
  lead_type text not null check (lead_type = 'investor_partner_interest'),
  submission_status text not null default 'received' check (submission_status in ('received', 'reviewed', 'archived')),
  notification_status text not null default 'pending' check (notification_status in ('pending', 'sent', 'failed', 'skipped'))
);

create table public.compute_interest_rate_limits (
  fingerprint_hash text primary key check (char_length(fingerprint_hash) = 64),
  window_started_at timestamptz not null default now(),
  attempts integer not null default 1 check (attempts > 0)
);

alter table public.compute_capacity_interests enable row level security;
alter table public.compute_investor_partner_interests enable row level security;
alter table public.compute_interest_rate_limits enable row level security;

revoke all on public.compute_capacity_interests from anon, authenticated;
revoke all on public.compute_investor_partner_interests from anon, authenticated;
revoke all on public.compute_interest_rate_limits from anon, authenticated;

create or replace function public.check_compute_interest_rate_limit(p_fingerprint_hash text)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
declare
  current_attempts integer;
begin
  if char_length(p_fingerprint_hash) <> 64 then
    return false;
  end if;

  delete from public.compute_interest_rate_limits
  where window_started_at < now() - interval '15 minutes';

  insert into public.compute_interest_rate_limits (fingerprint_hash)
  values (p_fingerprint_hash)
  on conflict (fingerprint_hash) do update
    set attempts = compute_interest_rate_limits.attempts + 1
  returning attempts into current_attempts;

  return current_attempts <= 5;
end;
$$;

revoke all on function public.check_compute_interest_rate_limit(text) from public, anon, authenticated;
grant execute on function public.check_compute_interest_rate_limit(text) to service_role;

comment on table public.compute_capacity_interests is 'Non-binding future compute-capacity registrations. Service-role access only.';
comment on table public.compute_investor_partner_interests is 'Non-binding investor and infrastructure-partner registrations. Service-role access only.';
