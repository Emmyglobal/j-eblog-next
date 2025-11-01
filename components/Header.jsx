"use client"
// components/Header.jsx
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const btn = document.getElementById("mobile-menu-button");
    // no-op, menu toggled via React state
  }, []);

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center mr-2">
              <i className="fas fa-atom text-white text-xl"></i>
            </div>
            <span className="heading-font text-2xl font-bold text-emerald-600">Orbittech</span>
          </a>
        </div>

        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="nav-link font-medium">Home</a>
          <Link href="/services" className="nav-link hover:text-emerald-600 font-medium">Services</Link>
	  <Link href="/resources" className="nav-link hover:text-emerald-600 font-medium">Resources</Link>
          <a href="#about" className="nav-link font-medium">About</a>
          <a href="#blog" className="nav-link font-medium">Blog</a>
          <a href="#contact" className="nav-link font-medium">Contact</a>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="px-4 py-2 rounded-full border border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white transition">Login</a>
          <a href="#" className="px-4 py-2 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 transition">Sign Up</a>
        </div>

        <button id="mobile-menu-button" className="md:hidden text-gray-700 focus:outline-none" onClick={() => setOpen(!open)}>
          <i className="fas fa-bars text-2xl"></i>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-6 transition-all ${open ? "block" : "hidden"}`}>
        <div className="flex flex-col space-y-4">
          <a href="#home" className="nav-link font-medium">Home</a>
          <Link href="/services" className="nav-link font-medium">Services</Link>
	  <Link href="/resources" className="hover:text-emerald-600">
  Resources
</Link>

          <a href="#about" className="nav-link font-medium">About</a>
          <a href="#blog" className="nav-link font-medium">Blog</a>
          <a href="#contact" className="nav-link font-medium">Contact</a>
          <div className="pt-4 border-t border-gray-200">
            <a href="#" className="block w-full text-center px-4 py-2 rounded-full border border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white transition mb-2">Login</a>
            <a href="#" className="block w-full text-center px-4 py-2 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 transition">Sign Up</a>
          </div>
        </div>
      </div>
    </header>
  );
}
