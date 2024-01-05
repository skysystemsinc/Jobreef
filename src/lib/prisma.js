import { PrismaClient } from '@prisma/client';
import customFields from './customFields';

let prisma;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  let globalWithPrisma = global;
  if (!globalWithPrisma.prisma) {
    globalWithPrisma.prisma = new PrismaClient();
  }
  prisma = globalWithPrisma.prisma;
}

const prismaExtended = prisma.$extends({
  result: customFields,
});

export default prismaExtended;
