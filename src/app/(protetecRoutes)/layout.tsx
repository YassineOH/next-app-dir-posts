import { ReactNode } from 'react';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '~/lib/auth';

import Navbar from '~/components/Navbar';

interface Props {
  children: ReactNode;
}

async function Layout({ children }: Props) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/');
  }

  return (
    <>
      {/* @ts-expect-error Server Component */}
      <Navbar />
      <main className='container mx-auto my-16'>{children}</main>
    </>
  );
}

export default Layout;
