<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Setup for development

1. Clone the repository
2. Run

```
yarn install
```

3. Install Nest CLI

```
npm i -g @nestjs/cli
```

4. Setup database with docker

```
docker compose up -d
```

5. Clone the file **.env.template** and rename as **.env**

6. Redefine the env variables on **.env** file as required

7. Run app locally with:

```
yarn start:dev
```
8. Rebuild the database with the seed

```
GET {{url}}/seed
```

## Tech stack

- Nest
- MongoDB
- Mongoose

# Production Build 

1. Create file ```.env.prod ```
2. Define production env vars 
3. Create docker image
```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```