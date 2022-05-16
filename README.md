# Teste Ligue
Api feita com Node, TypeScript, Express, Prisma, Postgres, Jest, Husky, Swagger e Docker

Frontend feito com TypeScript, Vite, React, React Query, Axios e Docker

Feito utilizando os melhores praticas de design de código como SOLID, Clean Arch e Hex Arch

## Instalação
```bash
$ cd ligue-front
$ yarn install
$ cd ligue-backend
$ yarn install
```
## Rodar os containers
```bash
$ docker-compose up
```
## Migre o banco de dados
```bash
$ cd ligue-backend
$ yarn run prisma:migrate
```
## Endpoints da API
```bash
# localhost:3000/api - Swagger
# GET localhost:3000/developers - buscar desenvolvedores
# POST localhost:3000/developers - criar desenvolvedor
# GET localhost:3000/developers/:id - buscar desenvolvedor por id
# GET localhost:3000/developers/filter? - filtrar desenvolvedores via querystring exemplo: /filter?age=20 /filter?sex=M
# DELETE localhost:3000/developers/:id - excluir desenvolvedor por id
# PUT localhost:3000/developers/:id - atulizar informações do desenvolvedor por id
```
## Parametros para o POST
```bash
# [
    {
    name: string,
    age: int,
    hobby: string,
    sex: 'M' | 'F'
    birthdate: '2016-09-18T00:00:00.000Z' obs: nesse campo a API só aceita datas validas da ISO 8601 como no exemplo
  }
]
```
## Exemplo de data
```bash
# '2020-05-16T07:021:00.000Z'
# '2000-01-05T07:021:00.000Z'
```
## Endpoints do Frontend
```bash
# localhost:3001/
```
## Documentação da API com Swagger
```bash
# localhost:3000/api
```
## Prisma Studio
```bash
# localhost:5000
$ yarn prisma studio
```
## Test
```bash
# unit tests
$ yarn run test
# e2e tests
$ yarn run test:e2e
# test coverage
$ yarn run test:cov
```
