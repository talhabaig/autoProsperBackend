

/*==============================================================*/
/* TABLE: guest_user                                          */
/*==============================================================*/

CREATE TABLE IF NOT EXISTS public.guest_user (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR NOT NULL,
    middle_name VARCHAR,
    last_name VARCHAR NOT NULL,
    date_of_birth DATE NOT NULL,
    city VARCHAR NOT NULL,
    state VARCHAR NOT NULL,
    last_4_digits_ssn VARCHAR(4) NOT NULL,
    monthly_income DECIMAL NOT NULL
)
INHERITS (public.__creation_log, public.__modification_log, public.__deletion_log)
WITH (OIDS=FALSE);

ALTER TABLE IF EXISTS public.guest_user
OWNER TO postgres;
