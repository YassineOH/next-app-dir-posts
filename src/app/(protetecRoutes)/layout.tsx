import { ReactNode } from 'react';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

interface Props {
  children: ReactNode;
}

async function Layout({ children }: Props) {
  const session = await getServerSession();

  if (!session) {
    redirect('/');
  }

  return <>{children}</>;
}

export default Layout;
