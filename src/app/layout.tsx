import type { Metadata } from "next";
import "./globals.css";
import Providers from './provider'

export const metadata: Metadata = {
  title: "GiahLand",
  description: "GiahLand is a platform for creating and sharing land plots.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="/header/pngtree-flower-pot-and-plant-logo-growth-vector-logo-png-image_5177004-removebg-preview.png"
        />
      </head>
      <body className="h-full  bg-white">
        
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}