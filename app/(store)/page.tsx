import Image from 'next/image';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import prisma from '@/lib/prisma';

export default async function Home() {
  const products = await prisma.product.findMany({ take: 6 });
  const categories = ['Craft Supplies', 'DrawingSupplies', 'PaintingSupplies'];

  return (
    <div className="bg-white">
      <section className="relative h-[500px] bg-gradient-to-r from-amber-50 to-amber-100 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero.png"
            alt="Art Supplies"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/70 to-amber-800/60 flex items-center justify-center">
          <div className="text-center text-white max-w-3xl px-4">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
              Premium Art Supplies
            </h1>
            <p className="text-xl md:text-2xl mb-10 opacity-95 drop-shadow-md">
              Discover everything you need to create beautiful art
            </p>
            <Link
              href="/products"
              className="inline-block bg-amber-500 hover:bg-amber-400 text-gray-900 px-10 py-4 rounded-xl font-bold text-xl transition-all duration-300 shadow-2xl hover:shadow-amber-500/50 hover:-translate-y-1"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Featured Products
            </h2>
            <div className="h-1 w-32 bg-amber-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Shop by Category
            </h2>
            <div className="h-1 w-32 bg-amber-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Link
                key={category}
                href={`/products?category=${encodeURIComponent(category)}`}
                className="group bg-white rounded-2xl shadow-lg p-10 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {index === 0 ? '✂️' : index === 1 ? '✏️' : '🎨'}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{category}</h3>
                <p className="text-gray-600 mt-2">Explore all products</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Best Sellers
            </h2>
            <div className="h-1 w-32 bg-amber-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.slice(0, 3).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <div className="h-1 w-32 bg-amber-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Premium Quality</h3>
              <p className="text-gray-600">We curate only the finest art supplies from trusted brands for professional results.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="text-5xl mb-4">🚚</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fast Shipping</h3>
              <p className="text-gray-600">Quick delivery to your doorstep with reliable shipping partners across the country.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Best Prices</h3>
              <p className="text-gray-600">Competitive pricing with regular discounts and special offers for our customers.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="text-5xl mb-4">💬</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Support</h3>
              <p className="text-gray-600">Dedicated customer service team ready to help you find the perfect art supplies.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Customer Reviews
            </h2>
            <div className="h-1 w-32 bg-amber-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl shadow-lg p-8 border border-amber-200">
              <div className="flex items-center mb-4">
                <div className="text-2xl">⭐⭐⭐⭐⭐</div>
              </div>
              <p className="text-gray-600 mb-4 italic">&quot;Excellent quality products and fast delivery! I&apos;m very satisfied with my purchase. Will definitely order again.&quot;</p>
              <div className="border-t border-amber-200 pt-4">
                <p className="font-bold text-gray-900">Sarah Johnson</p>
                <p className="text-sm text-gray-500">Verified Customer</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl shadow-lg p-8 border border-amber-200">
              <div className="flex items-center mb-4">
                <div className="text-2xl">⭐⭐⭐⭐⭐</div>
              </div>
              <p className="text-gray-600 mb-4 italic">&quot;Best art supplies store online! The prices are competitive and the quality is unmatched. Highly recommended for all artists.&quot;</p>
              <div className="border-t border-amber-200 pt-4">
                <p className="font-bold text-gray-900">Michael Chen</p>
                <p className="text-sm text-gray-500">Verified Customer</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl shadow-lg p-8 border border-amber-200">
              <div className="flex items-center mb-4">
                <div className="text-2xl">⭐⭐⭐⭐⭐</div>
              </div>
              <p className="text-gray-600 mb-4 italic">&quot;Great selection of products and amazing customer service. They helped me choose the perfect supplies for my art class.&quot;</p>
              <div className="border-t border-amber-200 pt-4">
                <p className="font-bold text-gray-900">Emma Williams</p>
                <p className="text-sm text-gray-500">Verified Customer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <div className="h-1 w-32 bg-amber-500 mx-auto rounded-full"></div>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            <details className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <summary className="cursor-pointer p-6 font-bold text-gray-900 bg-gradient-to-r from-amber-50 to-transparent hover:from-amber-100 transition-colors duration-300 flex items-center justify-between">
                <span>What payment methods do you accept?</span>
                <span className="text-amber-600">+</span>
              </summary>
              <div className="px-6 pb-6 text-gray-600 border-t border-gray-200">
                <p>We accept all major credit cards (Visa, Mastercard, American Express), debit cards, and digital payment methods like PayPal, Google Pay, and Apple Pay. All transactions are secure and encrypted.</p>
              </div>
            </details>

            <details className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <summary className="cursor-pointer p-6 font-bold text-gray-900 bg-gradient-to-r from-amber-50 to-transparent hover:from-amber-100 transition-colors duration-300 flex items-center justify-between">
                <span>How long does shipping take?</span>
                <span className="text-amber-600">+</span>
              </summary>
              <div className="px-6 pb-6 text-gray-600 border-t border-gray-200">
                <p>Standard shipping typically takes 5-7 business days. We also offer express shipping (2-3 business days) and next-day delivery options. Shipping times may vary based on your location and order size.</p>
              </div>
            </details>

            <details className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <summary className="cursor-pointer p-6 font-bold text-gray-900 bg-gradient-to-r from-amber-50 to-transparent hover:from-amber-100 transition-colors duration-300 flex items-center justify-between">
                <span>Do you offer returns and exchanges?</span>
                <span className="text-amber-600">+</span>
              </summary>
              <div className="px-6 pb-6 text-gray-600 border-t border-gray-200">
                <p>Yes! We offer a 30-day return policy on all unused products. Items must be in original packaging with all accessories. Exchanges are available for different sizes or colors. Contact our support team for return instructions.</p>
              </div>
            </details>

            <details className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <summary className="cursor-pointer p-6 font-bold text-gray-900 bg-gradient-to-r from-amber-50 to-transparent hover:from-amber-100 transition-colors duration-300 flex items-center justify-between">
                <span>Are your products suitable for professional artists?</span>
                <span className="text-amber-600">+</span>
              </summary>
              <div className="px-6 pb-6 text-gray-600 border-t border-gray-200">
                <p>Absolutely! We stock professional-grade art supplies from leading brands used by artists worldwide. Whether you&apos;re a beginner or professional, we have products for every skill level and budget.</p>
              </div>
            </details>

            <details className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <summary className="cursor-pointer p-6 font-bold text-gray-900 bg-gradient-to-r from-amber-50 to-transparent hover:from-amber-100 transition-colors duration-300 flex items-center justify-between">
                <span>Do you offer bulk discounts?</span>
                <span className="text-amber-600">+</span>
              </summary>
              <div className="px-6 pb-6 text-gray-600 border-t border-gray-200">
                <p>Yes! We offer special pricing for bulk orders. Schools, art studios, and businesses can contact our sales team for custom quotes. Email us at sales@artsupplies.com for bulk order inquiries.</p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
}
