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
        <meta name="description" content="ReidXtreme 3.0 in 2024 is the ultimate competitive programming hackathon, meticulously organized by the IEEE Student Branch in collaboration with the ACM Student Chapter at the University of Colombo School of Computing (UCSC). ReidXtreme 2024 is designed to push the boundaries of undergraduate students' programming abilities, offering them a unique opportunity to sharpen their skills and gain invaluable insights into the tech industry. The 2024 edition of this prestigious event is structured to challenge participants through two rigorous rounds: an initial qualifying round in 2024, followed by a final 12-hour in-person hackathon where only the top 10 teams will compete. By participating in ReidXtreme 2024, students will not only improve their technical proficiency but also gain exposure to real-world tech challenges, connect with peers and industry professionals, and prepare for larger-scale global competitions like IEEEXtreme in 2024 and beyond. This year's 2024 edition stands out as the first in the ReidXtreme series to be hosted physically, providing a richer and more immersive experience compared to its online predecessors in 2024. ReidXtreme 3.0 in 2024 is where the best and brightest future tech leaders converge, offering a platform for participants to benchmark their skills, network within the tech community, and push their limits to new heights. Whether you are an undergraduate student looking to enhance your competitive programming skills, or you aim to gain valuable exposure to the 2024 tech industry landscape, ReidXtreme 2024 is the event for you. Join us in 2024 and be part of a transformative experience that will prepare you for the challenges and opportunities that lie ahead in the ever-evolving world of technology." />
        <meta name="keywords" content="ReidXtreme 2024, ReidXtreme 3.0, competitive programming 2024, hackathon 2024, IEEE 2024, ACM 2024, UCSC 2024, programming competition 2024, tech industry 2024, undergraduate students 2024, IEEEXtreme 2024" />
        <meta name="author" content="IEEE Student Branch and ACM Student Chapter, UCSC" />
        <meta property="og:title" content="ReidXtreme 3.0 - Competitive Programming Hackathon 2024" />
        <meta property="og:description" content="ReidXtreme 3.0 in 2024 is the premier competitive programming hackathon that challenges undergraduate students through a series of rigorous rounds, enhancing their skills and preparing them for the 2024 tech industry. Join us for the first in-person edition of ReidXtreme in 2024, organized by the IEEE Student Branch and ACM Student Chapter at UCSC." />
        <meta property="og:url" content="https://reidxtreme.ucscieee.lk/2024" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
