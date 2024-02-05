CREATE TABLE public.servey(
	created_by integer NOT NULL DEFAULT __current_user(),
	created_date timestamp without time zone NOT NULL DEFAULT timezone('UTC'::text, now()),
	modified_by integer NULL,
	modified_date timestamp without time zone NULL,
	deleted boolean NOT NULL DEFAULT false,
	deleted_by integer NULL,
	deleted_date timestamp without time zone NULL,
	id integer NOT NULL DEFAULT nextval('servey_id_seq'::regclass),
	sessionid character varying NOT NULL,
	label character varying NOT NULL,
	body character varying NOT NULL,
	CONSTRAINT pk_serveys PRIMARY KEY (id) 
	)
	