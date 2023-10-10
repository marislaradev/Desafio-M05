CREATE DATABASE pdv

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