import '@/app/globals.css';
import Header from '@/components/header/header';
import { JUPITER_TERMINAL_EMBED_SCRIPT } from '@/constants/jupiter';
import VhProvider from '@/contexts/vh-provider';
import type { Metadata } from 'next';
import Script from 'next/script';

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
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
        />
        <Script
          id="gtm-script"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${process.env.NEXT_PUBLIC_GTM_ID}');
            `,
          }}
        />

        <link
          rel="preload"
          href="/fonts/Roobert-Regular.otf"
          as="font"
          type="font/otf"
          crossOrigin=""
        />
        <link
          rel="preload"
          href={JUPITER_TERMINAL_EMBED_SCRIPT}
          as="script"
          crossOrigin=""
        />
      </head>
      <body>
        <VhProvider />
        <Header />
        {children}
      </body>
    </html>
  );
}
