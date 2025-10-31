"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { Section } from "@/components/Section";
import { Title } from "@/components/Title";
import { FeatureCard } from "@/components/FeatureCard";
import Footer from "@/components/Footer";
import { StoreBadges } from "@/components/StoreBadges";
import Image from "next/image";
import AnimatedVideo from "@/components/AnimatedVideo";
import { motion } from "framer-motion";


export default function Page() {
  return (
    <main className="min-h-dvh bg-white text-black">
      <Hero />
      <Navbar />


      <div className="h-[2px] w-full opacity-50 rounded-full bg-[linear-gradient(to_right,#57668D,#693233)]" />
      <div className=" relative min-h-screen flex flex-col justify-center bg-[url('/bgMovie.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-white/40 -z-0" />


        <Section>
          <div className="relative mt-20 z-10 mx-auto max-w-5xl text-center">
            <Title title="Everything, Gamified." />
            <div className="mt-12 rounded-[2rem] border border-black/10 shadow-lg mx-auto max-w-4xl">
              <video
                src="/UntarXMovie.mp4"
                className="w-full h-[300px] sm:h-[400px] md:h-[480px] lg:h-[544px] lg:w-[1011px] object-cover mx-auto"
                controls
                playsInline
                autoPlay
                muted
                loop
                poster="/video-thumb.png"
              />
            </div>
            <p className="mt-4 mb-20 text-xl text-black/70 max-w-[600px] mx-auto text-center leading-relaxed">
              We&apos;re not just another app. UntarX is built from the ground up with
              the specific needs of Universitas Tarumanagara students in mind.
            </p>
          </div>
        </Section>
      </div>

      <div className="h-[2px] w-full opacity-50 rounded-full bg-[linear-gradient(to_right,#57668D,#693233)]" />

      <Section id="features" className="py-20 text-center">
        <h2 className="text-5xl font-medium text-black">One App</h2>
        <p className="mt-3 text-5xl font-extrabold text-black">Endless Possibilities</p>

        <div className="mt-6 mb-10">
          <Image
            src="/FiturAdd.svg"
            alt=""
            aria-hidden
            width={1020}
            height={24}
            className="mx-auto h-auto w-full max-w-[2000px] select-none pointer-events-none z-0"
            priority={false}
          />
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            icon={<Image src="/CouponLogo.svg" alt="Student Deals" width={20} height={20} />}
            title="Student Deals"
            desc="Discover exclusive discounts, promotions, and special offers for Untar students from various merchants."
            iconBg="bg-[#FFB26B]"
          />

          <FeatureCard
            icon={<Image src="EventLogo.svg" alt="Campus Events" width={20} height={20} />}
            title="Campus Events"
            desc="Stay updated on seminars, competitions, and social activities happening around the Untar campus."
            iconBg="bg-[#4DD4E0]"
          />

          <FeatureCard
            icon={<Image src="/MentalLogo.svg" alt="Mental Health" width={20} height={20} />}
            title="Mental Health"
            desc="Access resources, counseling, and mental wellness tips to support your campus life and well-being."
            iconBg="bg-[#B9E87E]"
          />

          <FeatureCard
            icon={<Image src="/PointsLogo.svg" alt="Career Opportunities" width={20} height={20} />}
            title="Career Opportunities"
            desc="Get notified about internships, job vacancies, and career fairs exclusively for Untar students."
            iconBg="bg-[#F8A9E4]"
          />
        </div>
      </Section>

      <div className="mt">
        <Image
          src="/bgFeature.svg"
          alt=""
          aria-hidden
          width={1020}
          height={24}
          className="mx-auto h-auto w-full max-w-[2000px] select-none pointer-events-none z-0"
          priority={false}
        />
      </div>

      <div className="h-[2px] w-full opacity-50 rounded-full bg-[linear-gradient(to_right,#57668D,#693233)]" />

      <div className=" relative min-h-screen flex flex-col justify-center bg-[url('/bgWhy.png')] bg-cover bg-center">
        <Section id="why" className="relative text-center py-2 sm:py-16">
          <h2 className="text-4xl sm:text-5xl font-medium text-black">UntarX</h2>
          <p className="mt-2 text-3xl sm:text-5xl font-extrabold text-black">Built For You</p>

          <p className="mt-3 mb-8 text-lg sm:text-xl text-black/70 max-w-[600px] mx-auto leading-relaxed">
            We&apos;re not just another app. UntarX is built from the grounnd up with
            the specific needs of Universitas Tarumanagara students in mind.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3 sm:gap-8">
            <FeatureCard 
              icon={<Image src="/SecureLogo.svg" alt="Career Opportunities" width={30} height={20} style={{ transform: 'translateY(4px)'}} />}
              title="Exclusive and Secure"
              desc="Verified student-only access ensures a safe and relevant community environment."
              iconBg="bg-[#4DD4E0]"
            />
            <FeatureCard
              icon={<Image src="/ZapLogo.svg" alt="Career Opportunities" width={30} height={30} style={{ transform: 'translateY(4px)'}} />}
              title="Always Up-to-Date"
              desc="Real-time updates from faculties and student organizations, so you never miss an important announcement."
              iconBg="bg-[#FFB26B]"
            />
          </div>
        </Section>
      </div>

      <div className="h-[2px] w-full opacity-50 rounded-full bg-[linear-gradient(to_right,#57668D,#693233)]" />

      <div className=" relative w-full h-[400px] flex flex-col justify-center bg-[url('/bgWhy.png')] bg-cover bg-center">
        <div id="download" className="relative">
          <div className="absolute inset-0 -z-10">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(173,216,230,0.3),rgba(255,228,225,0.3),rgba(187,255,232,0.3))]" />
          </div>

       <Section>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              Ready to get Started?
            </h2>
            <p className="text-3xl sm:text-4xl font-black mt-1">
              Download UntarX Now
            </p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.6 }}
              className="mt-8 justify-center"
            >
              <StoreBadges className="justify-center" />
            </motion.div>
          </motion.div>
        </Section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
