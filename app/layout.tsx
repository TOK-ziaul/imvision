import type { Metadata } from "next";
import { LanguageProvider } from "@/context/LanguageContext";
import { AppClientWrapper } from "@/components/AppClientWrapper";
import "./globals.css";

export const metadata: Metadata = {
  title: "IMvision - LED Display Solutions",
  description: "Permanent and rental LED solutions for retail, events, and digital out-of-home.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <LanguageProvider>
          <AppClientWrapper>{children}</AppClientWrapper>
        </LanguageProvider>
      </body>
    </html>
  );
}
