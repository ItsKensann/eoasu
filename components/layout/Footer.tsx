"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { Send } from "lucide-react";
import { cn } from "@/lib/utils";

const socialLinks = [
  {
    name: "Instagram",
    path: "https://www.instagram.com/osu.esports/",
  },
  {
    name: "Twitter",
    path: "https://x.com/OSUEsports",
  },
  {
    name: "Youtube",
    path: "https://www.youtube.com/channel/UCFLeF0iSnJKIIdF6qKZrBgw",
  },
  {
    name: "Twitch",
    path: "https://www.twitch.tv/esportsatosu",
  },
  {
    name: "Discord",
    path: "https://discord.com/invite/KVt2JGxaaz",
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    // pass
  };

  return (
    <footer className="bg-background border-t border-white/5 w-full py-12 md:px-12">
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-4">
          <div>
            <Image
              src={"/images/eaosu_logo.png"}
              width={65}
              height={70}
              alt="Logo of Esports at OSU"
              style={{ width: "auto", height: "auto" }}
              priority
            />
          </div>
          <p className="font-sans text-[11px] tracking-widest text-white/90 max-w-xs">
            © Copyright 2026 - All rights reserved.
          </p>
        </div>
        <div className="flex gap-4">
          {socialLinks.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="font-sans text-[12px] tracking-widest text-white/90 hover:text-primary-container transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-2 text-left">
          <h3 className="font-headline font-black text-2xl uppercase tracking-tighter text-primary-container italic">
            Newsletter
          </h3>
          <p className="font-sans text-xs tracking-widest text-white/90">
            Subscribe to stay up to date with all things Esports at OSU!
          </p>
          <form onSubmit={handleSubmit} className="flex w-full mad-w-md gap-2">
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow bg-background border border-white/20 rounded-sm px-4 py-2 font-headline text-xs tracking-widest text-white placeholder:text-white/20 focus:outline-none focus:border-primary-container transition-colors"
            />
            <button
              type="submit"
              className="bg-primary-container text-white p-3 rounded-sm hover:bg-primary-container/80 transition-colors"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}
