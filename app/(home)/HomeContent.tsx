"use client";
// gonna put all the home page in same file for now then seperate them later once it looks passable
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { ArrowRight, ArrowLeft, Verified } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { PassThrough } from "stream";

const images = [
  { id: "image_2", src: "/images/hero_section/eaosu_slide2.jpg" },
  { id: "image_3", src: "/images/hero_section/eaosu_slide3.jpg" },
  { id: "image_4", src: "/images/hero_section/eaosu_slide4.jpg" },
  { id: "image_5", src: "/images/hero_section/eaosu_slide5.jpg" },
];

const events = [
  {
    id: "01",
    title: "Valorant Inhouse",
    date: "APR 25",
    tag: "CASUAL",
    description:
      "Come insta-lock your favorite agent and have some fun in customs with our Valorant teams!",
    image: "/images/events/01_event.png",
    color: "primary-container",
  },
  {
    id: "02",
    title: "EaOSU Information Session",
    date: "APR 25",
    tag: "IN-PERSON",
    description:
      "Come join us to learn more about how our club works, how to participate, how you can join, and more!",
    image: "/images/events/02_event.webp",
    color: "secondary-container",
  },
  {
    id: "03",
    title: "Deadlock Inhouse",
    date: "MAY 27",
    tag: "CASUAL",
    description:
      "Come and join our DL team and have an evening out in the Cursed Apple. DM [DLK] Autumn (or ask in #deadlock-chat) for an invite to the playtest if you don't already have access.",
    image: "/images/events/03_event.png",
    color: "primary-container",
  },
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
    <div className="flex flex-col w-full p-8">
      {/* Hero section */}
      <section className="relative h-[80vh] min-h-[400px] w-full overflow-hidden flex items-end mt-20">
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
      <section className="py-24 px-6 md:px-12 max-w-7xl w-full mx-auto">
        {/* Title and nav buttons */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h1 className="font-headline text-5xl font-black tracking-tighter text-white mb-3">
              Upcoming Events
            </h1>
            <div className="h-1 w-24 bg-primary-container"></div>
          </div>
          <div className="flex gap-4 text-white">
            <button className="w-12 h-12 flex items-center justify-center border border-outline-variant hover:border-primary-container hover:text-primary-container transition-all">
              <ArrowLeft />
            </button>
            <button className="w-12 h-12 flex items-center justify-center border border-primary-container bg-primary-container text-on-primary-container">
              <ArrowRight />
            </button>
          </div>
        </div>

        {/* Events content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((item, index) => (
            <motion.div
              key={item.id}
              className="group border-l-2  border-primary-container"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ translateY: -8, transition: { duration: 0.7 } }}
            >
              <div className="h-48 overflow-hidden relative">
                <Image
                  src={item.image}
                  fill
                  sizes="100%"
                  priority
                  alt={item.title}
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition duration-700 ease-in-out opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div
                  className={cn(
                    "absolute top-4 left-4 px-3 py-1 text-white font-headline text-xs",
                    item.color === "primary-container"
                      ? "bg-primary-container"
                      : "bg-secondary-container",
                  )}
                >
                  {item.tag}
                </div>
              </div>
              <div className="p-8">
                <span className="flex justify-between items-start text-primary-container font-headline tracking-widest font-bold text-xs mb-4">
                  {item.date}
                </span>
                <h1 className="text-xl text-white uppercase font-bold font-headline tracking-wide mb-4 group-hover:text-primary-container transition-colors ">
                  {item.title}
                </h1>
                <p className="text-on-surface-variant text-md leading-relaxed mb-8">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
