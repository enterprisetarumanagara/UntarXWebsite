import { ReactNode } from "react";
import { motion } from "framer-motion";
export function FeatureCard({
  icon,
  title,
  desc,
  iconBg = "bg-black/5",
}: {
  icon: ReactNode;
  title: string;
  desc: string;
  iconBg?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ type: "spring", stiffness: 200, damping: 20, duration: 0.4 }}
      className="w-full max-w-[276px] h-[319px] mx-auto flex flex-col items-center rounded-3xl border border-black/10 bg-white/70 backdrop-blur p-6 shadow-sm hover:shadow-md transition text-center"
    >
      <div className="h-[80px] flex items-center justify-center">
        <div
          className={`flex items-center justify-center size-12 rounded-full ${iconBg}`}
        >
          {icon}
        </div>
      </div>

      <h3 className="font-semibold text-lg text-gray-900 mt-2">{title}</h3>
      <p className="text-sm text-black/70 mt-2 leading-relaxed max-w-[240px]">
        {desc}
      </p>
    </motion.div>
  );
}
