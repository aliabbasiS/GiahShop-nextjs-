import "./globals.css";
import Header from "./main/header/header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className="w-full h-full bg-white px-6 md:px-12 flex justify-between flex-col">
      <body className="flex flex-col h-full text-black ">
        <Header />

        <main className="flex-grow">{children}</main>

        <footer className="p-4 bg-gray-100 text-center">This is the footer</footer>
      </body>
    </html>
  );
}
