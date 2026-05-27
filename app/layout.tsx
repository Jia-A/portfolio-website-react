import type { Metadata, Viewport } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://jiyaagrawal.netlify.app";

const title = "Jiya Agrawal | Developer";
const description =
  "Portfolio of Jiya Agrawal — Senior Frontend Developer building high-performance web applications.";

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
        alt: "Jiya Agrawal — Senior Frontend Developer",
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
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={raleway.className}>
      <body className="scrollbar-thin scrollbar-thumb-[#1a1919] scrollbar-track-[#777272]">
        {children}
      </body>
    </html>
  );
}
