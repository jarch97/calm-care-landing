import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Calm Care - Voice-Powered Parenting Assistant | $4.99",
  description: "Track your baby's feeding, sleep, and diaper changes using just your voice. Hands-free parenting made simple. One-time purchase, no subscriptions.",
  keywords: "baby tracking, voice commands, parenting app, baby care, feeding tracker, sleep tracker, diaper log",
  authors: [{ name: "Calm Care Team" }],
  creator: "Calm Care",
  publisher: "Calm Care",
  openGraph: {
    title: "Calm Care - Voice-Powered Parenting Assistant",
    description: "Track your baby's feeding, sleep, and diaper changes using just your voice. Perfect for busy parents.",
    url: "https://calmcare.app",
    siteName: "Calm Care",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calm Care - Voice-Powered Parenting Assistant",
    description: "Track your baby's feeding, sleep, and diaper changes using just your voice. Perfect for busy parents.",
    creator: "@calmcare",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
