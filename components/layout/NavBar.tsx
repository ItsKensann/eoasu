"use client";

import { nav } from "motion/react-client";
import Link from "next/link";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Teams", path: "/teams" },
  { name: "About", path: "/about" },
];

export default function NavBar() {
  return (
    <nav className="">
      {navItems.map((item) => (
        <Link key={item.name} href={item.path}>
          {item.name}
        </Link>
      ))}
    </nav>
  );
}
