import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import prisma from '@/lib/prisma';

export default async function ProductsPage({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
  const params = await searchParams;
  const categoryFilter = params.category;
  const products = await prisma.product.findMany({
    where: categoryFilter ? { category: categoryFilter } : undefined,
  });
  const categories = await prisma.product.findMany({
    select: { category: true },
    distinct: ['category'],
  });

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">All Products</h1>

        <div className="flex flex-wrap gap-4 mb-12">
          <Link
            href="/products"
            className={`px-4 py-2 rounded-lg font-medium bg-gray-100 text-gray-700 hover:bg-gray-200`}
          >
            All
          </Link>
          <Link
            href="/products/craft"
            className={`px-4 py-2 rounded-lg font-medium bg-gray-100 text-gray-700 hover:bg-gray-200`}
          >
            Craft Supplies
          </Link>
          <Link
            href="/products/drawing"
            className={`px-4 py-2 rounded-lg font-medium bg-gray-100 text-gray-700 hover:bg-gray-200`}
          >
            Drawing Supplies
          </Link>
          <Link
            href="/products/painting"
            className={`px-4 py-2 rounded-lg font-medium bg-gray-100 text-gray-700 hover:bg-gray-200`}
          >
            Painting Supplies
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
