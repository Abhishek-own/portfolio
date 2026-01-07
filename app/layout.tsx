import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abhishek - Backend Sorcerer",
  description: "Full-Stack Backend Developer | NestJS & PostgreSQL Expert",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-950 text-white antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
