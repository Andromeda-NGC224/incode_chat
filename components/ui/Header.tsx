"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

import { TiThMenu, TiTimes } from "react-icons/ti";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? "bg-black/90 backdrop-blur-md py-4 border-b border-cyan-500/20"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-bluedark-text cursor-pointer hover:text-bluelight-text transition-colors"
        >
          <span className="bg-gradient-to-r from-cyan-300 via-fuchsia-500 to-cyan-300 bg-clip-text text-transparent brightness-125 contrast-125 drop-shadow">
            Syntherra <span className="text-white">Chat</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/description"
            className="text-bluelight-text hover:text-bluedark-text transition-colors cursor-pointer whitespace-nowrap font-medium"
          >
            Neural Description
          </Link>

          {/* CTA Button */}
          <Link
            href="/chatting"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 cursor-pointer whitespace-nowrap shadow-lg shadow-cyan-500/25"
          >
            Connect Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-bluedark-text hover:text-bluelight-text transition-colors cursor-pointer"
        >
          <div className="w-6 h-6 flex items-center justify-center">
            {isMenuOpen ? (
              <TiTimes className="text-2xl" />
            ) : (
              <TiThMenu className="text-2xl" />
            )}
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-black/95 backdrop-blur-md px-6 py-6 space-y-4 border-b border-cyan-500/20">
          <Link
            href="/description"
            className="block text-bluelight-text hover:text-bluedark-text transition-colors cursor-pointer font-medium"
          >
            Neural Description
          </Link>
          <Link
            href="/chatting"
            className="block bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-6 py-3 rounded-full font-semibold transition-colors cursor-pointer whitespace-nowrap text-center"
          >
            Connect Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
