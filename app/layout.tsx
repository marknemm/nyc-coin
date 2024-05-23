import "@/app/globals.css";
import Header from '@/app/ui/header/header';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "$NYC",
  description: "The SOL of Gotham",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
