import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My projects - Alexander Heras",
  description:
    "Explore a selection of the projects that I've worked on individually or as part of a team.",
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
