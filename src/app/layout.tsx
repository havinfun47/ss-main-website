import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-dm-serif",
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://havinfun47.github.io"),
  title: "Scale Science — Meta Funnels for eCom Brands",
  description:
    "Boutique growth partner for 6-7 figure eCommerce brands. Senior Meta strategists, data-backed creative, and landing pages engineered to convert.",
  openGraph: {
    title: "Scale Science — Meta Funnels for eCom Brands",
    description:
      "Boutique growth partner for 6-7 figure eCommerce brands. Senior Meta strategists, data-backed creative, and landing pages engineered to convert.",
    images: [
      {
        url: "/ss-main-website/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Scale Science",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scale Science — Meta Funnels for eCom Brands",
    description:
      "Boutique growth partner for 6-7 figure eCommerce brands. Senior Meta strategists, data-backed creative, and landing pages engineered to convert.",
    images: ["/ss-main-website/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${dmSerif.variable} font-sans antialiased bg-bg text-primary`}>
        {children}
      </body>
    </html>
  );
}
