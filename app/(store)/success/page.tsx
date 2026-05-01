import Link from 'next/link';

export default function SuccessPage() {
  return (
    <div className="py-20 text-center">
      <div className="text-8xl mb-6">🎉</div>
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Order Placed Successfully!</h1>
      <p className="text-xl text-gray-600 mb-8">Thank you for your purchase. We&apos;ll process your order right away.</p>
      <Link
        href="/"
        className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors inline-block"
      >
        Continue Shopping
      </Link>
    </div>
  );
}
