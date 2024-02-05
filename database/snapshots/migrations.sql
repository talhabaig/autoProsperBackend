CREATE TABLE public.migrations(
	id integer NOT NULL DEFAULT nextval('migrations_id_seq'::regclass),
	name character varying NOT NULL,
	run_on timestamp without time zone NOT NULL,
	CONSTRAINT migrations_pkey PRIMARY KEY (id) 
	)
	