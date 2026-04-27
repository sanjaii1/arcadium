import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Avidci | Bold Brands & Thoughtful Design",
  description: "We fuse creativity, architecture & UI strategy to craft exceptional digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
