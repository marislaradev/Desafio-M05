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

## Deploy
Optamos por utilizar para o deploy da aplicação a plataforma <a href="https://www.cyclic.sh" target="_blank">Cyclic</a>. Com a Cyclic o processo pode ser simplificado e automatizado gratuitamente. No artigo <a href="https://blog.cubos.academy/deploy-do-backend-na-cyclic/#" target="_blank">O que você precisa saber sobre o deploy do backend na Cyclic</a>,  Guido Cerqueira destaca seus benefícios e as etapas práticas necessárias para configurar e iniciar o deploy. 

Abaixo nosso projeto no ar:
<img src="./img/deploy.gif" alt="deploy.gif" border="0" />

## Como executar o projeto
Para executar o projeto em sua máquina é necessário ter Node.js e Postgresql instalados e configurados. Recomendamos também a IDE BeeKeeper para visualização do banco de dados e Insomnia para teste das rotas, embora você possa usar softwares e ferramentas de sua escolha como alterntiva a essas duas tecnologias.

> Execução do projeto:

1- Faça um fork do projeto

2- Clone o seu fork para sua máquina

3- Execute o comando abaixo para instalar as dependêncaias de desenvolvimento:
```bash
npm install
```

4- Verifique o funcionamento do servidor com o comando:
```bash
npm run dev
```

Algo como a imagem abaixo deve aparecer no seu terminal indicando que o servidor está funcionando:

<img src="./img/terminal server.png" alt="terminal" border="0" />

## Testando
Recomendamos o Insomnia para os testes mas caso prefira é possível utilizar outras ferramentas. Você pode testar nosso projeto em sua máquina utilizando:

http://localhost:3000 (para teste local) 

https://modern-gray-purse.cyclic.app/ (para teste remoto)

Aqui está uma lista das principais rotas da API:

| Método | Rota                              | Descrição                                          |
| ------ | --------------------------------- | -------------------------------------------------- |
| `GET`   | `/categoria`                     | Lista as categorias de produtos.                         |
| `POST`   | `/usuario`                    | Criar um novo usuário. Preencher no Json os campos nome, email e senha.                            |
| `POST`    | `/login`                           | Faz login do usuário. Preencher no Json email e senha.                        |
  
       Todas as rotas a seguir exigem o token de autenticação do usuário logado no header com o formato Bearer Token. Portanto, será necessário validar o token informado.

|        |                                   |                                                              |
| ------ | --------------------------------- | -------------------------------------------------- |
| `GET`   | `/usuario`                     | Lista dados do usuáro logado.                         |
| `PUT`   | `/usuario`                    | Altera dados do usuário logado. Preencher no Json nome, email e senha a serem alterados.                            |
| `POST`    | `/produto`                           | Permite o usuário logado cadastrar um novo produto no sistema.                        |
| `PUT`    | `/produto/:id`                       | Permite o usuário logado a atualizar as informações de um produto cadastrado.                         |
| `GET`  | `/produto`                       |  Lista todos os produtos cadastrados.      |
| `GET`    | `/produto/:id`                           | Permite o usuário logado obter um de seus produtos cadastrados.
| `DELETE`    | `/produto/:id`                           | Essa é a rota que será chamada quando o usuário logado quiser excluir um de seus produtos cadastrados.                        |
| `POST`   | `/cliente`                     | Permite usuário logado cadastrar um novo cliente no sistema.                         |
| `PUT`   | `/cliente/:id`                    | Permite o usuário realizar atualização de um cliente cadastrado.                            |
| `GET`    | `/cliente`                           | Essa é a rota que será chamada quando o usuário logado quiser listar todos os clientes cadastrados.                        |
| `GET`   | `/cliente/:id`                     | Essa é a rota que será chamada quando o usuário logado quiser obter um de seus clientes cadastrados.                         |
| `POST`   | `/pedido`                    | Essa é a rota que será utilizada para cadastrar um novo pedido no sistema.                            |
| `GET`    | `/pedido`                           | Essa é a rota que será chamada quando o usuário logado quiser listar todos os pedidos cadastrados.                        |

<br>

Abaixo exemplo de teste da rota cadastro de usuários no Insomnia:
<img src="./img/rota cadastrar usuário.png" alt="rota cadastrar usuário" width=670 border="0" />

## Contribuições
Se você deseja contribuir:

- Faça um Fork do projeto.

- Clone o Fork feito para sua máquina.

- Faça suas contribuições.

- Abra uma Solicitação de Pull Request para o branch "main".

- Aguarde discussão e possível aprovação.

Agradecemos antecipadamente pelo interesse.

## Agradecimentos
<div align="center">

<img src="./img/agradecimentos.png" alt="agradecimentos" width=400 border="0" /> </div>

Agradecemos a nossa professora Isabella Nunes; nossa representante de turma Jules; o monitor Lucas Oliveira; os professores Guido Cerqueira, José Messias Junior e Guilherme Bernal; ao Potência Tech, iniciativa do iFood que nos conectou; e também a todos da Cubos Academy.

## Autoras
<table>
    <tr>
        <td align="center">
            <a href="https://www.linkedin.com/in/aline-santana-silva/" target="_blank">
                <img src="https://media.licdn.com/dms/image/D4D03AQFmMfdgL6ilDQ/profile-displayphoto-shrink_800_800/0/1688769183184?e=1702512000&v=beta&t=Ydu24qiJy9QphPgVJC0S2gegWibZ4H_itxWUPW2eF9s" width="190px;" alt="Aline Santana" />
                <br />
                <sub><b>Aline Santana</b></sub>
            </a>
        </td>
        <td align="center">
            <a href="https://www.linkedin.com/in/bruna-fraga-dev/" target="_blank">
                <img src="https://media.licdn.com/dms/image/D4D03AQFwtxfK4pHjrA/profile-displayphoto-shrink_800_800/0/1694603552783?e=1702512000&v=beta&t=DiyB_N8ylrgvCo-y_qjfpvURG0jvtkaijMf49DLqKDI" width="190px;" alt="Bruna Fraga" />
                <br />
                <sub><b>Bruna Fraga</b></sub>
            </a>
        </td>
        <td align="center">
            <a href="https://www.linkedin.com/in/gabriela-thially-69771b221/" target="_blank">
                <img src="https://media.licdn.com/dms/image/D4D03AQGxgT5VrUUSKQ/profile-displayphoto-shrink_800_800/0/1688770932594?e=1702512000&v=beta&t=ibYzYd11mQG4jXoubVJxfI51EjGVULSypygVoaEvkiM" width="190px;" alt="Gabriela Thially" />
                <br />
                <sub><b>Gabriela Thially</b></sub>
            </a>
        </td>
        <td align="center">
            <a href="https://www.linkedin.com/in/mariana-da-silva-lara-380871285/" target="_blank">
                <img src="https://media.licdn.com/dms/image/D4E03AQEdlFZabXQy2g/profile-displayphoto-shrink_800_800/0/1690531354020?e=1702512000&v=beta&t=mFuvVTFXFXqxxGBT913dJRoSQMSyPpWOQm5sg3vvMvA" width="190px;" alt="Mariana da Silva Lara" />
                <br />
                <sub><b>Mariana da Silva Lara</b></sub>
            </a>
        </td>
        <td align="center">
            <a href="https://www.linkedin.com/in/paularml/" target="_blank">
                <img src="https://media.licdn.com/dms/image/D4D03AQE3oc_qqvdPEw/profile-displayphoto-shrink_800_800/0/1697671749779?e=1703116800&v=beta&t=5M4947LwzcV6CZcij3TbmGi7RL0BZNnJBNeTsGfy_qs" width="195px;" alt="Imagem de Paula Magalhães Leite" />
                <br />
                <sub><b>Paula R. M. Leite</b></sub>
            </a>
        </td>
    </tr>
</table>

## Licença
Este projeto esta sobe a licença [MIT](./License).
<br>

---

###### tags: `back-end` `nodeJS` `PostgreSQL` `API REST` `desafio` `API` `pdv` `cubos academy`


