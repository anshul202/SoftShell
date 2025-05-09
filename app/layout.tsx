import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "SoftShell",
  description: "A simple contact form"
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
