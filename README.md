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


## Comandos para subir o projeto
### 1. Instalar dependecias do projeto
```sh
npm install
```

### 2. Build para produção
Este comando compila o projeto na pasta **./dist**
```sh
npm run build
```
### 3. Levantar servidor da aplicação
Servidor com hot-reload apenas para desenvolvimento
```sh
npm run serve
```
## Subir ou atualizar a aplicação
**Realizar os passos 1. e 2. acima**

Nesta pasta do execute:
```sh
sudo docker-compose up --build -d 
```

Mover o arquivo **./htaccess** para a pasta **./dist**

Pode ser visto em [localhost](http://localhost)

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

