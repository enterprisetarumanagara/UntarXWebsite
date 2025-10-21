import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">

        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full">
          <Image src="/untarxlogo.svg" alt="UntarX" width={28} height={28} />
          <span className="font-semibold text-base">UntarX</span>
        </div>

        <div className="mt-8 flex flex-col items-start space-y-2 text-sm text-white/80">
          <Link href="#features" className="hover:text-white transition">Features</Link>
          <Link href="#why" className="hover:text-white transition">Why UntarX</Link>
          <Link href="#download" className="hover:text-white transition">Download</Link>
          <Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link>
        </div>

        <p className="mt-10 text-xs text-white/60">
          © 2025 UntarX Development Team
        </p>
      </div>
    </footer>
  );
}
