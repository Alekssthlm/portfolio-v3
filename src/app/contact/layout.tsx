import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Alexander Heras",
  description:
    "Contact me to discuss potential collaborations, job opportunities, or to simply say hello!",
  openGraph: {
    title: "Contact - Alexander Heras",
    description:
      "Contact me to discuss potential collaborations, job opportunities, or to simply say hello!",
    images: [
      {
        url: "https://www.alexanderheras.com/public/og-image.jpg",
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
