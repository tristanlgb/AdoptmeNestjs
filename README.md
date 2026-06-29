# AdoptMe API — NestJS

API REST para administrar usuarios, mascotas y adopciones. El proyecto aplica la arquitectura modular de NestJS y utiliza MongoDB como base de datos mediante Mongoose.

## Funcionalidades

- CRUD de usuarios.
- CRUD de mascotas.
- Registro y consulta de adopciones.
- Relaciones entre adoptante y mascota con referencias de MongoDB.
- Validación de recursos inexistentes mediante excepciones HTTP.
- Pruebas unitarias y una base de pruebas end-to-end.

## Stack

- Node.js y TypeScript
- NestJS
- MongoDB y Mongoose
- Jest y Supertest
- ESLint y Prettier

## Arquitectura

La aplicación está organizada por dominio en los módulos `users`, `pets` y `adoptions`. Cada módulo separa controladores, servicios, DTOs, entidades y esquemas de persistencia. `src/app.module.ts` compone la aplicación y `src/main.ts` inicia el servidor.

## Configuración

Crear un archivo `.env`:

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/adoptme
```

## Ejecución

```bash
npm install
npm run start:dev
```

## Calidad

```bash
npm run build
npm run lint
npm test
npm run test:e2e
npm run test:cov
```

> Proyecto educativo orientado a practicar APIs modulares con NestJS y MongoDB.