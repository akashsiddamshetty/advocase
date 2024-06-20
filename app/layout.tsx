import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Advocase - Empower your Legal Practice ",
  description:
    "AI legal assistant, legal tech app, automated legal help, AI for law, legal document automation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.png" />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="flex-1  gap-3 px-48 2xl:px-56 flex py-4 items-start justify-center ">
          {children}
        </main>
      </body>
    </html>
  );
}
