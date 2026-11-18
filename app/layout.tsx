import type { Metadata, Viewport } from "next";
import { Newsreader, Schibsted_Grotesk } from "next/font/google";
import "./globals.css";
import { siteDescription, siteName, siteUrl } from "./site";

// Newsreader är ritat för nyhetsläsning och Schibsted Grotesk kommer från
// nordisk dagspress – båda hör hemma i den miljö annonserna visas i.
const serif = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${siteName} – smartare digital annonsering`,
  description: siteDescription,
  alternates: { canonical: "/" },
  openGraph: {
    title: siteName,
    description: "Få fler att hitta, förstå och välja ditt företag.",
    type: "website",
    locale: "sv_SE",
    siteName,
    url: "/",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: `${siteName} – smartare digital annonsering`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: "Smartare digital annonsering, utan krångel.",
    images: ["/og.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#16261d",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv" className={`${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
