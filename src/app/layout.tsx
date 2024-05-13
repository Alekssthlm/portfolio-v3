import type { Metadata } from "next";
import "./globals.css";
import Header from "./_components/Header/Header";

export const metadata: Metadata = {
  title: "Portfolio - Alexander Heras",
  description:
    "I'm passionate about web development and ready to embark on my professional journey. I'm currently enrolled in studies at Hyper Island, learning how to program by crafting web apps using industry best practices. I invite you to explore my work and let's connect!",
  openGraph: {
    title: "Portfolio - Alexander Heras",
    description:
      "I'm passionate about web development and ready to embark on my professional journey. I'm currently enrolled in studies at Hyper Island, learning how to program by crafting web apps using industry best practices. I invite you to explore my work and let's connect!",
    images: [
      {
        url: "../public/og-image.jpg",
        alt: "Open Graph banner image for Alexander Heras portfolio.",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
