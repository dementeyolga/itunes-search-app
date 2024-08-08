import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './../src/app/styles/index.scss';
import StoreProvider from '@/shared/store/StoreProvider';
import { Header } from '@/widgets/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'iTunes Search App',
  description: 'App to search media content in iTunes',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
