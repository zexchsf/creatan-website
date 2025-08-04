"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface NavbarProps {}

export interface NavItemProps {
  href: string;
  children: React.ReactNode;
}

const navigations = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About Us",
    href: "/about-us",
  },
  {
    title: "Properties",
    href: "/properties",
  },
  {
    title: "Our Services",
    href: "/services",
  },
];

export function NavItem({ href, children }: NavItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`text-[#002641] relative ${isActive ? "font-semibold" : ""}`}
    >
      {children}
      {isActive && (
        <div className="absolute left-0 right-0 mx-auto w-3/4 h-[3px] bg-[#54B959] rounded-full"></div>
      )}
    </Link>
  );
}

export function Navbar({}: NavbarProps) {
  return (
    <div className="bg-[#FAFCF0] p-3">
      <div className="w-9/10 mx-auto flex justify-between">
        <Link href="/">
          <Image src="/creatan-icon.png" alt="Logo" width={100} height={100} />
        </Link>

        <div className="flex items-center gap-x-20">
          <div className="space-x-12">
            {navigations.map((nav, key) => (
              <NavItem key={key} href={nav.href}>
                {nav.title}
              </NavItem>
            ))}
          </div>

          <Button className="bg-[#00355B] hover:bg-[#00355B]/90 rounded-[2rem] h-14 font-medium py-[18px] px-[42px] text-white">
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
}
