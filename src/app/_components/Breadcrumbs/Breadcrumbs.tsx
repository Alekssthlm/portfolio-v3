"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumbs: React.FC = () => {
  const navigation = usePathname();
  const pathnames = navigation.split("/").filter((x) => x);

  if (navigation === "/") {
    return null;
  }

  return (
    <nav
      aria-label="breadcrumb"
      className="text-white relative z-10 gap-2 px-4 glass-background select-none"
    >
      <Link href="/">home</Link>
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;

        return last ? (
          <span key={to}>
            <span className="text-[#01FFB9]"> / </span>
            {value}
          </span>
        ) : (
          <Link href={to} key={to}>
            <span className="text-[#01FFB9]"> / </span>
            {value}
          </Link>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
