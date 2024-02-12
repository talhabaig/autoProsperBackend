CREATE TABLE public.servery_users(
	id integer NOT NULL DEFAULT nextval('servery_users_id_seq'::regclass),
	servey_id integer NOT NULL,
	user_id integer NULL,
	guest_user_id integer NULL,
	CONSTRAINT servery_users_pkey PRIMARY KEY (id),
	CONSTRAINT servery_users_servey_id_fkey FOREIGN KEY (servey_id) REFERENCES public.servey (id),
	CONSTRAINT servery_users_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users (id),
	CONSTRAINT servery_users_guest_user_id_fkey FOREIGN KEY (guest_user_id) REFERENCES public.guest_user (id) 
	)
	