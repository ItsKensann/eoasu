"use client";
// gonna put all the home page in same file for now then seperate them later once it looks passable
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { ArrowRight, ArrowLeft, Verified } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const images = [
  { id: "image_1", src: "/images/hero_section/eaosu_slide1.gif" },
  { id: "image_2", src: "/images/hero_section/eaosu_slide2.jpg" },
  { id: "image_3", src: "/images/hero_section/eaosu_slide3.jpg" },
  { id: "image_4", src: "/images/hero_section/eaosu_slide4.jpg" },
  { id: "image_5", src: "/images/hero_section/eaosu_slide5.jpg" },
];

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
    <div className="flex flex-col w-full">
      {/* Hero section */}
      <section className="relative h-[65vh] min-h-[400px] w-full overflow-hidden flex items-end mt-20">
        <div className="absolute inset-0 z-0 m-8">
          <Image
            src={images[currentIndex].src}
            alt="Esports banner"
            fill
            priority
            className="object-cover opacity-40"
          />
        </div>
      </section>
    </div>
  );
}
