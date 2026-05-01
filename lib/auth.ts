import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';

export async function isAdminAuthenticated() {
  const cookieStore = await cookies();
  const token = cookieStore.get('admin-token')?.value;
  if (!token) return false;
  
  try {
    jwt.verify(token, 'secret-key');
    return true;
  } catch {
    return false;
  }
}
