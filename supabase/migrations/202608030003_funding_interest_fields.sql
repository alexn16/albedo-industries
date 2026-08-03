alter table public.compute_investor_partner_interests
  add column investor_country text,
  add column investor_profile text,
  add column preferred_instrument text,
  add column preferred_stage text,
  add column notify_if_offer_opens boolean;

alter table public.compute_investor_partner_interests
  drop constraint compute_partner_candidate_tags_complete,
  add constraint compute_partner_investor_profile_check check (investor_profile is null or investor_profile in ('Professional investor','Retail investor','Unsure')),
  add constraint compute_partner_instrument_check check (preferred_instrument is null or preferred_instrument in ('Equity','Project debt','Revenue participation','Unsure')),
  add constraint compute_partner_stage_check check (preferred_stage is null or preferred_stage in ('Research','Feasibility','Development','Construction','Unsure')),
  add constraint compute_partner_candidate_tags_complete check (
    (candidate_id is null and country_code is null and candidate_slug is null and local_relationship_type is null)
    or
    (candidate_id is not null and country_code is not null and candidate_slug is not null and (
      local_relationship_type is not null
      or (investor_profile is not null and preferred_instrument is not null and preferred_stage is not null and notify_if_offer_opens is not null)
    ))
  );
