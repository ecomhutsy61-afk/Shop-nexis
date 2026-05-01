'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCartStore } from '@/lib/store';

export default function Navbar() {
  const totalItems = useCartStore((state) => state.totalItems);

  return (
    <nav className="bg-white shadow-xl sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-amber-500/50 transition-all duration-300">
              <Image src="/logo.png" alt="Art Supplies" width={40} height={40} priority className="rounded-lg" />
            </div>
            <span className="text-3xl font-extrabold bg-gradient-to-r from-amber-700 to-amber-500 bg-clip-text text-transparent">
              Art Supplies
            </span>
          </Link>

          <div className="flex items-center gap-10">
            <Link href="/" className="text-gray-800 hover:text-amber-600 font-semibold text-lg transition-colors">
              Home
            </Link>
            <Link href="/products" className="text-gray-800 hover:text-amber-600 font-semibold text-lg transition-colors">
              Products
            </Link>
            <Link href="/about" className="text-gray-800 hover:text-amber-600 font-semibold text-lg transition-colors">
              About
            </Link>
            <Link href="/cart" className="relative text-gray-800 hover:text-amber-600 font-semibold flex items-center gap-2 transition-colors">
              <div className="p-2 rounded-full hover:bg-amber-50 transition-colors">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shadow-lg">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
