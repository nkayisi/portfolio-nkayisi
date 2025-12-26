import { ThemeProvider } from "@/lib/theme-provider";
import { LanguageProvider } from "@/components/language-context";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from '@next/third-parties/google'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nelson K. Kayisi",
  description: "Full-stack developer and software engineer with years of experience in building web and mobile applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GoogleTagManager gtmId="G-LB0S09CGF7" />
        <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
