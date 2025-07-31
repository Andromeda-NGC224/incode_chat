"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { IoMdArrowRoundDown } from "react-icons/io";

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 50,
        y: (e.clientY / window.innerHeight - 0.5) * 50,
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const textTransform = `translate(${mousePosition.x}px, ${
    mousePosition.y
  }px) scale(${1 + Math.abs(mousePosition.x + mousePosition.y) / 1000})`;

  return (
    <section
      className="relative h-screen overflow-hidden"
      style={{
        backgroundImage: "url('/HomePage/hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

      {/* Main Hero Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-4">
        <div className="text-center">
          <h1
            className="cursor-hover text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
            style={{
              transform: textTransform,
              textShadow: "0 0 30px rgba(0,0,0,0.8)",
              filter: `blur(${scrollY / 200}px)`,
            }}
          >
            <span className="bg-gradient-to-r from-cyan-300 via-fuchsia-500 to-cyan-300 bg-clip-text text-transparent animate-pulse brightness-125 contrast-125 drop-shadow">
              Syntherra
            </span>
          </h1>
          <h2
            className="cursor-hover text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
            style={{
              transform: `${textTransform} rotate(${mousePosition.x / 10}deg)`,
              textShadow: "0 0 20px rgba(96,165,250,0.5)",
              opacity: 1 - scrollY / 400,
            }}
          >
            CHAT
          </h2>
          <div
            className="flex justify-center mb-6 mt-8"
            style={{
              transform: `${textTransform} rotate(${mousePosition.x / 10}deg)`,
              textShadow: "0 0 20px rgba(96,165,250,0.5)",
              opacity: 1 - scrollY / 400,
            }}
          >
            <div className="h-1 w-32 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full"></div>
          </div>

          <p className="text-xl sm:text-2xl md:text-3xl mb-8 max-w-4xl mx-auto leading-relaxed text-bluelight-text">
            Step into a frozen cyber-realm where neon auroras pulse through
            glacial circuits, and every message echoes across the digital
            fjords.
          </p>
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/description"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 cursor-pointer whitespace-nowrap shadow-lg shadow-cyan-500/25"
            >
              Neural Description
            </Link>
            <Link
              href="/chatting"
              className="border-2 border-bluedark-text text-bluedark-text hover:bg-bluedark-text hover:text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 cursor-pointer whitespace-nowrap"
            >
              Connect Now
            </Link>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 w-4 h-4 bg-bluedark-text rounded-full animate-ping opacity-75"></div>
        <div className="absolute top-1/3 right-16 w-2 h-2 bg-purple-text rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-bluedark-text rounded-full animate-bounce"></div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-bluedark-text animate-bounce">
        <div className="w-6 h-6 flex items-center justify-center">
          <IoMdArrowRoundDown className=" text-2xl" />
        </div>
      </div>
    </section>
  );
}
