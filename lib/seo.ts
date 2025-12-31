import type { Metadata } from "next";

const baseUrl = "https://analytic-genie.com";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Analytic Genie — Turn data into decisions",
    template: "%s | Analytic Genie"
  },
  description: "AI-powered analytics that turns data into precise, explainable decisions instantly.",
  openGraph: {
    title: "Analytic Genie",
    description: "Turn data into decisions — instantly.",
    url: baseUrl,
    siteName: "Analytic Genie",
    images: [
      {
        url: "/images/og.svg",
        width: 1200,
        height: 630,
        alt: "Analytic Genie"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Analytic Genie",
    description: "AI analytics with speed, accuracy, and explainability.",
    images: ["/images/og.svg"]
  },
  keywords: [
    "AI analytics",
    "data intelligence",
    "decision automation",
    "real-time analytics",
    "explainable AI"
  ],
  robots: {
    index: true,
    follow: true
  }
};

