// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Runsafi Errands | Your Personal City Assistant in Nairobi",
  description:
    "Swift and reliable errand services in Nairobi. We handle grocery shopping, deliveries, bill payments and more so you don't have to. Professional, trusted, and efficient.",
  keywords: [
    "errand services nairobi",
    "grocery shopping nairobi",
    "delivery services kenya",
    "personal assistant nairobi",
    "runsafi errands",
  ],
  authors: [{ name: "Runsafi Errands" }],
  creator: "Runsafi Errands",
  publisher: "Runsafi Errands",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://runsafi.com",
    title: "Runsafi Errands Nairobi | Your Personal City Assistant",
    description:
      "Swift and reliable errand services in Nairobi. We handle grocery shopping, deliveries, bill payments and more.",
    siteName: "Runsafi Errands",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Runsafi Errands - Your Personal City Assistant in Nairobi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Runsafi Errands Nairobi",
    description: "Swift and reliable errand services in Nairobi",
    images: ["/og-image.png"],
    creator: "@Moimaritim",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon-32x32.png",
    apple: [
      { url: "/apple-touch-icon.png" },
      { url: "/apple-touch-icon-180x180.png", sizes: "180x180" },
    ],
    other: [
      {
        rel: "manifest",
        url: "/site.webmanifest",
      },
    ],
  },
  manifest: "/site.webmanifest",
  metadataBase: new URL("https://runsafi.com"),
  alternates: {
    canonical: "/",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {},
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
