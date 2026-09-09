import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://jonasriven.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Reality Before The Script - Arthur Renn",
    template: "%s - Arthur Renn",
  },

  description:
    "Reality Before The Script by Arthur Renn explores perception, belief, influence, consciousness, human behavior, and the invisible structures shaping the reality we experience.",

  applicationName: "Reality Before The Script",

  authors: [
    {
      name: "Arthur Renn",
      url: siteUrl,
    },
  ],

  creator: "Arthur Renn",
  publisher: "Arthur Renn",

  keywords: [
    "Reality Before The Script",
    "Arthur Renn",
    "psychology",
    "human behavior",
    "consciousness",
    "perception",
    "belief",
    "influence",
    "reality",
    "critical thinking",
    "philosophy",
    "self awareness",
    "digital book",
    "ebook",
  ],

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Reality Before The Script",
    title: "Reality Before The Script -Arthur Renn",
    description:
      "What if the reality you know was never the whole story? Discover Reality Before The Script by Arthur Renn.",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Reality Before The Script - Arthur Renn",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Reality Before The Script — Arthur Renn",
    description: "What if the reality you know was never the whole story?",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  category: "books",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Navbar />

        <main className="flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
