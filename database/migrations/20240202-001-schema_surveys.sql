
/*==============================================================*/
/* TABLE: serveys                                          */
/*==============================================================*/
CREATE TABLE IF NOT EXISTS public.servey(
	id SERIAL NOT NULL,
	sessionId VARCHAR NOT NULL,
	label VARCHAR NOT NULL,
	body VARCHAR NOT NULL,
	CONSTRAINT pk_serveys PRIMARY KEY (id)
);

ALTER TABLE public.servey OWNER TO postgres;