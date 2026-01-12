import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AppWrapper from "@/components/AppWraper";

import { Red_Hat_Display, Inter } from 'next/font/google'

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
  title: "MetaMaster - Your Vision, Our Expertise",
  description: "Meta Master is a 360° digital solutions hub built to help businesses grow, transform, and thrive in the digital-first era.",
  keywords: ["Meta Master", "Digital Solutions", "Business Growth", "Digital Transformation", "Creative Agency", "Tech Solutions", "Marketing Strategies"],
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${redHatDisplay.variable} ${inter.variable} antialiased`}
      >
        {/* {children} */}
 
        <AppWrapper>
          {children}
        </AppWrapper>

      </body>
    </html>
  );
}
