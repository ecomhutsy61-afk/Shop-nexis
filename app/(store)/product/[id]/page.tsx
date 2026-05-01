import Image from 'next/image';
import { notFound } from 'next/navigation';
import prisma from '@/lib/prisma';
import AddToCartButton from '@/components/AddToCartButton';

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  const product = await prisma.product.findUnique({
    where: { id },
  });

  if (!product) notFound();

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="relative h-96 lg:h-[500px]">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-contain"
              priority
            />
          </div>

          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">{product.title}</h1>
            <p className="text-gray-500 text-lg mb-2">{product.category}</p>
            <p className="text-4xl font-bold text-amber-700 mb-6">${product.price.toFixed(2)}</p>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">{product.description}</p>
            <AddToCartButton product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}
