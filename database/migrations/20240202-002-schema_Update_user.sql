-- Table: public.users

-- ... (existing table definition)

-- Adding a new column 'email' to the 'public.users' table
ALTER TABLE public.users
ADD COLUMN email character varying COLLATE pg_catalog."default";

-- Updating the table definition with the new nullable 'email' column
ALTER TABLE public.users
ALTER COLUMN email DROP NOT NULL;

-- Table modification complete.

-- Optional: Add a comment for the 'email' column
COMMENT ON COLUMN public.users.email IS 'User email address';

-- Optional: Modify the trigger or any other parts of the script as needed.

