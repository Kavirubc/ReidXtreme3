import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ReidXtreme3",
  description: "Join the premier competitive programming hackathon organized by IEEE and ACM at UCSC. Enhance your skills and connect with the tech industry.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon2.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="ReidXtreme 3.0 is the premier competitive programming hackathon organized by the IEEE Student Branch and ACM Student Chapter at UCSC." />
        <meta name="keywords" content="ReidXtreme 3.0, competitive programming, hackathon, IEEE, ACM, UCSC, programming competition, tech industry" />
        <meta name="author" content="IEEE Student Branch and ACM Student Chapter, UCSC" />
        <meta property="og:title" content="ReidXtreme 3.0 - Competitive Programming Hackathon" />
        <meta property="og:description" content="Enhance your competitive programming skills and prepare for the tech industry with ReidXtreme 3.0." />
        <meta property="og:url" content="https://reidxtreme.ucscieee.lk/" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
