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
    descricao VARCHAR(255) NOT NULL
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

-- nome, email, senha constraints

ALTER TABLE usuarios
ALTER COLUMN nome
SET
NOT NULL;

ALTER TABLE usuarios
ALTER COLUMN email
SET
NOT NULL;

ALTER TABLE usuarios
ADD CONSTRAINT email_unico UNIQUE (email);

ALTER TABLE usuarios
ALTER COLUMN senha
SET
NOT NULL;

CREATE TABLE produtos (
    id SERIAL PRIMARY KEY,
    descricao VARCHAR(255) NOT NULL,
    quantidade_estoque INTEGER NOT NULL,
    valor INTEGER NOT NULL,
    categoria_id INTEGER NOT NULL REFERENCES categorias(id)
);

CREATE TABLE clientes (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    cpf VARCHAR(14) UNIQUE NOT NULL,
    cep VARCHAR(10),
    rua VARCHAR(255),
    numero INTEGER,
    bairro VARCHAR(255),
    cidade VARCHAR(255),
    estado VARCHAR(100)
);

CREATE TABLE pedidos (
  id SERIAL PRIMARY KEY,
  cliente_id INTEGER NOT NULL REFERENCES clientes(id),
  observacao VARCHAR(255),
  valor_total INTEGER
);

CREATE TABLE pedido_produtos (
  id SERIAL PRIMARY KEY,
  pedido_id INTEGER REFERENCES pedidos(id),
  produto_id INTEGER NOT NULL REFERENCES produtos(id),
  quantidade_produto INTEGER NOT NULL,
  valor_produto INTEGER
);

ALTER TABLE produtos ADD COLUMN produto_imagem VARCHAR(255);