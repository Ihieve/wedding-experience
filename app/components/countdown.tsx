
"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const weddingDate = new Date("2026-12-23T00:00:00");

function getTimeLeft() {
  const difference = weddingDate.getTime() - new Date().getTime();

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

function TimeBox({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex h-[72px] w-[72px] items-center justify-center border border-[#C9A227]/40 bg-[#FFFDF8] shadow-[0_8px_25px_rgba(74,44,36,0.06)] sm:h-20 sm:w-20">
        <span className="font-serif text-2xl text-[#4A2C24] sm:text-3xl">
          {String(value).padStart(2, "0")}
        </span>
      </div>

      <span className="mt-3 text-[8px] uppercase tracking-[0.25em] text-[#4A2C24]/50">
        {label}
      </span>
    </div>
  );
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#E8D8C3] px-5 py-20 sm:px-8 sm:py-24">
      {/* Decorative elements */}
      <div className="pointer-events-none absolute inset-0">
        {/* Top gold line */}
        <div className="absolute left-1/2 top-0 h-16 w-px -translate-x-1/2 bg-[#C9A227]/40" />

        {/* Bottom gold line */}
        <div className="absolute bottom-0 left-1/2 h-16 w-px -translate-x-1/2 bg-[#C9A227]/40" />

        {/* Corners */}
        <div className="absolute left-4 top-4 h-16 w-16 border-l border-t border-[#C9A227]/25 sm:left-8 sm:top-8 sm:h-24 sm:w-24" />

        <div className="absolute right-4 top-4 h-16 w-16 border-r border-t border-[#C9A227]/25 sm:right-8 sm:top-8 sm:h-24 sm:w-24" />

        <div className="absolute bottom-4 left-4 h-16 w-16 border-b border-l border-[#C9A227]/25 sm:bottom-8 sm:left-8 sm:h-24 sm:w-24" />

        <div className="absolute bottom-4 right-4 h-16 w-16 border-b border-r border-[#C9A227]/25 sm:bottom-8 sm:right-8 sm:h-24 sm:w-24" />

        {/* Stars */}
        <span className="absolute left-[12%] top-[30%] text-sm text-[#C9A227]/50">
          ✦
        </span>

        <span className="absolute right-[12%] bottom-[30%] text-sm text-[#0F6B5B]/40">
          ✦
        </span>
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-xl text-center">
        {/* Small heading */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[9px] uppercase tracking-[0.45em] text-[#0F6B5B] sm:text-[10px]"
        >
          The big day
        </motion.p>

        {/* Date */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-5 font-serif text-3xl text-[#4A2C24] sm:text-4xl"
        >
          23 December 2026
        </motion.h2>

        {/* Gold divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mx-auto my-6 h-px w-16 bg-[#C9A227]"
        />

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="flex justify-center gap-2 sm:gap-4"
        >
          <TimeBox value={timeLeft.days} label="Days" />

          <TimeBox value={timeLeft.hours} label="Hours" />

          <TimeBox value={timeLeft.minutes} label="Minutes" />

          <TimeBox value={timeLeft.seconds} label="Seconds" />
        </motion.div>

        {/* Message */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="mt-10 font-serif text-lg italic text-[#4A2C24]/65 sm:text-xl"
        >
          Until we say "I do"
        </motion.p>

        {/* Decorative symbol */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="mt-6 text-sm text-[#C9A227]"
        >
          ✦
        </motion.div>
      </div>
    </section>
  );
}
