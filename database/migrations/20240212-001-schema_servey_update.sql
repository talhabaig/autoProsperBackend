-- Alter table to remove sessionid and label columns
ALTER TABLE IF EXISTS public.servey
DROP COLUMN IF EXISTS sessionid,
DROP COLUMN IF EXISTS label;
