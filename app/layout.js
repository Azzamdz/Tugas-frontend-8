import { Bellefair, Barlow, Barlow_Condensed } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const bellefair = Bellefair({
  variable: "--font-bellefair",
  subsets: ["latin"],
  weight: ["400"],
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "SPACE",
  description: "Welcome to the Space website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${bellefair.variable} ${barlowCondensed.variable} ${barlow.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
