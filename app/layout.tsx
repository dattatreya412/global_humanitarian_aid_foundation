import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Global Humanitarian Aid Foundation",
  description: "A non-profit foundation dedicated to providing humanitarian assistance and supporting people in need.",
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
