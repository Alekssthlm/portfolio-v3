import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Alexander Heras",
  description:
    "Contact me to discuss potential collaborations, job opportunities, or to simply say hello!",
  metadataBase: new URL("https://www.alexanderheras.com/"),
  openGraph: {
    title: "Contact - Alexander Heras",
    description:
      "Contact me to discuss potential collaborations, job opportunities, or to simply say hello!",
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
