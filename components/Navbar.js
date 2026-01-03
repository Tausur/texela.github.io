"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Dashboard");

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) setMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = ["Convert", "Docs", "Pricing", "Support"];

  return (
    <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-7xl bg-white shadow-[0_4px_15px_rgba(0,0,0,0.2)] rounded-xl">
      <div className="flex justify-between items-center px-6 py-3">

        {/* Logo */}
        <a
          href="/"
          className="text-2xl flex items-center font-bold text-black cursor-pointer hover:scale-105 transition-transform"
        >
          <img src="../logo1.png" alt=""/>
          <p className="text-xl px-2 font-serif">Texela</p>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex space-x-6">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => setActiveLink(link)}
              className={`relative text-black font-medium px-3 py-2 rounded-full cursor-pointer 
                transition-all duration-300 
                hover:bg-gray-100 hover:scale-105`}
            >
              {link}
            </button>
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-black text-2xl focus:outline-none cursor-pointer"
          >
            {mobileMenuOpen ? "✖️" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-6 pb-4 flex flex-col space-y-2">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => setActiveLink(link)}
              className="text-black font-medium px-3 py-2 rounded-full text-left cursor-pointer transition-all duration-300 hover:bg-gray-100 hover:scale-105"
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
