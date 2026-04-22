"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
  TwitchIcon,
  DiscordIcon,
} from "../icons";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Teams", path: "/teams" },
  { name: "About", path: "/about" },
];

const socialLinks = [
  {
    name: "Instagram",
    icon: InstagramIcon,
    path: "https://www.instagram.com/osu.esports/",
  },
  {
    name: "Twitter",
    icon: TwitterIcon,
    path: "https://x.com/OSUEsports",
  },
  {
    name: "Youtube",
    icon: YoutubeIcon,
    path: "https://www.youtube.com/channel/UCFLeF0iSnJKIIdF6qKZrBgw",
  },
  {
    name: "Twitch",
    icon: TwitchIcon,
    path: "https://www.twitch.tv/esportsatosu",
  },
  {
    name: "Discord",
    icon: DiscordIcon,
    path: "https://discord.com/invite/KVt2JGxaaz",
  },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 w-full z-50 bg-background/60 backdrop-blur-xl border-b ">
      <nav className="flex justify-between items-center px-6 md:px-12 h-20 w-full max-w-screen-2xl mx-auto">
        {/* EaOSU logo */}
        <div className="flex items-center gap-10">
          <div>
            <Image
              src={"/images/eaosu_logo.png"}
              width={60}
              height={70}
              alt="Logo of Esports at OSU"
              style={{ width: "auto", height: "auto" }}
              priority
            />
          </div>

          {/* Links */}
          <div className="hidden md:flex items-center gap-8 font-headline md:text-sm lg:text-md">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={cn(
                  "transition-all font-sans duration-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,102,0,0.8)]",
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
        <div className="flex items-center gap-4">
          {socialLinks.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon
                  className="fill-white hover:fill-primary-container transition-colors"
                  width={25}
                  height={25}
                />
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
