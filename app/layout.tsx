import { geistMono, geistSans, pacifico } from "@/lib/fonts";
import { Metadata } from "next";
import { ReactNode } from "react";
import "@/lib/styles/globals.css";

export const metadata: Metadata = {
  title: "Syntherra Chat Site",
  description:
    "Step into a frozen cyber-realm where neon auroras pulse through glacial circuits and every message echoes across the digital fjords",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
