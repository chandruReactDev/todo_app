import { redirect } from 'next/navigation';

export default async function HomePage() {
  const isLoggedIn = false; // check session / token

  if (!isLoggedIn) {
    redirect('/login');
  }

  redirect('/dashboard');
}
