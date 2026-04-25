import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const META_PIXEL_ID = "1839545210149861";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-dm-serif",
  weight: ["300", "400", "500", "600", "700", "800"],
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
      <body className={`${dmSans.variable} ${manrope.variable} font-sans antialiased bg-bg text-primary`}>
        <Script id="meta-pixel-base" strategy="afterInteractive">
          {`
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${META_PIXEL_ID}');
fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
