project/
├── prisma/
│   ├── schema.prisma
│   └── migrations/
├── src/
│   ├── controllers/
│   │   ├── auth.controller.ts
│   │   └── user.controller.ts
│   ├── services/
│   │   ├── auth.service.ts
│   │   └── user.service.ts
│   ├── repositories/
│   │   └── user.repository.ts
│   ├── middlewares/
│   │   ├── authMiddleware.ts
│   │   └── validatorMiddleware.ts
│   ├── routes/
│   │   ├── auth.routes.ts
│   │   └── user.routes.ts
│   ├── utils/
│   │   └── hashUtils.ts
│   ├── app.ts
│   ├── server.ts
│   └── config/
│       └── index.ts
├── .env
├── tsconfig.json
└── package.json
