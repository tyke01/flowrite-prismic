import type { Metadata, ResolvingMetadata } from "next";
import { Nunito, Nunito_Sans } from "next/font/google";
import clsx from "clsx";

import "./globals.css";

import { createClient } from "@/prismicio";

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

  const page = await client.getSingle("settings")
 
  return {
    title: page.data.site_title || "Flowrise Fallback",
    description: page.data.meta_description || "Flowrise is the relaxing app you need",
    openGraph: {
      images: [page.data.og_image.url || ""],
    },
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={clsx(nunito.variable, nunito_Sans.variable)}>
      <body>
        <header>Header</header>
        {children}
        <footer>footer</footer>
      </body>
    </html>
  );
}
