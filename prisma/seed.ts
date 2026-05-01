import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import bcrypt from 'bcrypt';
import fs from 'fs';
import path from 'path';
import 'dotenv/config';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const productData = {
  'Craft Supplies': [
    { image: '2.webp', price: 12.99 },
    { image: '3.jpg', price: 8.49 },
    { image: '4.jfif', price: 15.99 },
    { image: '5.jpg', price: 19.99 }
  ],
  'DrawingSupplies': [
    { image: '1.jpg', price: 9.99 },
    { image: '3.webp', price: 14.99 },
    { image: '5.jpg', price: 22.99 },
    { image: '6.webp', price: 7.99 },
    { image: '7.jpg', price: 16.99 }
  ],
  'PaintingSupplies': [
    { image: '1.jpg', price: 24.99 },
    { image: '2.webp', price: 18.49 },
    { image: '3.webp', price: 29.99 },
    { image: '4.webp', price: 11.99 },
    { image: '6.jpg', price: 34.99 },
    { image: '7.webp', price: 21.99 }
  ]
};

function generateTitle(category: string, index: number): string {
  const titles = {
    'Craft Supplies': [
      'Premium Craft Paper Set',
      'Decorative Ribbon Collection',
      'DIY Craft Kit',
      'Glitter & Sequins Assortment'
    ],
    'DrawingSupplies': [
      'Professional Sketch Pencil Set',
      'Fine Liner Marker Pack',
      'Charcoal Drawing Kit',
      'Colored Pencil Set',
      'Sketchbook Premium'
    ],
    'PaintingSupplies': [
      'Acrylic Paint Set',
      'Watercolor Paint Kit',
      'Oil Paint Collection',
      'Paint Brush Set',
      'Canvas Panel Pack',
      'Easel Stand'
    ]
  };
  return titles[category as keyof typeof titles][index];
}

function generateDescription(category: string, title: string): string {
  const descriptions = {
    'Craft Supplies': `High-quality ${title.toLowerCase()} perfect for all your craft projects.`,
    'DrawingSupplies': `Professional ${title.toLowerCase()} for artists of all skill levels.`,
    'PaintingSupplies': `Premium ${title.toLowerCase()} for creating beautiful artwork.`
  };
  return descriptions[category as keyof typeof descriptions];
}

async function main() {
  console.log('Starting seed...');

  const hashedPassword = await bcrypt.hash('admin', 10);
  await prisma.admin.upsert({
    where: { username: 'admin' },
    update: {},
    create: {
      username: 'admin',
      password: hashedPassword
    }
  });
  console.log('Admin created.');

  for (const [category, products] of Object.entries(productData)) {
    for (let i = 0; i < products.length; i++) {
      const product = products[i];
      const title = generateTitle(category, i);
      const imagePath = `/images/${category}/${product.image}`;
      
      await prisma.product.create({
        data: {
          title,
          description: generateDescription(category, title),
          price: product.price,
          image: imagePath,
          category
        }
      });
      console.log(`Created product: ${title}`);
    }
  }

  console.log('Seed completed!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
