import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "WowMade.AI — Cinematic AI Video, Image, Music & Text Studio",
    template: "%s · WowMade.AI",
  },
  description:
    "Cinematic video, stunning images, and original music — from a single prompt, in seconds. One studio for AI video, image, music, text, visual effects and pixel art. Built with privacy in mind.",
  applicationName: "WowMade.AI",
  keywords: [
    "AI video generator",
    "AI image generator",
    "AI music generator",
    "image upscaler",
    "video upscaler",
    "object remover",
    "pixel art generator",
    "visual effects",
  ],
  openGraph: {
    title: "WowMade.AI — One studio for every idea",
    description:
      "Cinematic video, stunning images, and original music — from a single prompt, in seconds.",
    type: "website",
    siteName: "WowMade.AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "WowMade.AI — One studio for every idea",
    description:
      "Cinematic video, stunning images, and original music — from a single prompt, in seconds.",
  },
};

export const viewport: Viewport = {
  themeColor: "#09090b",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-zinc-950 font-sans text-zinc-100">
        {children}
      </body>
    </html>
  );
}
