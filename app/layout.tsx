import type { Metadata } from "next";
import {
  Space_Grotesk,
  Instrument_Sans,
  JetBrains_Mono,
} from "next/font/google";
import Script from "next/script";
import "./globals.css";

// Clash Display — not on Google Fonts; loaded via fontshare CDN
const clashDisplayUrl =
  "https://api.fontshare.com/v2/css?f[]=clash-display@500,600,700&display=swap";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500", "600"],
});

const SITE_URL = "https://www.abhishek-mahato.com.np";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Abhishek Mahato — Software Engineer · Full-stack + AI",
  description:
    "Abhishek Mahato is a Software Engineer from Kathmandu, Nepal specializing in full-stack web platforms and AI-powered features. 3+ years shipping production apps used by 1M+ users.",
  applicationName: "Abhishek Mahato Portfolio",
  authors: [{ name: "Abhishek Mahato", url: SITE_URL }],
  creator: "Abhishek Mahato",
  keywords: [
    "Abhishek Mahato",
    "Abishek Mahato",
    "Abisekh Mahato",
    "Abhisekh Mahato",
    "abhishek mahato",
    "abhishek mahato portfolio",
    "abhishek mahato nepal",
    "Software Engineer",
    "Full-stack Developer",
    "Fullstack Developer Nepal",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "AI Engineer",
    "Web Developer Nepal",
    "Kathmandu Developer",
    "MERN Stack",
    "Portfolio",
    "JavaScript Developer",
    "MongoDB Developer",
    "Express.js Developer",
    "Software Engineer Nepal",
    "Software Engineer Kathmandu",
    "Innovate Tech",
    "Naxa Pvt Ltd",
    "LangChain",
    "RAG",
    "Vector DB",
    "Full-stack systems",
    "AI engineering",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Abhishek Mahato — Software Engineer · Full-stack + AI",
    description:
      "Full-stack engineer shipping production web platforms used by millions, now wiring language models into the stack. Kathmandu, Nepal.",
    url: SITE_URL,
    siteName: "Abhishek Mahato Portfolio",
    images: [
      {
        url: "/profile-2.png",
        width: 1200,
        height: 630,
        alt: "Abhishek Mahato — Software Engineer",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhishek Mahato — Software Engineer · Full-stack + AI",
    description:
      "Full-stack engineer shipping production web platforms used by millions, now wiring language models into the stack.",
    images: ["/profile-2.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Abhishek Mahato",
  jobTitle: "Software Engineer",
  url: SITE_URL,
  image: `${SITE_URL}/profile-2.png`,
  sameAs: [
    "https://www.linkedin.com/in/abhishek-mahato-012272239/",
    "https://github.com/abhishek-mahato0",
    "https://medium.com/@abhishek.mahato98258",
  ],
  description:
    "Full-stack engineer from Kathmandu, Nepal specializing in React, Node.js, TypeScript, and AI engineering. 3+ years shipping production apps used by 1M+ users.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kathmandu",
    addressCountry: "Nepal",
  },
  worksFor: {
    "@type": "Organization",
    name: "Innovate Tech",
    sameAs: "https://innovate.com.np",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Islington College",
    sameAs: "https://islington.edu.np",
  },
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "PostgreSQL",
    "AI Engineering",
    "LangChain",
    "RAG",
    "WebSockets",
    "GraphQL",
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: "Software Engineer",
    description: "Builds full-stack web platforms and AI-powered features.",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "LangChain",
      "RAG",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${instrumentSans.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="stylesheet" href={clashDisplayUrl} />
        <Script
          id="ld-json"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <div className="vignette" aria-hidden="true" />
        <div className="grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
