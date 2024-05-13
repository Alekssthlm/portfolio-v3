import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Alexander Heras",
  description: "Discover more about my journey into web development.",
  openGraph: {
    title: "About - Alexander Heras",
    description: "Discover more about my journey into web development.",
    images: [
      {
        url: "../public/og-image.jpg",
        alt: "Open Graph banner image for Alexander Heras portfolio.",
      },
    ],
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
