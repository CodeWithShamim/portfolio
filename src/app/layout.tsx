import AnimateCursor from "@/components/shared/AnimateCursor";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shamim islam",
  description: "shamim islam portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AnimateCursor />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
