CREATE TABLE public.guest_user(
	created_by integer NOT NULL DEFAULT __current_user(),
	created_date timestamp without time zone NOT NULL DEFAULT timezone('UTC'::text, now()),
	modified_by integer NULL,
	modified_date timestamp without time zone NULL,
	deleted boolean NOT NULL DEFAULT false,
	deleted_by integer NULL,
	deleted_date timestamp without time zone NULL,
	id integer NOT NULL DEFAULT nextval('guest_user_id_seq'::regclass),
	first_name character varying NOT NULL,
	middle_name character varying NULL,
	last_name character varying NOT NULL,
	date_of_birth date NOT NULL,
	city character varying NOT NULL,
	state character varying NOT NULL,
	last_4_digits_ssn character varying NOT NULL,
	monthly_income numeric NOT NULL,
	CONSTRAINT guest_user_pkey PRIMARY KEY (id) 
	)
	