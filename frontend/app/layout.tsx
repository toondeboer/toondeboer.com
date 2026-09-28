import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

const title = "Toon de Boer | AI & Software Engineer";
const description =
  "Software engineer with an AI specialization from TU Delft. This is where my side projects live.";

export const metadata: Metadata = {
  metadataBase: new URL("https://toondeboer.com"),
  title,
  description,
  openGraph: {
    type: "website",
    url: "https://toondeboer.com",
    siteName: "Toon de Boer",
    title,
    description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Toon de Boer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense site verification. Approving this top-level domain
            also covers its subdomains (e.g. poker-timer.toondeboer.com). */}
        <meta name="google-adsense-account" content="ca-pub-9738048037268359" />
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-13MH57QZWG`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-13MH57QZWG', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>{children}</body>
    </html>
  );
}
