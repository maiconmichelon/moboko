# Moboko

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


1. Instale o [Meteor](https://www.meteor.com/).
2. Baixe o projeto: "git clone https://github.com/maiconmichelon/moboko"
3. Entre na pasta do projeto: "cd moboko"
4. Baixe as dependências do projeto com o NPM: "meteor npm install"
5. Faça o deploy da aplicação: "meteor"
6. Insira os objetos no mongodb:
  6. Inicie o client mongo "meteor mongo"
  6. Adicione os objetos com:
  ```
  - db.banheiros.insert( { nome: "XX", status: 0, ordem: 1 } )
  - db.banheiros.insert( { nome: "XXX", status: 0, ordem: 2 } )
  ```
