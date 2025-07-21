import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Annys",
  description: "A Next.js application with Bootstrap and TypeScript.",
};

import AppNavbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="d-flex flex-column min-vh-100">
        <AppNavbar />
        <main className="flex-grow-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
