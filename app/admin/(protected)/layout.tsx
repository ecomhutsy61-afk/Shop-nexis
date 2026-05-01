import Link from 'next/link';
import { isAdminAuthenticated } from '@/lib/auth';
import { redirect } from 'next/navigation';

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const isAuthenticated = await isAdminAuthenticated();
  if (!isAuthenticated) {
    redirect('/admin/login');
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-8">
              <h1 className="text-xl font-bold text-gray-800">Admin Panel</h1>
              <Link href="/admin" className="text-gray-600 hover:text-amber-600">Dashboard</Link>
              <Link href="/admin/products" className="text-gray-600 hover:text-amber-600">Products</Link>
              <Link href="/admin/orders" className="text-gray-600 hover:text-amber-600">Orders</Link>
            </div>
            <form
              action={async () => {
                'use server';
                await fetch('/api/admin/logout', { method: 'POST' });
                redirect('/admin/login');
              }}
            >
              <button type="submit" className="text-gray-600 hover:text-red-600">Logout</button>
            </form>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
}
