"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Teams", path: "/teams" },
  { name: "About", path: "/about" },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 w-full z-50 bg-background/60 backdrop-blur-xl border-b">
      <nav className="flex justify-between items-center px-6 md:px-12 h-20 w-full max-w-screen-2xl mx-auto">
        {/* EaOSU logo */}
        <div className="flex items-center gap-10">
          <div>
            <Image
              src={"/images/eaosu_logo.png"}
              width={80}
              height={80}
              alt="Logo of Esports at OSU"
            />
          </div>

          {/* Links */}
          <div>
            {navItems.map((item) => (
              <Link key={item.name} href={item.path}>
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Social links */}
        <div className="flex items-center">Social links</div>
      </nav>
    </header>
  );
}
