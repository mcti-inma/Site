# RIMA Site
Projeto desenvolvido utilizando recursos de código livre

## Frameorks e serviços
* [Vus JS](https://vuejs.org)
* [Webpack Vue Cli](https://cli.vuejs.org)
* [LeafLet](https://leafletjs.com)
* [Json-Server](https://github.com/typicode/json-server)

## Codificação
* HTML
* CSS
* Java Script
* Json
#
## Subir ou atualizar a aplicação (via docker)
Na pasta do projeto execute:
```sh
sudo docker-compose up --build -d 
```

## Comandos para subir o projeto
### 1. Instalar dependecias do projeto
```sh
npm install
```

### 2. Levantar servidor da aplicação
Servido com hot-reload para desenvolvimento
```sh
npm run serve
```

### 3. Build para produção
Este comando compila o projeto na pasta **./dist**
```sh
npm run build
```

## Json Server
Api de teste
### 1. Instalar o json server via npm
```sh
npm install -g json-server
```
### 2. Executar serviço
No diretório **./server** execute:
```sh
json-server --watch db.json
```
O banco de teste se encontra em **./server/db.json**

