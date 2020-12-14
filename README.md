# RIMA Site
Data related to the RIMA project - Information Network on Brazilian Atlantic Forest

Projeto desenvolvido utilizando recursos de código livre

## Frameorks e serviços
* [Vus JS](https://vuejs.org)
* [Webpack Vue Cli](https://cli.vuejs.org)
* [LeafLet](https://leafletjs.com)
* [Json-Server](https://github.com/typicode/json-server)
* [Bootstrap-Vue](https://bootstrap-vue.org)

## Codificação
* HTML
* CSS
* Java Script
* Json
#

## Subir aplicação via Ubuntu 20.04
Permissão de acesso no para script **./install**
```sh
sudo chmod 777 start
```
### Instalar e subir
Executar script
```sh
./start install
```
### Atualizar e subir
Executar script
```sh
./start -b
```

Outros parâmetros
```
-i, install -> Instalar docker, docker-compose e npm via apt

-b, build -> Build aplicação para a pasta ./dist e subir máquina docker

-bn -> Build aplicação para a pasta ./dist

-h, help -> Exibir documentação
```
Exemplo:
```sh
./start -h
```

## Subir aplicação via script
O Script ./start contem uma série de comando para fazer o build da aplicação.

Build da aplicação via Docker
```sh
./start -b
```



## Subir aplicação manualmente
### 1. Instalar dependecias do projeto
```sh
npm install
```

### 2. Build para produção
Este comando compila o projeto na pasta **./dist**
```sh
npm run build
```
### 3. Hot-reload
Servidor com hot-reload apenas para desenvolvimento
```sh
npm run serve
```
## Subir ou atualizar a aplicação via docker
**Realizar os passos 1. e 2. acima**

Na pasta raiz do projeto execute:
```sh
sudo docker-compose up --force-recreate -d 
```

Mover o arquivo **./htaccess** para a pasta **./dist**
```sh
cp ./.htaccess ./dist
```
Pode ser visto em [localhost](http://localhost)

## Json Server(apenas para testes desenvolvimento)
O banco de teste se encontra em **./server/db.json**
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
Ligar json server IP externo
```sh
json-server --watch db.json --ro --host <seu IP>
```
Ligar json server IP externo em segundo plano
```sh
json-server --watch db.json --ro --host <seu IP> >> ./json-server.log 2>&1 </dev/null &
```

