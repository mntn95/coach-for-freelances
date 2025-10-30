import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "./components/layout/header";
import { Footer } from "./components/layout/footer";
import { Toaster } from "./components/ui";
import "./styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Laura Bianchi - Coach pour Freelances",
  description:
    "Coach professionnelle pour freelances IT qui veulent dépasser les 5k€/mois et trouver leur liberté.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-white`}
        suppressHydrationWarning
      >
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
