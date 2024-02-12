CREATE TABLE public.servey(
	id integer NOT NULL DEFAULT nextval('servey_id_seq'::regclass),
	body character varying NOT NULL,
	CONSTRAINT pk_serveys PRIMARY KEY (id) 
	)
	