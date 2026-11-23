import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const title = "Md Asadullah | Full-Stack Web Developer";
const description = "Portfolio of Md Asadullah, a full-stack web developer from Barishal, Bangladesh. SaaS, healthcare platforms, business websites and web applications.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL("https://asadullah.bizvely.com"),
  alternates: { canonical: "/" },
  authors: [{ name: "Md Asadullah" }],
  keywords: ["Md Asadullah", "Full-Stack Developer", "React Developer", "Next.js Developer", "Supabase", "Healthcare Web Development", "SaaS"],
  openGraph: { title, description, type: "website", url: "https://asadullah.bizvely.com" },
  twitter: { card: "summary_large_image", title, description },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#ffffff" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
