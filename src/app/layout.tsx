import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "next tanvir shop bd",
  description: "next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} antialiased`}>
        <div className="mx-auto p-3 bg-amber-500 sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl ">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
