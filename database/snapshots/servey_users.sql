CREATE TABLE public.servey_users(
	id integer NOT NULL DEFAULT nextval('servey_users_id_seq'::regclass),
	servey_id integer NOT NULL,
	user_id integer NULL,
	guest_user_id integer NULL,
	CONSTRAINT servey_users_pkey PRIMARY KEY (id),
	CONSTRAINT servey_users_servey_id_fkey FOREIGN KEY (servey_id) REFERENCES public.servey (id),
	CONSTRAINT servey_users_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users (id),
	CONSTRAINT servey_users_guest_user_id_fkey FOREIGN KEY (guest_user_id) REFERENCES public.guest_user (id) 
	)
	