import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const TITLE = "Md Asadullah — Full-Stack Web Developer & SEO / Growth Specialist";
const DESCRIPTION =
  "Portfolio of Md Asadullah, a full-stack web developer from Barishal, Bangladesh. I build React, Next.js and Supabase products, and grow them with technical SEO. Open to remote roles.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  authors: [{ name: "Md Asadullah" }],
  keywords: [
    "Md Asadullah",
    "full-stack developer",
    "Next.js developer",
    "React developer",
    "Supabase",
    "technical SEO",
    "remote developer Bangladesh",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: TITLE,
    description: DESCRIPTION,
    creator: "@asadullah2m",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#05060f",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
