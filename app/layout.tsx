import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Affinda - Let AI agents do your document processing",
  description: "Achieve 99%+ accuracy with Affinda's AI-powered document processing platform. More complete than LLMs alone.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
