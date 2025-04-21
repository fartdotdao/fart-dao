"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const heroHeight = heroRef.current.offsetHeight;
        const scrollPosition = window.scrollY;

        if (scrollPosition > heroHeight - 80) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }

        if (scrollPosition > heroHeight) {
          setShowScrollTop(true);
        } else {
          setShowScrollTop(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // This is fine as it's just a scroll listener

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      {/* Top Section with Background Image */}
      <div className="relative" ref={heroRef}>
        {/* Background Image Container - Limited Height */}
        <div className="absolute inset-0 z-0 h-[100vh]">
          <Image
            src="/bg.jpg"
            alt="Background"
            fill
            className="object-cover opacity-30"
            priority
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Navigation */}
          <nav
            className={`px-4 md:px-8 py-4 z-50 fixed top-0 left-0 right-0 transition-all duration-500 ease-in-out transform ${
              isScrolled
                ? "translate-y-0 backdrop-blur-md bg-black/80 border-b border-emerald-500/20 shadow-lg"
                : "-translate-y-full backdrop-blur-sm bg-black/30"
            }`}
          >
            <div className="flex items-center justify-between lg:grid lg:grid-cols-3">
              {/* Logo */}
              <Link
                href="/"
                className="flex items-center hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/logo.png"
                  alt="FARTDAO Logo"
                  width={40}
                  height={40}
                  className={`transition-all duration-300 ${
                    isScrolled
                      ? "w-8 h-8 lg:w-10 lg:h-10"
                      : "w-10 h-10 lg:w-12 lg:h-12"
                  }`}
                />
                <div
                  className={`font-bold transition-all duration-300 ${
                    isScrolled ? "text-lg lg:text-xl" : "text-xl lg:text-2xl"
                  }`}
                >
                  <span className="text-white">FART</span>
                  <span className="text-emerald-500">DAO</span>
                </div>
              </Link>

              {/* Social Media Icons - Centered */}
              <div className="hidden md:flex items-center justify-center gap-6">
                <a
                  href="https://x.com/fartdotdao"
                  className="text-gray-400 hover:text-emerald-500 transition-all duration-300 hover:scale-110"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a
                  href="https://discord.gg/SX5aR69A"
                  className="text-gray-400 hover:text-emerald-500 transition-all duration-300 hover:scale-110"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z" />
                  </svg>
                </a>
                <a
                  href="https://www.daos.fun/DAht43MBqJzyJkKFiqfJZi4oMrYcRe396UF98eLRdaos"
                  className="text-gray-400 hover:text-emerald-500 transition-all duration-300 hover:scale-110"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 400 400"
                  >
                    <g transform="translate(0,400) scale(0.1,-0.1)">
                      <path d="M1802 3384 c-305 -44 -582 -184 -795 -400 -216 -220 -349 -490 -392 -794 -19 -140 -19 -230 0 -370 73 -524 418 -950 915 -1130 236 -85 546 -103 785 -44 261 64 519 212 691 397 72 77 194 241 194 261 0 6 -33 29 -73 52 -183 103 -1113 637 -1120 643 -4 4 97 61 225 126 128 65 292 148 363 185 72 37 243 125 380 195 138 70 252 129 253 131 20 17 -132 238 -236 342 -48 48 -118 110 -156 139 -298 221 -676 319 -1034 267z" />
                    </g>
                  </svg>
                </a>
              </div>

              {/* Navigation Links */}
              <div className="flex items-center justify-end gap-8">
                <div className="hidden md:flex items-center gap-8">
                  <a
                    href="#about"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    About
                  </a>
                  <a
                    href="#features"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Features
                  </a>
                  <a
                    href="#roadmap"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Roadmap
                  </a>
                  <a
                    href="#contact"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                  {/* <button className="px-4 py-2 bg-emerald-600 rounded-md hover:bg-emerald-700 transition-colors">
                    Docs →
                  </button> */}
                </div>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="md:hidden p-2 text-gray-400 hover:text-white"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {isMobileMenuOpen ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    )}
                  </svg>
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            <div
              className={`md:hidden transition-all duration-500 ease-in-out ${
                isMobileMenuOpen
                  ? "max-h-[400px] opacity-100"
                  : "max-h-0 opacity-0"
              } overflow-hidden`}
            >
              <div className="pt-4 pb-3 space-y-3">
                <a
                  href="#about"
                  className="block text-gray-300 hover:text-white transition-colors py-2"
                >
                  About
                </a>
                <a
                  href="#features"
                  className="block text-gray-300 hover:text-white transition-colors py-2"
                >
                  Features
                </a>
                <a
                  href="#roadmap"
                  className="block text-gray-300 hover:text-white transition-colors py-2"
                >
                  Roadmap
                </a>
                <a
                  href="#contact"
                  className="block text-gray-300 hover:text-white transition-colors py-2"
                >
                  Contact
                </a>
                {/* <button className="w-full px-4 py-2 bg-emerald-600 rounded-md hover:bg-emerald-700 transition-colors">
                  Docs →
                </button> */}
                {/* Mobile Social Icons */}
                <div className="flex justify-center gap-6 pt-4">
                  <a
                    href="https://x.com/fartdotdao"
                    className="text-gray-400 hover:text-emerald-500 transition-all duration-300 hover:scale-110"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                  <a
                    href="https://discord.gg/SX5aR69A"
                    className="text-gray-400 hover:text-emerald-500 transition-all duration-300 hover:scale-110"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.daos.fun/DAht43MBqJzyJkKFiqfJZi4oMrYcRe396UF98eLRdaos"
                    className="text-gray-400 hover:text-emerald-500 transition-all duration-300 hover:scale-110"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 400 400"
                    >
                      <g transform="translate(0,400) scale(0.1,-0.1)">
                        <path d="M1802 3384 c-305 -44 -582 -184 -795 -400 -216 -220 -349 -490 -392 -794 -19 -140 -19 -230 0 -370 73 -524 418 -950 915 -1130 236 -85 546 -103 785 -44 261 64 519 212 691 397 72 77 194 241 194 261 0 6 -33 29 -73 52 -183 103 -1113 637 -1120 643 -4 4 97 61 225 126 128 65 292 148 363 185 72 37 243 125 380 195 138 70 252 129 253 131 20 17 -132 238 -236 342 -48 48 -118 110 -156 139 -298 221 -676 319 -1034 267z" />
                      </g>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </nav>

          {/* Initial navbar that shows at top and fades out when scrolling */}
          <nav
            className={`px-4 md:px-8 py-4 z-40 absolute top-0 left-0 right-0 transition-all duration-500 ease-in-out ${
              isScrolled ? "opacity-0" : "opacity-100"
            } backdrop-blur-sm bg-black/30`}
          >
            <div className="flex items-center justify-between lg:grid lg:grid-cols-3">
              {/* Logo */}
              <Link
                href="/"
                className="flex items-center hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/logo.png"
                  alt="FARTDAO Logo"
                  width={40}
                  height={40}
                  className={`transition-all duration-300 ${
                    isScrolled
                      ? "w-8 h-8 lg:w-10 lg:h-10"
                      : "w-10 h-10 lg:w-12 lg:h-12"
                  }`}
                />
                <div
                  className={`font-bold transition-all duration-300 ${
                    isScrolled ? "text-lg lg:text-xl" : "text-xl lg:text-2xl"
                  }`}
                >
                  <span className="text-white">FART</span>
                  <span className="text-emerald-500">DAO</span>
                </div>
              </Link>

              {/* Social Media Icons - Centered */}
              <div className="hidden md:flex items-center justify-center gap-6">
                <a
                  href="https://x.com/fartdotdao"
                  className="text-gray-400 hover:text-emerald-500 transition-all duration-300 hover:scale-110"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a
                  href="https://discord.gg/SX5aR69A"
                  className="text-gray-400 hover:text-emerald-500 transition-all duration-300 hover:scale-110"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z" />
                  </svg>
                </a>
                <a
                  href="https://www.daos.fun/DAht43MBqJzyJkKFiqfJZi4oMrYcRe396UF98eLRdaos"
                  className="text-gray-400 hover:text-emerald-500 transition-all duration-300 hover:scale-110"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 400 400"
                  >
                    <g transform="translate(0,400) scale(0.1,-0.1)">
                      <path d="M1802 3384 c-305 -44 -582 -184 -795 -400 -216 -220 -349 -490 -392 -794 -19 -140 -19 -230 0 -370 73 -524 418 -950 915 -1130 236 -85 546 -103 785 -44 261 64 519 212 691 397 72 77 194 241 194 261 0 6 -33 29 -73 52 -183 103 -1113 637 -1120 643 -4 4 97 61 225 126 128 65 292 148 363 185 72 37 243 125 380 195 138 70 252 129 253 131 20 17 -132 238 -236 342 -48 48 -118 110 -156 139 -298 221 -676 319 -1034 267z" />
                    </g>
                  </svg>
                </a>
              </div>

              {/* Navigation Links */}
              <div className="flex items-center justify-end gap-8">
                <div className="hidden md:flex items-center gap-8">
                  <a
                    href="#about"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    About
                  </a>
                  <a
                    href="#features"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Features
                  </a>
                  <a
                    href="#roadmap"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Roadmap
                  </a>
                  <a
                    href="#contact"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                  {/* <button className="px-4 py-2 bg-emerald-600 rounded-md hover:bg-emerald-700 transition-colors">
                    Docs →
                  </button> */}
                </div>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="md:hidden p-2 text-gray-400 hover:text-white"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {isMobileMenuOpen ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    )}
                  </svg>
                </button>
              </div>
            </div>
          </nav>

          {/* Hero Section */}
          <div className="container mx-auto px-4 pt-20 md:pt-32">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-block px-4 py-1 rounded-full border border-emerald-500/30 backdrop-blur-sm bg-emerald-500/10 text-emerald-400 text-sm mb-6">
                Pioneering DAO for Fartcoin and fartcoin-related memes
              </div>

              <h1 className="text-4xl md:text-7xl font-bold mb-6">
                <span className="text-white">FART</span>
                <span className="text-emerald-500">DAO</span>
              </h1>

              <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed px-4">
                The first DAO focused on buying $FART and fartcoin-related
                memes. Decentralized, deflationary, and definitely not a
                gas-free experience.
              </p>

              {/* Hero Section Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 px-4">
                <a
                  href="#about"
                  className="w-full sm:w-auto px-8 py-3 bg-emerald-600 rounded-md hover:bg-emerald-700 transition-colors text-center"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#about")?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                >
                  Get Started
                </a>
                <button className="w-full sm:w-auto px-8 py-3 border border-emerald-500 rounded-md hover:bg-emerald-500/10 transition-colors">
                  Learn More
                </button>
              </div>

              {/* Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mt-14 px-4">
                <div className="p-8 rounded-xl border border-emerald-500/20 backdrop-blur-sm bg-black/40 hover:bg-black/50 transition-colors group">
                  <div className="w-12 h-12 mb-6 text-emerald-500 flex items-center justify-center mx-auto text-center text-3xl">
                    💨
                  </div>
                  <h3 className="text-xl font-bold mb-2">Stacking</h3>
                  <p className="text-gray-400">
                    Funds will be used to buy and hold $FART, and other
                    fartcoin-related memes that strengthen the culture.
                  </p>
                </div>

                <div className="p-8 rounded-xl border border-emerald-500/20 backdrop-blur-sm bg-black/40 hover:bg-black/50 transition-colors group">
                  <div className="w-12 h-12 mb-6 text-emerald-500 flex items-center justify-center mx-auto text-center text-3xl">
                    😂
                  </div>
                  <h3 className="text-xl font-bold mb-2">Memes</h3>
                  <p className="text-gray-400">
                    We fuel the fun by collecting and creating top-tier FartCoin
                    memes that spread the vibe across the internet.
                  </p>
                </div>

                <div className="p-8 rounded-xl border border-emerald-500/20 backdrop-blur-sm bg-black/40 hover:bg-black/50 transition-colors group">
                  <div className="w-12 h-12 mb-6 text-emerald-500 flex items-center justify-center mx-auto text-center text-3xl">
                    🗳️
                  </div>
                  <h3 className="text-xl font-bold mb-2">Voting</h3>
                  <p className="text-gray-400">
                    Our DAO runs on community votes, so everyone gets a say in
                    how we spend funds and what memes we back.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dark Background Sections */}
      <div id="about" className="bg-[#0a0a0a] text-white">
        <div className="container mx-auto px-4 py-16 md:py-32">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-mono tracking-wider px-4">
              Breathe Deep. It&apos;s{" "}
              <span className="text-emerald-500">FARTDAO</span> Time
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-16 px-4">
              The ultimate blend of memes and crypto power. Fart DAO brings the
              community together to stack $FART, other fartcoin-adjacent memes,
              and shape the culture through decentralized decisions—all fueled
              by collective vibes and blockchain tech.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-4">
              <div className="p-8 rounded-xl border border-emerald-500/20 bg-black/80 backdrop-blur-sm hover:bg-black/90 transition-all">
                <div className="w-16 h-16 mx-auto mb-6">
                  <svg
                    className="w-full h-full text-green-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2L8 6h8l-4-4z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 6v4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 6H6a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-2"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 18v2"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 18v2"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 18v2"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Origins</h3>
                <p className="text-gray-400">
                  The first DAO to embrace Fartcoin and its meme magic. We set
                  the standard for what it means to ride early and ride loud.
                </p>
              </div>

              <div className="p-8 rounded-xl border border-emerald-500/20 bg-black/80 backdrop-blur-sm hover:bg-black/90 transition-all">
                <div className="w-16 h-16 mx-auto mb-6">
                  <svg
                    className="w-full h-full text-green-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 3v18h18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Strategy</h3>
                <p className="text-gray-400">
                  Not just collecting for laughs—we&apos;re tracking trends,
                  making calculated moves, and shaping the memeconomy one $FART
                  at a time.
                </p>
              </div>

              <div className="p-8 rounded-xl border border-emerald-500/20 bg-black/80 backdrop-blur-sm hover:bg-black/90 transition-all">
                <div className="w-16 h-16 mx-auto mb-6">
                  <svg
                    className="w-full h-full text-green-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle
                      cx="9"
                      cy="7"
                      r="4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M23 21v-2a4 4 0 00-3-3.87"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 3.13a4 4 0 010 7.75"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Collective</h3>
                <p className="text-gray-400">
                  Every decision comes from the community. FARTDAO runs on group
                  energy, shared laughs, and decentralized power.
                </p>
              </div>
            </div>

            {/* 10X Section */}
            <div id="features" className="mt-32">
              <h2 className="text-5xl font-bold mb-6 font-mono tracking-wider">
                CORE <span className="text-emerald-500">FEATURES</span>
              </h2>
              <p className="text-gray-400 text-xl max-w-3xl mx-auto">
                Discover the features that make Fart Nation a movement, not just
                a moment.
              </p>
            </div>

            {/* Analysis Tools Section */}
            <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Lightning-Fast Analysis */}
              <div className="p-8 rounded-xl border border-emerald-500/20 bg-[#0f0f0f] hover:bg-[#141414] transition-all group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative flex items-start gap-4">
                  <div className="w-10 h-10 text-emerald-400 group-hover:text-emerald-300 transition-colors flex-shrink-0">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-emerald-300 transition-colors">
                      Community-First Governance
                    </h3>
                    <p className="text-gray-400">
                      Decisions are made together — every Farter has a voice.
                      Proposals, votes, and vibes are all on-chain.
                    </p>
                  </div>
                </div>
              </div>

              {/* Predictive Trend Analysis */}
              <div className="p-8 rounded-xl border border-emerald-500/20 bg-[#0f0f0f] hover:bg-[#141414] transition-all group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative flex items-start gap-4">
                  <div className="w-10 h-10 text-emerald-400 group-hover:text-emerald-300 transition-colors flex-shrink-0">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 20l4-16m2 16l4-16M3 8h18M3 16h18"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-emerald-300 transition-colors">
                      Limited WL Access
                    </h3>
                    <p className="text-gray-400">
                      Early entry for OG Farters. We&apos;re keeping it small,
                      smelly, and powerful — with exclusive whitelist drops for
                      active community members.
                    </p>
                  </div>
                </div>
              </div>

              {/* Agent Autonomy Tools */}
              <div className="p-8 rounded-xl border border-emerald-500/20 bg-[#0f0f0f] hover:bg-[#141414] transition-all group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative flex items-start gap-4">
                  <div className="w-10 h-10 text-emerald-400 group-hover:text-emerald-300 transition-colors flex-shrink-0">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 16V12M12 8h.01"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-emerald-300 transition-colors">
                      Meme-Driven Culture
                    </h3>
                    <p className="text-gray-400">
                      We don&apos;t just build — we meme, we engage, and we fart
                      with purpose. Fart DAO is where humor meets utility.
                    </p>
                  </div>
                </div>
              </div>

              {/* Smart Risk Solutions */}
              <div className="p-8 rounded-xl border border-emerald-500/20 bg-[#0f0f0f] hover:bg-[#141414] transition-all group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative flex items-start gap-4">
                  <div className="w-10 h-10 text-emerald-400 group-hover:text-emerald-300 transition-colors flex-shrink-0">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-emerald-300 transition-colors">
                      Low MCAP Launch
                    </h3>
                    <p className="text-gray-400">
                      We&apos;re starting lean so the community can grow
                      organically. No VC dumps — just pure gas from the ground
                      up.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Roadmap Section */}
            <div id="roadmap" className="mt-32">
              <div className="text-center mb-16">
                <h2 className="text-5xl font-bold mb-6 font-mono tracking-wider">
                  Our <span className="text-emerald-500">Roadmap</span>
                </h2>
                <p className="text-gray-400 text-xl max-w-3xl mx-auto">
                  The journey of FARTDAO is carefully planned to ensure maximum
                  impact and sustainable growth in the memecoin ecosystem.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Phase 1 */}
                <div className="p-8 rounded-xl border border-emerald-500/20 bg-black/80 backdrop-blur-sm hover:bg-black/90 transition-all relative group">
                  <div className="absolute -top-4 left-8 px-4 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                    <span className="text-emerald-400">Phase 1</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 mt-4 text-white">
                    Foundation
                  </h3>
                  <ul className="text-gray-400 space-y-3">
                    <li className="flex items-start gap-2">
                      <svg
                        className="w-6 h-6 text-emerald-500 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>Fart DAO will launch on daos.fun</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        className="w-6 h-6 text-emerald-500 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>Initial $FART token accumulation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        className="w-6 h-6 text-emerald-500 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>Community building initiatives</span>
                    </li>
                  </ul>
                </div>

                {/* Phase 2 */}
                <div className="p-8 rounded-xl border border-emerald-500/20 bg-black/80 backdrop-blur-sm hover:bg-black/90 transition-all relative group">
                  <div className="absolute -top-4 left-8 px-4 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                    <span className="text-emerald-400">Phase 2</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 mt-4 text-white">
                    Expansion
                  </h3>
                  <ul className="text-gray-400 space-y-3">
                    <li className="flex items-start gap-2">
                      <svg
                        className="w-6 h-6 text-emerald-500 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>Launch meme creation platform</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        className="w-6 h-6 text-emerald-500 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>Strategic partnerships</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        className="w-6 h-6 text-emerald-500 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>Enhanced voting mechanisms</span>
                    </li>
                  </ul>
                </div>

                {/* Phase 3 */}
                <div className="p-8 rounded-xl border border-emerald-500/20 bg-black/80 backdrop-blur-sm hover:bg-black/90 transition-all relative group">
                  <div className="absolute -top-4 left-8 px-4 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                    <span className="text-emerald-400">Phase 3</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 mt-4 text-white">
                    Innovation
                  </h3>
                  <ul className="text-gray-400 space-y-3">
                    <li className="flex items-start gap-2">
                      <svg
                        className="w-6 h-6 text-emerald-500 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>Cross-chain integration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        className="w-6 h-6 text-emerald-500 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>NFT meme marketplace</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        className="w-6 h-6 text-emerald-500 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>Advanced analytics platform</span>
                    </li>
                  </ul>
                </div>

                {/* Phase 4 */}
                <div className="p-8 rounded-xl border border-emerald-500/20 bg-black/80 backdrop-blur-sm hover:bg-black/90 transition-all relative group">
                  <div className="absolute -top-4 left-8 px-4 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                    <span className="text-emerald-400">Phase 4</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 mt-4 text-white">
                    Ecosystem
                  </h3>
                  <ul className="text-gray-400 space-y-3">
                    <li className="flex items-start gap-2">
                      <svg
                        className="w-6 h-6 text-emerald-500 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>Global meme economy hub</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        className="w-6 h-6 text-emerald-500 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>DeFi integrations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        className="w-6 h-6 text-emerald-500 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>Metaverse expansion</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div id="contact" className="mt-32">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="text-left">
                  <h2 className="text-5xl font-bold mb-6 font-mono tracking-wider">
                    Get in <span className="text-emerald-500">Touch</span>
                  </h2>
                  <p className="text-gray-400 text-xl leading-relaxed">
                    Have a question? Send us a message and we&apos;ll get back
                    to you soon.
                  </p>

                  {/* Logo and Title */}
                  <div className="flex items-center mt-12 justify-center p-8 bg-[#0f0f0f] rounded-xl border border-emerald-500/20">
                    <Image
                      src="/logo.png"
                      alt="FARTDAO Logo"
                      width={60}
                      height={60}
                      className="w-16 h-16"
                    />
                    <div className="text-4xl font-bold ml-4">
                      <span className="text-white">FART</span>
                      <span className="text-emerald-500">DAO</span>
                    </div>
                  </div>
                </div>

                <div className="bg-[#0f0f0f] p-8 rounded-xl border border-emerald-500/20">
                  <form
                    action="mailto:fartdotdao@gmail.com"
                    method="post"
                    encType="text/plain"
                    className="space-y-6"
                  >
                    {/* Name Input */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm text-left font-medium text-gray-400 mb-2"
                      >
                        Name
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <svg
                            className="h-5 w-5 text-gray-400"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <circle
                              cx="12"
                              cy="7"
                              r="4"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="block w-full pl-10 pr-3 py-3 border border-emerald-500/20 rounded-md bg-black/40 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                          placeholder="Your name"
                        />
                      </div>
                    </div>

                    {/* Email Input */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm text-left font-medium text-gray-400 mb-2"
                      >
                        Email
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <svg
                            className="h-5 w-5 text-gray-400"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="block w-full pl-10 pr-3 py-3 border border-emerald-500/20 rounded-md bg-black/40 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    {/* Message Input */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm text-left font-medium text-gray-400 mb-2"
                      >
                        Message
                      </label>
                      <div className="relative">
                        <div className="absolute left-3 top-3 flex items-start pointer-events-none">
                          <svg
                            className="h-5 w-5 text-gray-400"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          required
                          className="block w-full pl-10 pr-3 py-3 border border-emerald-500/20 rounded-md bg-black/40 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                          placeholder="Your message"
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full cursor-pointer py-3 px-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-medium rounded-md hover:from-emerald-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all duration-300"
                    >
                      Send Message
                      <svg
                        className="inline-block w-4 h-4 ml-2 -mt-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-[#0a0a0a] border-t border-emerald-500/20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            {/* Footer Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              {/* Brand Column */}
              <div className="space-y-4">
                <div className="flex items-center">
                  <Image
                    src="/logo.png"
                    alt="FARTDAO Logo"
                    width={40}
                    height={40}
                    className="w-10 h-10"
                  />
                  <div className="text-xl font-bold ml-2">
                    <span className="text-white">FART</span>
                    <span className="text-emerald-500">DAO</span>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">
                  The first DAO focused on buying $FART and fartcoin-related
                  memes.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-white font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#about"
                      className="text-gray-400 hover:text-emerald-500 transition-colors"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#roadmap"
                      className="text-gray-400 hover:text-emerald-500 transition-colors"
                    >
                      Roadmap
                    </a>
                  </li>
                  <li>
                    <a
                      href="#features"
                      className="text-gray-400 hover:text-emerald-500 transition-colors"
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="text-gray-400 hover:text-emerald-500 transition-colors"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              {/* Resources */}
              {/* <div>
                <h3 className="text-white font-bold mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-emerald-500 transition-colors"
                    >
                      Whitepaper
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-emerald-500 transition-colors"
                    >
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-emerald-500 transition-colors"
                    >
                      Community
                    </a>
                  </li>
                </ul>
              </div> */}

              {/* Contact */}
              <div>
                <h3 className="text-white font-bold mb-4">Contact</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="mailto:fartdotdao@gmail.com"
                      className="text-gray-400 hover:text-emerald-500 transition-colors"
                    >
                      fartdotdao@gmail.com
                    </a>
                  </li>
                  <li className="flex space-x-4">
                    <a
                      href="https://x.com/fartdotdao"
                      className="text-gray-400 hover:text-emerald-500 transition-all duration-300 hover:scale-110"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>
                    <a
                      href="https://discord.gg/SX5aR69A"
                      className="text-gray-400 hover:text-emerald-500 transition-all duration-300 hover:scale-110"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.daos.fun/DAht43MBqJzyJkKFiqfJZi4oMrYcRe396UF98eLRdaos"
                      className="text-gray-400 hover:text-emerald-500 transition-all duration-300 hover:scale-110"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 400 400"
                      >
                        <g transform="translate(0,400) scale(0.1,-0.1)">
                          <path d="M1802 3384 c-305 -44 -582 -184 -795 -400 -216 -220 -349 -490 -392 -794 -19 -140 -19 -230 0 -370 73 -524 418 -950 915 -1130 236 -85 546 -103 785 -44 261 64 519 212 691 397 72 77 194 241 194 261 0 6 -33 29 -73 52 -183 103 -1113 637 -1120 643 -4 4 97 61 225 126 128 65 292 148 363 185 72 37 243 125 380 195 138 70 252 129 253 131 20 17 -132 238 -236 342 -48 48 -118 110 -156 139 -298 221 -676 319 -1034 267z" />
                        </g>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-emerald-500/20 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="text-gray-400 text-sm">
                  © 2025 FARTDAO. All Rights Reserved.
                </div>
                <div className="flex space-x-6 mt-4 md:mt-0">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-emerald-500 text-sm"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-emerald-500 text-sm"
                  >
                    Terms of Service
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-emerald-500 text-sm"
                  >
                    Cookie Policy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button with enhanced transitions */}
      <button
        onClick={scrollToTop}
        className={`fixed cursor-pointer bottom-4 md:bottom-8 right-4 md:right-8 p-3 md:p-4 
          bg-emerald-500 hover:bg-emerald-600 text-white rounded-full 
          shadow-lg transition-all duration-500 ease-in-out transform 
          hover:scale-110 active:scale-95
          ${
            showScrollTop
              ? "translate-y-0 opacity-100 visible"
              : "translate-y-16 opacity-0 invisible"
          }
          focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 
          z-50`}
        aria-label="Scroll to top"
      >
        <svg
          className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 ease-in-out group-hover:translate-y-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </div>
  );
}
