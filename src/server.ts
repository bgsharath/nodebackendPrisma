// server.ts
import { PrismaClient } from '@prisma/client';
import app from './app';
import { config } from './config';

const prisma = new PrismaClient();

prisma.$connect().then(() => {
  console.log('Prisma connected successfully');
  app.listen(config.port, () => {
    console.log(`Server running on http://localhost:${config.port}`);
  });
});