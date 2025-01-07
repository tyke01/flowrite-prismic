import { PrismicPreview } from "@prismicio/next";
import clsx from "clsx";
import type { Metadata } from "next";
import { Nunito, Nunito_Sans } from "next/font/google";

import "./globals.css";

import Footer from "@/components/footer";
import Header from "@/components/header";
import { createClient, repositoryName } from "@/prismicio";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

const nunito_Sans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito-sans",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();

  const settings = await client.getSingle("settings");

  return {
    title: settings.data.site_title || "Flowrise Fallback",
    description:
      settings.data.meta_description || "Flowrise is the relaxing app you need",
    openGraph: {
      images: [settings.data.og_image.url || ""],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={clsx(nunito.variable, nunito_Sans.variable)}>
      <body>
        <Header />
        {children}
        <Footer />
        <div className="fixed bg-gradient-to-tr from-emerald-50 to-cyan-50 z-[-1] inset-0 opacity-50" />
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
