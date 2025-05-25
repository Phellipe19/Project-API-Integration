# Project-API-Integration - Autenticação com HTML, CSS e JavaScript
Este projeto é uma aplicação web simples e funcional que implementa um sistema de cadastro, login e tela de boas-vindas, totalmente desenvolvida com tecnologias nativas do front-end: HTML5, CSS3 e JavaScript puro.
A aplicação consome uma API externa de autenticação para realizar o registro e a validação dos usuários, e mantém o estado de autenticação utilizando o localStorage.

Funcionalidades
 - Tela de Login:
 - Interface estilizada com campos de e-mail e senha, integração com a API de autenticação e tratamento de erros.

Tela de Cadastro:
 - Validação de senha forte, confirmação de senha, e tratamento das mensagens de erro retornadas pela API.

Tela de Boas-Vindas:
 - Após login ou cadastro bem-sucedido, o usuário é redirecionado para uma nova tela com uma mensagem personalizada exibindo seu e-mail e a data de expiração do token.

Armazenamento Seguro:
 - O token JWT e os dados do usuário são armazenados de forma simples no localStorage, com redirecionamento automático caso o usuário não esteja autenticado.

#Tecnologias Utilizadas
 - HTML5
 - CSS3
 - JavaScript (ES6+)
 - Fetch API
 - LocalStorage
 - Live Server (para rodar localmente)
