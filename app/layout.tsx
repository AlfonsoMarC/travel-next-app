import "./globals.css";
import type { Metadata } from "next";
import { Inter, Advent_Pro } from "next/font/google";
import "./styles.css";

const inter = Inter({
  subsets: ["latin"]
});

const adventPro = Advent_Pro({
  subsets: ["latin"],
  weight: "100",
  variable: "--font-advent-pro100"
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={adventPro.variable}>{children}</body>
    </html>
  );
}
