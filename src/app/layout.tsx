import AnimateCursor from "@/components/shared/AnimateCursor";
import "./globals.css";
import type { Metadata } from "next";

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
      <body>{children}</body>
    </html>
  );
}
