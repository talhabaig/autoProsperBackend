CREATE TABLE public.guest_user(
	id integer NOT NULL DEFAULT nextval('guest_user_id_seq'::regclass),
	first_name character varying NOT NULL,
	middle_name character varying NULL,
	last_name character varying NOT NULL,
	date_of_birth date NOT NULL,
	city character varying NOT NULL,
	state character varying NOT NULL,
	phone character varying NOT NULL,
	last_4_digits_ssn character varying NOT NULL,
	monthly_income numeric NOT NULL,
	CONSTRAINT guest_user_pkey PRIMARY KEY (id) 
	)
	