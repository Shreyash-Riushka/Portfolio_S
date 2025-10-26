import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Shreyash_Singh_Portfolio",
  description:
    "Product Manager, Graphic Designer, prev at CARS24, OYO, driving product innovation and enhancing customer experiences.",
  generator: "Next.js",
  applicationName: "Shreyash Singh",
  keywords: [
    "freelance",
    "developer",
    "freelance developer",
   "consultant",
"product manager (PM)",
"product consultant",
"strategy",
"agile",
"product strategist",
"product owner (PO)",
"innovation",
"product innovator",
"product leader",
"SaaS",
"India",
"product",
"product management",
"case studies",
"product management case studies",
"product strategy portfolio",
  ],
  colorScheme: "dark",
  openGraph: {
    title: "Shreyash Singh - Product Manager",
    description:
      "Product Manager, Graphic Designer, prev at CARS24, OYO, driving product innovation and enhancing customer experiences. I am adept at wireframing and utilizing Figma for product design.",
    url: "https://portfolio-shreyash-singh.vercel.app/",
    siteName: "https://portfolio-shreyash-singh.vercel.app/",
    images: [
      {
        url: "https://github.com/Shreyash-Riushka/Portfolio_S/blob/main/Gemini_Generated_Image_f0pw7bf0pw7bf0pw.png",
        width: 1200,
        height: 630,
        alt: "Victor Williams — Frontend Engineer",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shreyash Singh - Product Manager",
    description:
      "Product Manager, Graphic Designer, prev at CARS24, OYO, driving product innovation and enhancing customer experiences. I am adept at wireframing and utilizing Figma for product design.",
    creator: "victorwill__",
    creatorId: "1243720976552144897",
    images: [
      "https://github.com/Shreyash-Riushka/Portfolio_S/blob/main/Gemini_Generated_Image_f0pw7bf0pw7bf0pw.png",
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
