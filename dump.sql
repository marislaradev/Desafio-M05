CREATE TABLE usuarios
(
    id SERIAL PRIMARY KEY,
    nome TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    senha TEXT NOT NULL
);

CREATE TABLE categorias
(
    id SERIAL PRIMARY KEY,
    descricao TEXT NOT NULL
);

INSERT INTO categorias
    (descricao)
VALUES
    ('Informática'),
    ('Celulares'),
    ('Beleza e Perfumaria'),
    ('Mercado'),
    ('Livros e Papelaria'),
    ('Brinquedos'),
    ('Moda'),
    ('Bebê'),
    ('Games');

-- nome, email senha characters limitation

ALTER TABLE usuarios
ADD COLUMN novo_nome VARCHAR
(255);



ALTER TABLE usuarios
ADD COLUMN novo_email VARCHAR
(320);

ALTER TABLE usuarios
ADD COLUMN novo_senha VARCHAR
(128);

UPDATE usuarios
SET novo_nome = nome;

UPDATE usuarios
SET novo_email = email;

UPDATE usuarios
SET novo_senha = senha;


ALTER TABLE usuarios
DROP COLUMN nome;

ALTER TABLE usuarios
DROP COLUMN email;

ALTER TABLE usuarios
DROP COLUMN senha;

ALTER TABLE usuarios
RENAME COLUMN novo_nome TO nome;


ALTER TABLE usuarios
RENAME COLUMN novo_email TO email;


ALTER TABLE usuarios
RENAME COLUMN novo_senha TO senha;