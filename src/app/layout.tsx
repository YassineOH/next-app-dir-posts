import './globals.css';
import { Inter } from 'next/font/google';
import { type Metadata } from 'next';

import AuthProvider from '~/components/AuthProvider';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Leave Your Post',
  authors: {
    name: 'yassine ofqir hamma',
    url: 'https://www.yassineoh.dev',
  },
  description:
    'This app is just try of the new features of Next.js 13.4 and react server components',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <html lang='en'>
        <body className={inter.className} suppressHydrationWarning={true}>
          {children}
        </body>
      </html>
    </AuthProvider>
  );
}
