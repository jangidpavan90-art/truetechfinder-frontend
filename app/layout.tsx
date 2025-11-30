import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "TrueTechFinder – Find What Powers Any Website",
  description: "Find what powers any website — instantly. AI-enhanced detection, side-by-side comparisons, and export-ready insights.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.svg" />
        <link rel="apple-touch-icon" sizes="192x192" href="/logo-192.png" />
        <meta name="theme-color" content="#2563EB" />
        <Script id="ga-script" strategy="afterInteractive">
          {``}
        </Script>
      </head>
      <body className="bg-white text-slate-900">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
