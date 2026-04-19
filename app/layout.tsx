import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";
import Header from "@/components/Header/Header";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TravelTrucks — Camper Rentals",
  description:
    "Find and book the perfect camper for your adventure with TravelTrucks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link
          rel="preload"
          as="image"
          href="/images/hero.jpg"
          fetchPriority="high"
        />
      </head>
      <body>
        <TanStackProvider>
          <Header />
          <main>{children}</main>
          <Toaster position="top-right" />
        </TanStackProvider>
      </body>
    </html>
  );
}
