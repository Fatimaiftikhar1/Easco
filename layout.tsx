import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "EASCO | Premium Turnstiles & Access Control Gates Manufacturer",
  description: "EASCO is a premier direct manufacturer of architectural optical speed gates, flap barriers, tripod turnstiles, and full-height rotary turnstiles. Engineered for 10-million cycles, ISO9001 and CE certified access systems.",
  keywords: "turnstile manufacturer, speed gates, access control gates, flap barrier, tripod turnstile, full height turnstile, swing gates, EASCO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${montserrat.variable} antialiased text-bodyColor bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
