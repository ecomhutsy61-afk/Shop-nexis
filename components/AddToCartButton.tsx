'use client';

import { useCartStore, CartItem } from '@/lib/store';
import { Product } from '@prisma/client';

export default function AddToCartButton({ product }: { product: Product }) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
    });
  };

  return (
    <button
      onClick={handleAddToCart}
      className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors w-full lg:w-auto"
    >
      Add to Cart
    </button>
  );
}
