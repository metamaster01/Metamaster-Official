import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AppWrapper from "@/components/AppWraper";
import { Analytics } from '@vercel/analytics/next';


import { Red_Hat_Display, Inter } from 'next/font/google'
import TabAttention from "@/components/TabAttention";
import FloatingButtons from "@/components/FloatingButtons";

const redHatDisplay = Red_Hat_Display({
  subsets: ['latin'],
  weight: ['700', '800', '900'],
  variable: '--font-red-hat',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Digital Marketing Agency for Startups in India | Meta Master",
  description: "MMeta Master is a 360° digital marketing agency helping startups across India build online presence, generate leads, and grow with budget-friendly strategies.",
  keywords: ["Meta Master", "Digital Solutions", "Business Growth", "Digital Transformation", "Creative Agency", "Tech Solutions", "Marketing Strategies"],
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="-DmtWAEJuWBjoxsIchNljFJ8pKozfKvAVlaTnvBvpJU"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${redHatDisplay.variable} ${inter.variable} antialiased`}
      >
        <AppWrapper>
          {children}
          <FloatingButtons/>
          <Analytics />
          <TabAttention />
        </AppWrapper>
      </body>
    </html>
  );
}
