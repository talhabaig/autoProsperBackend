
/*==============================================================*/
/* TABLE: serveys                                          */
/*==============================================================*/
CREATE TABLE IF NOT EXISTS public.servey(
	id SERIAL NOT NULL,
	sessionId VARCHAR NOT NULL,
	label VARCHAR NOT NULL,
	body VARCHAR NOT NULL,
	CONSTRAINT pk_serveys PRIMARY KEY (id)
)
INHERITS (public.__creation_log, public.__modification_log, public.__deletion_log)
WITH (OIDS=FALSE);

ALTER TABLE public.servey OWNER TO postgres;