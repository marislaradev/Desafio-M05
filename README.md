<div align="center"><img src="./img/cubos store restful api.png" alt="cubos store restful api" width=700 border="0" /></a></div>
<br>
<br>
<h1>Desafio final Cubos Academy - Backend</h1>

### Desafio desenvolvido para o módulo final do curso Desenvolvimento de Software com foco em Back End da Cubos Academy
<br>

## Descrição do desafio
O desafio consiste em uma equipe de 5 alunas, integrantes da turma B2B-T05 iFood, criarem a API para um PDV (Frente de Caixa). Esse será um projeto piloto, ou seja, no futuro outras funcionalidades serão implementadas. Após a criação dessa API as alunas devem efetuar o deploy da aplicação.

## Requisitos obrigatórios
- A API a ser criada deverá acessar o banco de dados a ser criado pdv para persistir e manipular os dados de categorias, clientes, pedidos, produtos e usuários utilizados pela aplicação.

 - O campo id das tabelas no banco de dados deve ser auto incremento, chave primária e não deve permitir edição uma vez criado.

- Qualquer valor monetário deverá ser representado em centavos (Ex.: R$ 10,00 reais = 1000)

- As rotas detalhar perfil do usuário logado e editar perfil do usuário logado deverão exigir o token de autenticação do usuário logado, recebendo no header com o formato Bearer Token. Portanto, em cada funcionalidade será necessário validar o token informado.

## Funcionalidades
- Listar categorias
- Cadastrar usuário
- Efetuar Login do usuário
- Detalhar perfil do usuário logado
- Editar perfil do usuário logado
 
 ## Tecnologias usadas
<img src="./img/icons8-javascript-96.png" alt="javascript" border="0" /></a><img src="./img/icons8-node-js-96.png" alt="nodejs" border="0" /><img src="./img/icons8-express-js-96.png" alt="express" border="0" /><img src="./img/icons8-postgresql-100.png" alt="postgresql" border="0" /><img src="./img/icons8-npm-96.png" alt="npm" border="0" /><img src="./img/icons8-git-100.png" alt="git" border="0" /><img src="./img/icons8-plus-math-96.png" alt="plus" border="0" />

**Javascript, Node.js, Express.js, PostgreSQL, Npm, Git, Jwt, Bcrypt, Knex, Nodemon, ElephantSQL, Cyclic**

## Como executar o projeto
Para executar o projeto em sua máquina é necessário ter Node.js e Postgresql instalados e configurados. Recomendamos também a IDE BeeKeeper para visualização do banco de dados e Insomnia para teste das rotas, embora você possa usar softwares e ferramentas de sua escolha como alterntiva a essas duas tecnologias.

> Execução do projeto:

1- Faça um fork do projeto

2- Clone o seu fork para sua máquina

3- Execute o comando abaixo para instalar as dependêncaias de desenvolvimento:
```bash
npm install
```

4- Inicie o servidor com o comando:
```bash
npm run dev
```

Algo como a imagem abaixo deve aparecer no seu terminal indicando que o servidor está funcionando:

<img src="./img/terminal server.png" alt="terminal" border="0" />


## Deploy
Optamos por utilizar para o deploy da aplicação a plataforma [Cyclic](https://www.cyclic.sh/ "Link para a plataforma"). Com a Cyclic o processo pode ser simplificado e automatizado gratuitamente. No artigo [O que você precisa saber sobre o deploy do backend na Cyclic](https://blog.cubos.academy/deploy-do-backend-na-cyclic/# "Link para o artigo") Guido Cerqueira destaca seus benefícios e as etapas práticas necessárias para configurar e iniciar o deploy. 

Abaixo nosso projeto no ar:
<img src="./img/deploy.gif" alt="deploy.gif" border="0" />

Link:

## Testando
Você pode testar localmente nosso projeto na porta 3000 utilizando o http://localhost:3000/. Recomendamos o Insomnia para os testes mas caso prefira é possível utilizar outra ferramenta.

Rota para cadastro de usuários:
<img src="./img/rota cadastrar usuário.png" alt="rota cadastrar usuário" border="0" />

## Contribuições
Se você deseja contribuir:

- Crie um branch.

- Faça suas contribuições.

- Abra uma Solicitação de Pull Request para o branch "main".

- Aguarde discussão e possível aprovação.

Agradecemos antecipadamente pelo interesse.

## Agradecimentos
<div align="center">

<img src="./img/agradecimentos.png" alt="agradecimentos" width=300 border="0" /> </div>

Agradecemos a nossa professora Isabella Nunes; nossa monitora Jules; os professores Guido Cerqueira e José Messias Junior; ao Potência Tech, iniciativa do iFood que nos conectou; e também a todos da Cubos Academy.

## Autoras

