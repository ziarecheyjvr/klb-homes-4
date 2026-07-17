import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient({});

async function main() {
  const hashedPassword = await bcrypt.hash('admin123', 10);
  
  const user = await prisma.user.upsert({
    where: { email: 'admin@klbhomes.com' },
    update: {},
    create: {
      email: 'admin@klbhomes.com',
      name: 'KLB Admin',
      password: hashedPassword,
      role: 'ADMIN',
    },
  });
  console.log('Seeded Admin user:', user);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
