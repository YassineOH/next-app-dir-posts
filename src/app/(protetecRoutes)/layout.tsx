import { ReactNode } from 'react';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '~/lib/auth';

//The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */

import Navbar from '~/components/Navbar';
import JotaiProvider from '~/components/JotaiProvider';

interface Props {
  children: ReactNode;
}

async function Layout({ children }: Props) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/');
  }

  return (
    <JotaiProvider>
      {/* @ts-expect-error Server Component */}
      <Navbar />
      <main className='container mx-auto my-16'>{children}</main>
    </JotaiProvider>
  );
}

export default Layout;
