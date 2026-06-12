import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

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
  title: "Satu Tujuh Tech",
  description: "Transform Your Business with Technology",

  verification: {
    google: process.env.GOOGLE_SEARCH_CONSOLE_VERIFICATION,
  },

  openGraph: {
    title: "Satu Tujuh Tech",
    description: "Transform Your Business with Technology",
    url: "https://satutujuh.net",
    siteName: "Satu Tujuh Tech",
    images: [
      {
        url: "https://satutujuh.net/thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: "Satu Tujuh Tech",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const GA_TRACKING_ID = process.env.GOOGLE_TAGS_MANAGER_ID || "-";
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>

      <GoogleAnalytics gaId={GA_TRACKING_ID} />
    </html>
  );
}