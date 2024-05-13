import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My projects - Alexander Heras",
  description:
    "Explore a selection of the projects that I've worked on individually or as part of a team.",
  openGraph: {
    title: "My projects - Alexander Heras",
    description:
      "Explore a selection of the projects that I've worked on individually or as part of a team.",
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
