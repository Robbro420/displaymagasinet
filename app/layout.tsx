import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteDescription, siteName, siteUrl } from "./site";

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
    <html lang="sv">
      <body>{children}</body>
    </html>
  );
}
