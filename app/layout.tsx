import type { Metadata } from "next";
import { Epilogue, Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const epilogue = Epilogue({ subsets: ["latin"], variable: "--font-epilogue", weight: ["700", "800", "900"] });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata: Metadata = {
  title: "Abhishek Mohapatra | Portfolio",
  description: "Software Developer crafting immersive digital ecosystems. Powered by NestJS, Next.js, and TypeScript.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${epilogue.variable} ${manrope.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <body className="bg-background text-on-surface antialiased font-body-md text-body-md">
        {children}
      </body>
    </html>
  );
}

