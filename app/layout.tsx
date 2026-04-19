import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import "../styles/index.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Esports at OSU",
  description: "Prototype website for Esports at Oregon State University",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-background selection:bg-primary-container selection:text-white">
        <NavBar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
