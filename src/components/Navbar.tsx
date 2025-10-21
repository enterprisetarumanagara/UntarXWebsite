"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link 
          href="/" 
          className="flex items-center gap-2">
          <Image 
            src="/UntarX.svg" 
            alt="UntarX" 
            width={110} 
            height={90} />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <Link 
            href="#features" 
            className="hover:opacity-80">Features
          </Link>

          <Link 
            href="#why" 
            className="hover:opacity-80">Why UntarX
          </Link>

          <Link 
            href="#download" 
            className="hover:opacity-80">Download
          </Link>

          <Link 
            href="/privacy-policy" 
            className="hover:opacity-80">Privacy Policy
          </Link>
        </nav>

        <Link
          href="https://play.google.com/store/apps/details?id=com.tarumanagaraenterprise.untarx"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-black text-white text-sm shadow-sm hover:-translate-y-0.5 transition"
        >
          <span>Get App</span>
        </Link>
      </div>
    </header>
  );
}
