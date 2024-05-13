import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My projects - Alexander Heras",
  description:
    "Explore a selection of the projects that I've worked on individually or as part of a team.",
  metadataBase: new URL("https://www.alexanderheras.com/"),
  openGraph: {
    title: "My projects - Alexander Heras",
    description:
      "Explore a selection of the projects that I've worked on individually or as part of a team.",
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
