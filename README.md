<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Run in development

1. Clone repository
2. Execute

```
yarn install
```

3. Install Nest CLI in your OS

```
npm i -g @nestjs/cli
```

4. Run Database

```
docker-compose up -d
```

5. Clone file **.env.template** and rename copy **.env**
6. Set env variables in `.env`
7. Run app in dev

```
yarn start:dev
```

6. Build DB with Seed

```
http://localhost:3000/api/v2/seed
```

## Tech

- MongoDB
- Nest
- TypeScript
