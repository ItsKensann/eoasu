"use client";
// gonna put all the home page in same file for now then seperate them later once it looks passable
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { ArrowRight, ArrowLeft, Verified } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const images = [
  { id: "image_2", src: "/images/hero_section/eaosu_slide2.jpg" },
  { id: "image_3", src: "/images/hero_section/eaosu_slide3.jpg" },
  { id: "image_4", src: "/images/hero_section/eaosu_slide4.jpg" },
  { id: "image_5", src: "/images/hero_section/eaosu_slide5.jpg" },
];

const events = [];

export default function HomeContent() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // side effect to change index of image every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    // clean up timer
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col w-full p-8">
      {/* Hero section */}
      <section className="relative h-[65vh] min-h-[400px] w-full overflow-hidden flex items-end mt-20">
        {images.map((item, index) => (
          <div
            key={item.id}
            className={cn(
              "absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out",
              index === currentIndex ? "opacity-100 z-20" : "opacity-0 z-0",
            )}
          >
            <Image
              src={item.src}
              alt="Esports banner"
              fill
              priority={index === 0}
              className="object-cover object-top"
            />
          </div>
        ))}
      </section>

      {/* Upcoming events section */}
      <section className="py-24 px-6 md:px-18 max-w-7xl w-full mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h1 className="font-headline text-5xl font-black tracking-tighter text-white">
              Upcoming Events
            </h1>
            <div className="h-1 w-24 bg-primary-container"></div>
          </div>
          <div className="flex gap-4">
            <button className="w-12 h-12 bg-white">
              <ArrowLeft />
            </button>
            <button className="w-12 h-12 bg-white">
              <ArrowRight />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
