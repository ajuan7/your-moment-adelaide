import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { theSeasons } from "./fonts";
import "./globals.css";
import { Navbar } from "./components/layout/navbar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Your Moment Adelaide",
  description: "We Style the Room. You Live the Moment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${theSeasons} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
