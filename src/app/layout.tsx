import type { Metadata } from "next";
import "./globals.css";
import MainLayoutClient from "@/components/MainLayoutClient";
import StructuredData from "@/components/StructuredData";
import { COMPANY_INFO } from "@/data/companyData";

export const metadata: Metadata = {
  title: "VERSATECH EPC | Material Handling & Industrial Equipment Manufacturer in Nagpur",
  description: "VERSATECH EPC (Estd. 2008, Nagpur) specializes in design, engineering, manufacturing & supply of Ash Handling Systems, Coal Handling Plants (CHP up to 100 TPH), Material Handling Equipment, Dust Extraction & Industrial Fabrication in Maharashtra, India.",
  keywords: [
    "Ash Handling System Manufacturer",
    "Coal Handling System",
    "Material Handling Equipment",
    "Pneumatic Ash Handling",
    "Coal Handling Plant Equipment",
    "Industrial Conveyors",
    "Dust Extraction System",
    "Telescopic Chute",
    "Industrial Valves",
    "Material Handling Equipment Manufacturer in India",
    "Material Handling Equipment Manufacturer in Nagpur",
    "VERSATECH EPC"
  ],
  authors: [{ name: "VERSATECH EPC" }],
  openGraph: {
    title: "VERSATECH EPC | Industrial Engineering & Material Handling Solutions",
    description: "Design, Engineering, Manufacturing & Supply of Material Handling Systems and Industrial Equipment since 2008 in Nagpur, Maharashtra.",
    url: "http://www.versatechepc.com",
    siteName: "VERSATECH EPC",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className="antialiased selection:bg-orange-500 selection:text-white">
        <MainLayoutClient>
          {children}
        </MainLayoutClient>
      </body>
    </html>
  );
}
