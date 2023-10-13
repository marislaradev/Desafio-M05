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