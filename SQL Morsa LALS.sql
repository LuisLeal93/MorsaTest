-- Database: api_user_nono

-- DROP DATABASE api_user_nono;

CREATE DATABASE api_user_nono
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Spanish_Mexico.1252'
    LC_CTYPE = 'Spanish_Mexico.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

-- User: nono
-- DROP USER nono;

CREATE USER nono WITH
  LOGIN
  SUPERUSER
  INHERIT
  CREATEDB
  CREATEROLE
  NOREPLICATION
  VALID UNTIL '2100-12-31 23:21:24-07';

COMMENT ON ROLE nono IS 'superusuario';

-- Table: public.usuario

-- DROP TABLE public.usuario;

CREATE TABLE public.usuario
(
    id bigserial NOT NULL,
    nickname character varying(12) COLLATE pg_catalog."default" NOT NULL,
    nombre character varying(40) COLLATE pg_catalog."default" NOT NULL,
    apellidopaterno character varying(40) COLLATE pg_catalog."default" NOT NULL,
    apellidomaterno character varying(40) COLLATE pg_catalog."default" NOT NULL,
    activo boolean NOT NULL,
    fechaingreso date NOT NULL,
    CONSTRAINT usuario_pkey PRIMARY KEY (id),
    CONSTRAINT csunique_nickname UNIQUE (nickname)

)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.usuario
    OWNER to nono;
	

INSERT INTO public.usuario(
	"nickname", "nombre", "apellidopaterno", "apellidomaterno", "activo", "fechaingreso")
	VALUES ('SevenX78', 'Jesus Fabian', 'Paterno', 'Materno', true, Now());
	
INSERT INTO public.usuario(
	"nickname", "nombre", "apellidopaterno", "apellidomaterno", "activo", "fechaingreso")
	VALUES ('SomeDude', 'Fulano Mangano', 'Paterno2', 'Materno2', true, Now());
	
INSERT INTO public.usuario(
	"nickname", "nombre", "apellidopaterno", "apellidomaterno", "activo", "fechaingreso")
	VALUES ('Alguien', 'Jackob N', 'Paterno3', 'Materno3', true, Now());

	
SELECT * FROM usuario