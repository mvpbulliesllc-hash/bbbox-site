import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/header";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sentient = localFont({
  src: [
    { path: "./fonts/Sentient-Extralight.woff", weight: "200", style: "normal" },
    { path: "./fonts/Sentient-LightItalic.woff", weight: "300", style: "italic" },
  ],
  variable: "--font-sentient-local",
});

export const metadata: Metadata = {
  title: "MVP Built Bullies",
  description: "MVP Built Bullies — premier American Bully program",
    generator: 'v0.app'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.variable} ${sentient.variable} antialiased`}
        suppressHydrationWarning
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
