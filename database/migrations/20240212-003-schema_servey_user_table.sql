

/*==============================================================*/
/* TABLE: guest_user                                          */
/*==============================================================*/
CREATE TABLE IF NOT EXISTS public.servery_users (
    id SERIAL PRIMARY KEY,
    servey_id INTEGER NOT NULL REFERENCES public.servey(id),
    user_id INTEGER REFERENCES public.users(id),
    guest_user_id INTEGER REFERENCES public.guest_user(id),
    CONSTRAINT at_least_one_user_or_guest_user 
        CHECK ((user_id IS NOT NULL AND guest_user_id IS NULL) OR (user_id IS NULL AND guest_user_id IS NOT NULL))
);

ALTER TABLE IF EXISTS public.servery_users
OWNER TO postgres;
