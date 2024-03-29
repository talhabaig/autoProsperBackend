/* ============================================================================================== */
/* DATABASE SCHEMA - START                                                                        */
/* ============================================================================================== */

/*==============================================================*/
/* TABLE: error_log                                             */
/*==============================================================*/
CREATE TABLE IF NOT EXISTS public.error_log(
	id SERIAL NOT NULL,
	id_et_type INTEGER NOT NULL,
	id_device INTEGER NULL,
	id_user INTEGER NULL,
	code VARCHAR NOT NULL,
	message VARCHAR NOT NULL,
	details VARCHAR NOT NULL,
	CONSTRAINT pk_error_log PRIMARY KEY (id)
)
INHERITS (public.__creation_log, public.__modification_log, public.__deletion_log)
WITH (OIDS=FALSE);

COMMENT ON TABLE public.error_log IS
'Errors logged include system-level and event violations (for example, attempting to test the wrong unit on a given fixture), etc, but excluding sensor test results and outcomes (pass/fail).
The data included when an error occurs depends on when it occurs. For example, a script error when booting the API server will only have the database update script identifier (id_dbu_script). In contrast, a query or application error that occurs during an impact test will have data for all COLUMNs.';

ALTER TABLE public.error_log OWNER TO postgres;

/*==============================================================*/
/* TABLE: error_types                                           */
/*==============================================================*/
CREATE TABLE IF NOT EXISTS public.error_types(
	id SERIAL NOT NULL,
	name VARCHAR NOT NULL,
	label VARCHAR NOT NULL,
	description VARCHAR NOT NULL,
	CONSTRAINT pk_error_types PRIMARY KEY (id),
	CONSTRAINT ak_error_types UNIQUE (name)
)
INHERITS (public.__creation_log, public.__modification_log, public.__deletion_log)
WITH (OIDS=FALSE);

ALTER TABLE public.error_types OWNER TO postgres;


/*==============================================================*/
/* TABLE: genders                                           */
/*==============================================================*/
CREATE TABLE IF NOT EXISTS public.genders (
    id SERIAL NOT NULL,
    name VARCHAR,
    label VARCHAR,
    description VARCHAR,
	CONSTRAINT pk_genders PRIMARY KEY (id),
	CONSTRAINT ak_genders_name UNIQUE (name)
) -- Patient, Clincian
INHERITS (public.__creation_log, public.__modification_log, public.__deletion_log)
WITH (OIDS=FALSE);

ALTER TABLE public.genders OWNER TO postgres;

/*==============================================================*/
/* TABLE: roles                                                 */
/*==============================================================*/
CREATE TABLE IF NOT EXISTS public.roles(
	id SERIAL NOT NULL,
	name VARCHAR NOT NULL,
	label VARCHAR NOT NULL,
	description VARCHAR NOT NULL,
	rank INTEGER NOT NULL,
	active BOOLEAN NOT NULL DEFAULT TRUE,
	CONSTRAINT pk_roles PRIMARY KEY (id),
	CONSTRAINT ak_roles UNIQUE (name)
)
INHERITS (public.__creation_log, public.__modification_log, public.__deletion_log)
WITH (OIDS=FALSE);

ALTER TABLE public.roles OWNER TO postgres;

/*==============================================================*/
/* TABLE: permissions                                           */
/*==============================================================*/
CREATE TABLE IF NOT EXISTS public.permissions(
	id SERIAL NOT NULL,
	name VARCHAR NOT NULL,
	label VARCHAR NOT NULL,
	description VARCHAR NOT NULL,
	CONSTRAINT pk_permissions PRIMARY KEY (id),
	CONSTRAINT ak_permissions UNIQUE (name)
)
INHERITS (public.__creation_log, public.__modification_log, public.__deletion_log)
WITH (OIDS=FALSE);

ALTER TABLE public.permissions OWNER TO postgres;

/*==============================================================*/
/* TABLE: role_permissions                                      */
/*==============================================================*/
CREATE TABLE IF NOT EXISTS public.role_permissions(
	id_role INTEGER NOT NULL,
	id_permission INTEGER NOT NULL,
	CONSTRAINT pk_role_permissions PRIMARY KEY (id_role, id_permission)
)
INHERITS (public.__creation_log, public.__modification_log, public.__deletion_log)
WITH (OIDS=FALSE);

ALTER TABLE public.role_permissions OWNER TO postgres;

/*==============================================================*/
/* TABLE: user_logins                                           */
/*==============================================================*/
CREATE TABLE IF NOT EXISTS public.user_logins(
	id SERIAL NOT NULL,
	id_user INTEGER NOT NULL,
	date TIMESTAMP NOT NULL,
	ip_address INET NOT NULL,
	host_name VARCHAR(253) NOT NULL,
	CONSTRAINT pk_user_logins PRIMARY KEY (id)
)
INHERITS (public.__creation_log, public.__modification_log, public.__deletion_log)
WITH (OIDS=FALSE);

ALTER TABLE public.user_logins OWNER TO postgres;

/*==============================================================*/
/* INDEX: idx_ul_user                                           */
/*==============================================================*/

CREATE INDEX idx_ul_user ON user_logins(id_user);

/*==============================================================*/
/* TABLE: user_roles                                            */
/*==============================================================*/
CREATE TABLE IF NOT EXISTS public.user_roles(
	id SERIAL NOT NULL,
	id_user INTEGER NOT NULL,
	id_role INTEGER NOT NULL,
	CONSTRAINT pk_user_roles_id PRIMARY KEY (id),
	CONSTRAINT fk_user_role_user_pk FOREIGN KEY (id_user) REFERENCES users (id),
	CONSTRAINT fk_user_role_role_pk FOREIGN KEY (id_role) REFERENCES roles (id),
	CONSTRAINT uk_user_roles UNIQUE (id_user, id_role)
)
INHERITS (public.__creation_log, public.__modification_log, public.__deletion_log)
WITH (OIDS=FALSE);

ALTER TABLE public.user_roles OWNER TO postgres;
 
/* ============================================================================================== */
/* DATABASE SCHEMA - END                                                                          */
/* ============================================================================================== */
