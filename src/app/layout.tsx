import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Brew & Bean - Premium Coffee Experience",
  description: "Discover exceptional coffee crafted by professional baristas. Premium beans, personalized service, and the perfect atmosphere for coffee lovers.",
  keywords: "coffee, premium coffee, barista, coffee beans, espresso, cappuccino, latte",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.className} bg-stone-50 text-stone-900`}>
        {children}
      </body>
    </html>
  );
}