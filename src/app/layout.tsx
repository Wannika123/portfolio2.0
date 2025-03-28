import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import NavLinks from "@/components/NavLinks";
import ThemeBtn from "@/components/ThemeBtn";

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  weight: ['400', '500', '700'],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wannika's portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ubuntu.variable}`}>
        <div className="header-container">
          <header>
            <NavLinks />
            <ThemeBtn />
          </header>
        </div>
        {children}
      </body>
    </html>
  );
}
