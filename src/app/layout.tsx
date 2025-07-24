import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "cissuse's blog",
  description: "hello cissuse's blog",
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
