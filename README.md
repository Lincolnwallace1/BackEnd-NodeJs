# BackEnd-NodeJs

Rest API para USER.

## Curl e NodeJs

Verificar previamente se o curl e o NodeJs estão instalados, para isso basta executar na raiz do projeto:

curl --version

caso não retorne a versão, usar o comando:

sudo apt install curl

para verificar o NodeJs, executar o comando na raiz do projeto:

node -v

caso não retorne a versão, usar o comando:

sudo apt-get install -y nodejs

## Primeiros passos

Para iniciar o projeto, digite na pasta da raiz do projeto:

yarn init -y

## Dependências

Para adicionar uma dependências, digite na raiz do projeto:

yarn add "nome da dependencia"

exemplo:

yarn add typescript -D (-D significa dependencia de desenvolvedor, so é utilizada pra desenvolver)

yarn tsc --init (Para iniciar o typescript e criar o tsconfig.json)

yarn add express

yarn add @types/express -D

yarn add ts-node-dev -D

## Banco de dados

O banco de dados escolhido foi o PostegreSQL, para instalar sua dependencia, executar na raiz do projeto:

yarn add reflect-metadata pg

