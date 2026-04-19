"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { cn } from "@/lib/utils";

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
              width={70}
              height={80}
              alt="Logo of Esports at OSU"
            />
          </div>

          {/* Links */}
          <div className="hidden md:flex items-center gap-8 font-headline md:text-sm lg:text-md">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={cn(
                  "transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,102,0,0.8)]",
                  pathname === item.path
                    ? "text-primary-container border-b-2 border-primary-container"
                    : "text-white/80",
                )}
              >
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
