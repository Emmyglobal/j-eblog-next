"use client";
// components/Header.jsx
import { useState } from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { data: session, status } = useSession();

  // session: undefined (loading) | null (not signed in) | object (signed in)

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center mr-2">
              <i className="fas fa-atom text-white text-xl"></i>
            </div>
            <span className="heading-font text-2xl font-bold text-emerald-600">Orbittech</span>
          </Link>
        </div>

        <nav className="hidden md:flex space-x-8">
          <Link href="#home" className="nav-link font-medium">Home</Link>
          <Link href="/services" className="nav-link hover:text-emerald-600 font-medium">Services</Link>
          <Link href="/resources" className="nav-link hover:text-emerald-600 font-medium">Resources</Link>
          <Link href="#about" className="nav-link font-medium">About</Link>
          <Link href="#blog" className="nav-link font-medium">Blog</Link>
          <Link href="#contact" className="nav-link font-medium">Contact</Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          {status === "loading" ? (
            <div className="text-sm text-gray-500 px-4 py-2">Checking...</div>
          ) : session ? (
            // Signed in state
            <>
              <Link href="/dashboard" className="px-4 py-2 rounded-full border border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white transition">
                {session.user?.name || session.user?.email}
              </Link>
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="px-4 py-2 rounded-full bg-red-500 text-white hover:bg-red-600 transition"
              >
                Logout
              </button>
            </>
          ) : (
            // Signed out state
            <>
              <Link href="/auth/login" className="px-4 py-2 rounded-full border border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white transition">Login</Link>
              <Link href="/auth/signup" className="px-4 py-2 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 transition">Sign Up</Link>
            </>
          )}
        </div>

        <button
          id="mobile-menu-button"
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <i className="fas fa-bars text-2xl"></i>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-6 transition-all ${open ? "block" : "hidden"}`}>
        <div className="flex flex-col space-y-4">
          <Link href="#home" onClick={() => setOpen(false)} className="nav-link font-medium">Home</Link>
          <Link href="/services" onClick={() => setOpen(false)} className="nav-link font-medium">Services</Link>
          <Link href="/resources" onClick={() => setOpen(false)} className="nav-link font-medium">Resources</Link>
          <Link href="#about" onClick={() => setOpen(false)} className="nav-link font-medium">About</Link>
          <Link href="#blog" onClick={() => setOpen(false)} className="nav-link font-medium">Blog</Link>
          <Link href="#contact" onClick={() => setOpen(false)} className="nav-link font-medium">Contact</Link>

          <div className="pt-4 border-t border-gray-200">
            {status === "loading" ? (
              <div className="text-sm text-gray-500 px-4 py-2">Checking...</div>
            ) : session ? (
              <>
                <Link href="/dashboard" onClick={() => setOpen(false)} className="block w-full text-center px-4 py-2 rounded-full border border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white transition mb-2">
                  {session.user?.name || session.user?.email}
                </Link>
                <button
                  onClick={() => { signOut({ callbackUrl: "/" }); setOpen(false); }}
                  className="block w-full text-center px-4 py-2 rounded-full bg-red-500 text-white hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/auth/login" onClick={() => setOpen(false)} className="block w-full text-center px-4 py-2 rounded-full border border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white transition mb-2">Login</Link>
                <Link href="/auth/signup" onClick={() => setOpen(false)} className="block w-full text-center px-4 py-2 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 transition">Sign Up</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
