import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Alexander Heras",
  description: "Discover more about my journey into web development.",
  metadataBase: new URL("https://www.alexanderheras.com/"),
  openGraph: {
    title: "About - Alexander Heras",
    description: "Discover more about my journey into web development.",
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
