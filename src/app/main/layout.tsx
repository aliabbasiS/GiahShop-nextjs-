

import "../globals.css";
import Header from "./components/header";

import Footer from "../main/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <head>
        <title>GiahLand</title>
        <meta
          name="description"
          content="GiahLand is a platform for creating and sharing land plots."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="/header/pngtree-flower-pot-and-plant-logo-growth-vector-logo-png-image_5177004-removebg-preview.png"
        />
      </head>
      <body className=" h-full bg-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
