'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCartStore } from '@/lib/store';
import { Product } from '@prisma/client';

export default function ProductCard({ product }: { product: Product }) {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
      <Link href={`/product/${product.id}`} className="block">
        <div className="relative h-72 bg-gray-50">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain p-4"
            priority
          />
        </div>
      </Link>
      <div className="p-6">
        <Link href={`/product/${product.id}`} className="block">
          <h3 className="font-bold text-xl text-gray-900 hover:text-amber-600 transition-colors line-clamp-2">
            {product.title}
          </h3>
        </Link>
        <p className="text-amber-600 text-sm font-medium mt-2 uppercase tracking-wider">
          {product.category}
        </p>
        <div className="flex justify-between items-center mt-6">
          <span className="text-3xl font-extrabold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          <button
            onClick={() => addItem({ id: product.id, title: product.title, price: product.price, image: product.image })}
            className="bg-amber-500 hover:bg-amber-400 text-gray-900 px-6 py-3 rounded-xl font-bold transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
