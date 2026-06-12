import type { Metadata, Viewport } from "next";
import { Raleway, JetBrains_Mono } from "next/font/google";
import Cursor from "@/components/Cursor";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-raleway",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-mono",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://jiyaagrawal.netlify.app";

const title = "Jiya Agrawal | Frontend Engineer";
const description =
  "Frontend Engineer specialising in React & Next.js — building scalable B2B & B2C commerce platforms with a focus on performance and AI-era SEO.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/JA.png",
    apple: "/JA.png",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Jiya Agrawal",
    title,
    description,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Jiya Agrawal — Frontend Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${raleway.variable} ${mono.variable} cursor-none-fine`}
    >
    <head>
      <meta name="google-site-verification" content="OAVF77_cerdK0zgxgWZWStdY_KytnstgpdoD-MgtTfE" />
    </head>
      <body className="bg-ink font-sans text-bone scrollbar-thin scrollbar-thumb-line scrollbar-track-ink">
        <Cursor />
        {children}
      </body>
    </html>
  );
}
