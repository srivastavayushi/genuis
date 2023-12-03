import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import "./globals.css";
import { ModalProvider } from "@/components/modal-provider";
import { ToasterProvider } from "@/components/toaster-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Genuis",
  description: "AI Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ModalProvider />
          <ToasterProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
