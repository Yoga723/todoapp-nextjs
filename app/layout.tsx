import type { Metadata } from "next";
import { Roboto, Archivo } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "500", "700", "900"],
});
const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  title: "To-Do-List",
  description: "A to-do list app with Next.js and mongoDB",
  icons: "/favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${archivo.variable} ${roboto.className}`}>
        {children}
      </body>
    </html>
  );
}
