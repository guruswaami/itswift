import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.itshoulders.com"),
  title: {
    default: "IT Shoulders | Digital Uplifter",
    template: "%s | IT Shoulders"
  },
  description:
    "IT Shoulders modernizes data, cloud, QA, web, and AI operations with practical consulting and delivery support.",
  openGraph: {
    title: "IT Shoulders | Digital Uplifter",
    description:
      "Discover, build, and accelerate with data, cloud, analytics, QA, AI consulting, and application delivery services.",
    type: "website",
    siteName: "IT Shoulders"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="isolate">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
