alter table public.compute_capacity_interests
  add column candidate_id text,
  add column country_code text,
  add column candidate_slug text,
  add column interest_strength text,
  add column willing_to_discuss_loi boolean;

alter table public.compute_investor_partner_interests
  add column candidate_id text,
  add column country_code text,
  add column candidate_slug text,
  add column willing_to_discuss_loi boolean,
  add column local_relationship_type text;

alter table public.compute_capacity_interests
  add constraint compute_capacity_candidate_id_check check (candidate_id is null or candidate_id in ('EU-ES-01','EU-ES-02','EU-ES-03','EU-PT-01','EU-DE-01','EU-FR-01','EU-SE-01','EU-FI-01','EU-NO-01','EU-PL-01')),
  add constraint compute_capacity_country_code_check check (country_code is null or country_code in ('ES','PT','DE','FR','SE','FI','NO','PL')),
  add constraint compute_capacity_interest_strength_check check (interest_strength is null or interest_strength in ('General interest','Active requirement','Budget under review','Prepared to discuss an LOI','Existing procurement process')),
  add constraint compute_capacity_candidate_tags_complete check ((candidate_id is null and country_code is null and candidate_slug is null and interest_strength is null) or (candidate_id is not null and country_code is not null and candidate_slug is not null and interest_strength is not null and willing_to_discuss_loi is not null));

alter table public.compute_investor_partner_interests
  add constraint compute_partner_candidate_id_check check (candidate_id is null or candidate_id in ('EU-ES-01','EU-ES-02','EU-ES-03','EU-PT-01','EU-DE-01','EU-FR-01','EU-SE-01','EU-FI-01','EU-NO-01','EU-PL-01')),
  add constraint compute_partner_country_code_check check (country_code is null or country_code in ('ES','PT','DE','FR','SE','FI','NO','PL')),
  add constraint compute_partner_relationship_check check (local_relationship_type is null or local_relationship_type in ('Landowner','Utility or energy partner','Fibre carrier','Engineering partner','EPC','Equipment supplier','Local authority','Capital partner','Other')),
  add constraint compute_partner_candidate_tags_complete check ((candidate_id is null and country_code is null and candidate_slug is null and local_relationship_type is null) or (candidate_id is not null and country_code is not null and candidate_slug is not null and local_relationship_type is not null));

create index compute_capacity_candidate_created_idx on public.compute_capacity_interests (candidate_id, created_at desc) where candidate_id is not null;
create index compute_partner_candidate_created_idx on public.compute_investor_partner_interests (candidate_id, created_at desc) where candidate_id is not null;
