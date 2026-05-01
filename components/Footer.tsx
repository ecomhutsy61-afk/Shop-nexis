export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-extrabold text-amber-400 mb-6">Art Supplies</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Your one-stop shop for premium art materials and supplies. Unleash your creativity with us!
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6 text-gray-100">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-gray-300 hover:text-amber-400 text-lg transition-colors flex items-center gap-2">
                  <span className="text-amber-400">→</span> Home
                </a>
              </li>
              <li>
                <a href="/products" className="text-gray-300 hover:text-amber-400 text-lg transition-colors flex items-center gap-2">
                  <span className="text-amber-400">→</span> Products
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-amber-400 text-lg transition-colors flex items-center gap-2">
                  <span className="text-amber-400">→</span> About Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-lg">
            &copy; 2026 Art Supplies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
