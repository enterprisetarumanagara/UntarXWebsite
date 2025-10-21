import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export function StoreBadges({ className = "" }: { className?: string }) {
  return (
    <div className="mt-6 sm:mt-8 flex flex-wrap justify-center items-center gap-3 sm:gap-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.05 }}
      >
        <Link
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/AppStore.png"
            alt="Download on the App Store"
            width={220}
            height={90}
            className="w-[200px] sm:w-[220px] md:w-[240px] h-auto transition-transform duration-300 hover:scale-105"
            priority={false}
          />
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
      >
        <Link
          href="https://play.google.com/store/apps/details?id=com.tarumanagaraenterprise.untarx"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/GooglePlay.png"
            alt="Get it on Google Play"
            width={250}
            height={90}
            className="w-[200px] sm:w-[220px] md:w-[250px] h-auto transition-transform duration-300 hover:scale-105"
            priority={false}
          />
        </Link>
      </motion.div>
    </div>

  );
}
