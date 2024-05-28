import Header from '@/components/header/header';
import '@/globals.css';
import type { Metadata } from 'next';
import AppWalletProvider from './providers/app-wallet-provider';

export const metadata: Metadata = {
  title: '$NYC',
  description: 'The SOL of Gotham',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/fonts/Roobert-Regular.otf"
          as="font"
          type="font/otf"
          crossOrigin=""
        />
      </head>
      <body>
        <AppWalletProvider>
          <Header />
          {children}
        </AppWalletProvider>
      </body>
    </html>
  );
}
