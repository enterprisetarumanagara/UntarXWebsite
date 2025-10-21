"use client";
import Image from "next/image";
import { Zap } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/bgHero.png"
          alt="background"
          fill
          sizes="100vw"
          priority
          className="object-cover object-center"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut"
          }}
          viewport={{ once: true, amount: 0.6 }}
          className="pt-6 sm:pt-8 pb-3 sm:pb-4"
        >
          <div className="inline-flex items-center gap-3">
            <Image
              src="/UntarX.svg"
              alt="UntarX"
              width={150}
              height={40}
              priority
              className="h-9 sm:h-10 w-auto"
            />
          </div>
        </motion.div>

        <div className="grid items-center gap-10 md:gap-16 lg:gap-24 xl:gap-32 pb-12 sm:pb-16 lg:pb-24 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut"
              }}
              viewport={{ once: true, amount: 0.6 }}
              className="pt-6 sm:pt-8 pb-3 sm:pb-4"
            >
              <div className="mb-5 sm:mb-6 inline-flex items-center rounded-full border border-black/10 bg-white/70 px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-gray-800 shadow-sm backdrop-blur">
                <span className="mr-2 inline-flex size-5 items-center justify-center rounded-full">
                  <Zap className="h-3.5 w-3.5 text-black" />
                </span>
                Exclusively for Tarumanagara
              </div>
            </motion.div>
            <h1 className="text-balance font-black leading-[0.98] tracking-tight text-gray-900">
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="block text-4xl sm:text-5xl md:text-6xl"
              >
                Supercharge
              </motion.span>

              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                className="mt-2 block text-xl sm:text-2xl md:text-3xl lg:text-6xl font-medium text-gray-800"
              >
                Your Campus Life
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut"
              }}
              viewport={{ once: true, amount: 0.6 }}
              className="mt-5 sm:mt-6 max-w-prose sm:max-w-lg md:max-w-xl text-sm sm:text-base md:text-lg text-black/70 leading-relaxed text-justify"
            >
              The all-in-one app for Untar students. Connect with peers,
              manage your schedule, and access exclusive resources to thrive
              in your university journey.
            </motion.p>


            <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
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
                    className="w-[100px] sm:w-[220px] md:w-[190px] h-auto transition-transform duration-300 hover:scale-105"
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
                    width={200}
                    height={90}
                    className="w-[100px] sm:w-[220px] md:w-[200px] h-auto transition-transform duration-300 hover:scale-105"
                    priority={false}
                  />
                </Link>
              </motion.div>
            </div>
          </div>

          <div className="order-1 flex justify-center lg:order-2">
            <div className="relative">
              <div className="absolute -inset-6 md:-inset-8 -z-10 rounded-[2.5rem] bg-black/5 blur-2xl" />
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut"
                }}
                viewport={{ once: true, amount: 0.6 }}
                className="pt-6 sm:pt-8 pb-3 sm:pb-4"
              >
                <Image
                  src="/iphoneview.png"
                  alt="UntarX app preview"
                  width={520}
                  height={1040}
                  priority
                  className="h-auto w-[68%] min-w-[220px] max-w-[340px] sm:max-w-[360px] md:max-w-[400px] lg:max-w-[360px] lg:rotate-[14deg] rounded-[2.4rem] shadow-[0_28px_56px_rgba(0,0,0,0.22)]"
                />
              </motion.div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
