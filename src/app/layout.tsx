import '@/app/globals.css';
import Header from '@/components/header/header';
import type { Metadata } from 'next';

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
        <Header />
        {children}
      </body>
    </html>
  );
}
