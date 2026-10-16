"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Countdown from "./components/countdown";
import WeddingCamera from "./components/WeddingCamera";
import WeddingGallery from "./components/WeddingGallery";
import Guestbook from "./components/Guestbook";

export default function Home() {
  const [isOpening, setIsOpening] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  const openInvitation = () => {
    if (isOpening) return;

    setIsOpening(true);

    setTimeout(() => {
      setIsOpened(true);
    }, 2300);
  };

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#FFFDF8] text-[#4B2E20]">
      {/* Slow, elegant animated background in the wedding palette */}
      <div aria-hidden="true" className="wedding-ambient-background pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="wedding-glow wedding-glow-emerald" />
        <div className="wedding-glow wedding-glow-gold" />
        <div className="wedding-glow wedding-glow-coffee" />
        <div className="wedding-orbit wedding-orbit-one" />
        <div className="wedding-orbit wedding-orbit-two" />
        <span className="wedding-spark wedding-spark-one">✦</span>
        <span className="wedding-spark wedding-spark-two">✧</span>
        <span className="wedding-spark wedding-spark-three">✦</span>
        <span className="wedding-spark wedding-spark-four">✧</span>
        <span className="wedding-spark wedding-spark-five">✦</span>
        <span className="wedding-spark wedding-spark-six">✧</span>
      </div>
      <div className="relative z-10">
      <AnimatePresence mode="wait">
        {!isOpened ? (
          /* =====================================================
             ENVELOPE
          ===================================================== */
          <motion.section
            key="envelope"
            exit={{
              opacity: 0,
              scale: 1.05,
              filter: "blur(8px)",
              transition: {
                duration: 0.8,
                ease: "easeInOut",
              },
            }}
            className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-8 sm:px-6"
          >
            {/* Decorative corners */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-4 top-4 h-20 w-20 border-l border-t border-[#C9A227]/40 sm:left-8 sm:top-8 sm:h-32 sm:w-32" />

              <div className="absolute right-4 top-4 h-20 w-20 border-r border-t border-[#C9A227]/40 sm:right-8 sm:top-8 sm:h-32 sm:w-32" />

              <div className="absolute bottom-4 left-4 h-20 w-20 border-b border-l border-[#C9A227]/40 sm:bottom-8 sm:left-8 sm:h-32 sm:w-32" />

              <div className="absolute bottom-4 right-4 h-20 w-20 border-b border-r border-[#C9A227]/40 sm:bottom-8 sm:right-8 sm:h-32 sm:w-32" />

              {/* Center lines */}
              <div className="absolute left-1/2 top-0 h-12 w-px -translate-x-1/2 bg-[#C9A227]/30 sm:h-20" />

              <div className="absolute bottom-0 left-1/2 h-12 w-px -translate-x-1/2 bg-[#C9A227]/30 sm:h-20" />

              {/* Stars */}
              <span className="absolute left-[10%] top-[25%] text-xs text-[#C9A227]/50 sm:text-base">
                ✦
              </span>

              <span className="absolute right-[10%] top-[70%] text-xs text-[#064E3B]/40 sm:text-base">
                ✦
              </span>
            </div>

            {/* Main content */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="relative w-full max-w-[520px]"
            >
              {/* Ring */}
              <motion.div
                animate={
                  isOpening
                    ? {
                        opacity: 0,
                        scale: 0.7,
                        y: -15,
                      }
                    : {
                        y: [0, -4, 0],
                      }
                }
                transition={
                  isOpening
                    ? { duration: 0.35 }
                    : {
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }
                }
                className="mb-5 flex justify-center sm:mb-7"
              >
                <div className="relative flex h-14 w-14 items-center justify-center sm:h-16 sm:w-16">
                  <svg
                    viewBox="0 0 64 64"
                    className="h-12 w-12 text-[#C9A227] sm:h-14 sm:w-14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="32"
                      cy="36"
                      r="15"
                      stroke="currentColor"
                      strokeWidth="3"
                    />

                    <path
                      d="M24 21L28 14H36L40 21L32 29L24 21Z"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinejoin="round"
                    />

                    <path
                      d="M28 14L32 29L36 14"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />

                    <path
                      d="M24 21H40"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>

                  <motion.span
                    animate={{
                      opacity: [0.3, 1, 0.3],
                      scale: [0.8, 1.1, 0.8],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -right-1 top-0 text-xs text-[#C9A227] sm:text-sm"
                  >
                    ✦
                  </motion.span>
                </div>
              </motion.div>

              {/* Intro */}
              <motion.div
                animate={
                  isOpening
                    ? {
                        opacity: 0,
                        y: -15,
                      }
                    : {}
                }
                transition={{ duration: 0.3 }}
                className="mb-6 text-center sm:mb-8"
              >
                <p className="text-[9px] uppercase tracking-[0.4em] text-[#064E3B] sm:text-[10px] sm:tracking-[0.5em]">
                  You are invited
                </p>

                <p className="mt-2 font-serif text-xs italic text-[#4B2E20]/60 sm:mt-3 sm:text-sm">
                  A celebration of love awaits
                </p>
              </motion.div>

              {/* =================================================
                  ENVELOPE
              ================================================= */}
              <motion.button
                type="button"
                onClick={openInvitation}
                disabled={isOpening}
                aria-label="Open wedding invitation"
                className="relative mx-auto block h-[285px] w-full max-w-[390px] cursor-pointer outline-none sm:h-[330px] sm:max-w-[480px]"
              >
                {/* Invitation card */}
                <motion.div
                  initial={{
                    y: 0,
                    scale: 0.94,
                  }}
                  animate={
                    isOpening
                      ? {
                          y: -230,
                          scale: 1.03,
                          rotate: -1,
                        }
                      : {
                          y: [0, -3, 0],
                          scale: 0.94,
                        }
                  }
                  transition={
                    isOpening
                      ? {
                          duration: 1.6,
                          delay: 0.2,
                          ease: [0.22, 1, 0.36, 1],
                        }
                      : {
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }
                  }
                  className="absolute left-[6%] top-2 z-10 h-[250px] w-[88%] rounded-sm bg-[#FFFDF8] shadow-[0_15px_40px_rgba(74,44,36,0.18)] sm:h-[290px] sm:top-[10px] sm:left-[7%] sm:w-[86%]"
                >
                  <div className="absolute inset-2 border border-[#C9A227]/60 sm:inset-3" />

                  <div className="relative flex h-full flex-col items-center justify-center">
                    <p className="text-[7px] uppercase tracking-[0.3em] text-[#064E3B] sm:text-[8px] sm:tracking-[0.35em]">
                      The wedding of
                    </p>

                    <h2 className="mt-3 font-serif text-2xl text-[#4B2E20] sm:mt-4 sm:text-3xl">
                      Blessing Gabriel
                    </h2>

                    <span className="font-serif text-lg italic text-[#C9A227] sm:text-xl">
                      &
                    </span>

                    <h2 className="font-serif text-2xl text-[#4B2E20] sm:text-3xl">
                      Gideon Ihieve
                    </h2>

                    <div className="my-3 h-px w-12 bg-[#C9A227] sm:my-4 sm:w-14" />

                    <p className="text-[7px] uppercase tracking-[0.25em] text-[#4B2E20]/60 sm:text-[8px] sm:tracking-[0.3em]">
                      Wednesday, 23 December 2026
                    </p>

                    <p className="mt-2 font-serif text-[10px] italic text-[#064E3B] sm:mt-3 sm:text-xs">
                      Wedding Celebration
                    </p>
                  </div>
                </motion.div>

                {/* Envelope */}
                <motion.div
                  animate={
                    isOpening
                      ? {
                          scale: 0.96,
                          y: 25,
                        }
                      : {}
                  }
                  transition={{
                    duration: 1.2,
                    ease: "easeInOut",
                  }}
                  className="absolute bottom-0 left-0 z-20 h-[210px] w-full overflow-hidden rounded-sm bg-[#4B2E20] shadow-[0_25px_50px_rgba(74,44,36,0.35)] sm:h-[245px]"
                >
                  {/* Texture */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_30%)]" />

                  {/* Left fold */}
                  <div className="absolute bottom-0 left-0 h-full w-[70%] origin-bottom-left -skew-y-[32deg] bg-[#3A2118]" />

                  {/* Right fold */}
                  <div className="absolute bottom-0 right-0 h-full w-[70%] origin-bottom-right skew-y-[32deg] bg-[#3A2118]" />

                  {/* Seal */}
                  <motion.div
                    animate={
                      isOpening
                        ? {
                            opacity: 0,
                            scale: 0.5,
                            y: 15,
                          }
                        : {}
                    }
                    transition={{ duration: 0.35 }}
                    className="absolute left-1/2 top-[78px] z-50 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full border-4 border-[#B48B1E] bg-[#C9A227] shadow-[0_5px_15px_rgba(0,0,0,0.25)] sm:top-[92px] sm:h-[76px] sm:w-[76px]"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#FFF1B8]/70 sm:h-[58px] sm:w-[58px]">
                      <span className="font-serif text-lg text-[#4B2E20] sm:text-xl">
                        B
                      </span>

                      <span className="mx-1 text-[10px] text-[#4B2E20] sm:text-xs">
                        &
                      </span>

                      <span className="font-serif text-lg text-[#4B2E20] sm:text-xl">
                        G
                      </span>
                    </div>
                  </motion.div>

                  {/* Flap */}
                  <motion.div
                    initial={{ rotateX: 0 }}
                    animate={
                      isOpening
                        ? {
                            rotateX: -180,
                          }
                        : {
                            rotateX: 0,
                          }
                    }
                    transition={{
                      duration: 1.1,
                      ease: [0.65, 0, 0.35, 1],
                    }}
                    style={{
                      transformOrigin: "top center",
                      transformStyle: "preserve-3d",
                    }}
                    className="absolute left-0 top-0 z-40 h-[125px] w-full sm:h-[145px]"
                  >
                    <div
                      className="absolute inset-0 bg-[#3A2118]"
                      style={{
                        clipPath:
                          "polygon(0 0, 100% 0, 50% 100%)",
                        backfaceVisibility: "hidden",
                      }}
                    />
                  </motion.div>

                  {/* Gold edge */}
                  <div className="absolute bottom-0 left-0 right-0 z-50 h-[3px] bg-[#C9A227]" />
                </motion.div>
              </motion.button>

              {/* Instruction */}
              <motion.div
                animate={
                  isOpening
                    ? {
                        opacity: 0,
                        y: 10,
                      }
                    : {}
                }
                transition={{ duration: 0.3 }}
                className="mt-7 text-center sm:mt-9"
              >
                <div className="flex items-center justify-center gap-2 sm:gap-4">
                  <span className="h-px w-8 bg-[#C9A227]/60 sm:w-12" />

                  <p className="text-[8px] font-medium uppercase tracking-[0.25em] text-[#4B2E20] sm:text-[10px] sm:tracking-[0.35em]">
                    Tap to open invitation
                  </p>

                  <span className="h-px w-8 bg-[#C9A227]/60 sm:w-12" />
                </div>

                <p className="mt-2 text-[8px] uppercase tracking-[0.15em] text-[#4B2E20]/40 sm:mt-3 sm:text-[9px] sm:tracking-[0.2em]">
                  Blessing Gabriel & Gideon Ihieve
                </p>
              </motion.div>
            </motion.div>
          </motion.section>
        ) : (
          /* =====================================================
             WEDDING WEBSITE
          ===================================================== */
          <motion.div
            key="invitation"
            initial={{
              opacity: 0,
              scale: 1.03,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
            }}
            className="relative min-h-screen bg-[#F8F0DF]"
          >
            {/* =================================================
                HERO
            ================================================= */}
            <section className="relative min-h-[100svh] overflow-hidden bg-[radial-gradient(ellipse_at_top,_rgba(201,162,39,0.12),_transparent_52%),linear-gradient(135deg,#fffaf0_0%,#f5ead5_55%,#fffdf8_100%)]">
              {/* Invitation-inspired double gold frame */}
              <div aria-hidden="true" className="pointer-events-none absolute inset-3 z-0 border border-[#C9A227]/45 sm:inset-5" />
              <div aria-hidden="true" className="pointer-events-none absolute inset-5 z-0 border border-[#4B2E20]/10 sm:inset-8" />
              <div aria-hidden="true" className="pointer-events-none absolute -left-16 top-20 h-44 w-44 rounded-full border border-[#064E3B]/15 sm:h-64 sm:w-64" />
              <div aria-hidden="true" className="pointer-events-none absolute -right-20 bottom-20 h-56 w-56 rounded-full border border-[#C9A227]/20 sm:h-80 sm:w-80" />
              {/* Decorations */}
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-4 top-4 h-24 w-24 border-l border-t border-[#C9A227]/30 sm:left-6 sm:top-6 sm:h-40 sm:w-40" />

                <div className="absolute right-4 top-4 h-24 w-24 border-r border-t border-[#C9A227]/30 sm:right-6 sm:top-6 sm:h-40 sm:w-40" />

                <div className="absolute bottom-4 left-4 h-24 w-24 border-b border-l border-[#C9A227]/30 sm:bottom-6 sm:left-6 sm:h-40 sm:w-40" />

                <div className="absolute bottom-4 right-4 h-24 w-24 border-b border-r border-[#C9A227]/30 sm:bottom-6 sm:right-6 sm:h-40 sm:w-40" />
              </div>

              <div className="relative flex min-h-[100svh] flex-col items-center justify-center px-5 text-center sm:px-6">
                {/* Ring */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.7 }}
                >
                  <svg
                    viewBox="0 0 64 64"
                    className="h-12 w-12 text-[#C9A227] sm:h-14 sm:w-14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="32"
                      cy="36"
                      r="15"
                      stroke="currentColor"
                      strokeWidth="3"
                    />

                    <path
                      d="M24 21L28 14H36L40 21L32 29L24 21Z"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.div>

                {/* Welcome */}
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="mt-6 text-[9px] uppercase tracking-[0.4em] text-[#064E3B] sm:mt-8 sm:text-[10px] sm:tracking-[0.5em]"
                >
                  Together with our families
                </motion.p>

                {/* Names */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="mt-5 max-w-4xl font-serif text-4xl leading-[1.1] text-[#4B2E20] sm:mt-7 sm:text-5xl md:text-7xl"
                >
                  Blessing Gabriel
                  <span className="mx-2 text-[#C9A227] sm:mx-3">
                    &
                  </span>
                  Gideon Ihieve
                </motion.h1>

                {/* SingOn */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="mt-5 font-serif text-lg italic text-[#064E3B] sm:mt-6 sm:text-xl"
                >
                  Wedding Celebration
                </motion.p>

                <p className="mt-4 max-w-lg text-[9px] uppercase leading-6 tracking-[0.16em] text-[#4B2E20]/65 sm:text-[10px] sm:tracking-[0.22em]">
                  Together with our families · Mr and Mrs Gabriel Joseph · Mr and Mrs Ihieve Sunday
                </p>

                {/* Divider */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.2, duration: 0.7 }}
                  className="my-6 h-px w-16 bg-[#C9A227] sm:my-8 sm:w-24"
                />

                {/* Date */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.3 }}
                  className="text-[9px] uppercase tracking-[0.3em] text-[#4B2E20]/60 sm:text-xs sm:tracking-[0.35em]"
                >
                  Wednesday, 23 December 2026
                </motion.p>

                {/* Message */}
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 }}
                  className="mt-7 max-w-xs font-serif text-base leading-7 text-[#4B2E20]/60 sm:mt-10 sm:max-w-md sm:text-lg sm:leading-8"
                >
                  We have found our Blessing, and we are coming together as one. With grateful hearts and God’s grace, we invite you to share in this beautiful new beginning.
                </motion.p>

                {/* Scroll */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2 }}
                  className="absolute bottom-6 flex flex-col items-center sm:bottom-8"
                >
                  <span className="text-[7px] uppercase tracking-[0.35em] text-[#4B2E20]/40 sm:text-[8px] sm:tracking-[0.4em]">
                    Scroll to explore
                  </span>

                  <motion.span
                    animate={{ y: [0, 6, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                    }}
                    className="mt-2 text-[#C9A227] sm:mt-3"
                  >
                    ↓
                  </motion.span>
                </motion.div>
              </div>
            </section>

            {/* Official invitation — editorial layout inspired by the printed card */}
            <section
              id="invitation"
              className="invitation-showcase relative isolate overflow-hidden border-y border-[#C9A227]/35 px-5 py-16 sm:px-8 sm:py-24 lg:py-28"
            >
              {/* Rich layered color and ornamental details */}
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                <div className="invitation-wash invitation-wash-emerald" />
                <div className="invitation-wash invitation-wash-gold" />
                <div className="invitation-wash invitation-wash-coffee" />
                <div className="invitation-ornament invitation-ornament-left" />
                <div className="invitation-ornament invitation-ornament-right" />
                <span className="invitation-star invitation-star-one">✦</span>
                <span className="invitation-star invitation-star-two">✧</span>
                <span className="invitation-star invitation-star-three">✦</span>
                <span className="invitation-star invitation-star-four">✧</span>
                <span className="invitation-petal invitation-petal-one" />
                <span className="invitation-petal invitation-petal-two" />
                <span className="invitation-petal invitation-petal-three" />
              </div>

              <div className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
                {/* Welcome copy */}
                <motion.div
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.75, ease: "easeOut" }}
                  className="relative mx-auto max-w-xl text-center lg:mx-0 lg:text-left"
                >
                  <div className="mb-5 flex items-center justify-center gap-3 lg:justify-start">
                    <span className="h-px w-8 bg-[#C9A227]" />
                    <p className="text-[9px] font-medium uppercase tracking-[0.38em] text-[#064E3B] sm:text-[10px]">The official invitation</p>
                    <span className="h-px w-8 bg-[#C9A227] lg:hidden" />
                  </div>

                  <h2 className="font-serif text-4xl leading-tight text-[#4B2E20] sm:text-5xl lg:text-6xl">
                    A day to <span className="invitation-script text-[#A87520]">remember</span>
                  </h2>
                  <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-[#4B2E20]/75 sm:text-base sm:leading-8 lg:mx-0">
                    Two hearts, one beautiful journey, and a lifetime of love ahead. With grateful hearts and God’s grace, we invite you to celebrate the beginning of our forever.
                  </p>

                  <div className="mx-auto my-7 flex max-w-xs items-center justify-center gap-3 lg:mx-0 lg:justify-start">
                    <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#C9A227]/80 to-[#C9A227]" />
                    <span className="text-lg text-[#A87520]">❦</span>
                    <span className="h-px flex-1 bg-gradient-to-l from-transparent via-[#C9A227]/80 to-[#C9A227]" />
                  </div>

                  <p className="font-serif text-xl italic text-[#4B2E20] sm:text-2xl">Blessing & Gideon</p>
                  <p className="mt-2 text-[9px] uppercase tracking-[0.28em] text-[#064E3B] sm:text-[10px]">Wednesday · 23 December 2026 · Abuja, Nigeria</p>

                  <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
                    <a
                      href="/Blessing%20%26%20Gideon.pdf"
                      download
                      className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-sm border border-[#4B2E20] bg-[#4B2E20] px-6 py-3 text-[9px] font-medium uppercase tracking-[0.22em] text-[#FFFDF8] shadow-[0_8px_22px_rgba(75,46,32,0.16)] transition duration-300 hover:-translate-y-0.5 hover:border-[#064E3B] hover:bg-[#064E3B] sm:w-auto"
                    >
                      <span aria-hidden="true">↓</span> Download invitation PDF
                    </a>
                    <a
                      href="#wedding-details"
                      className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-sm border border-[#C9A227]/80 bg-[#FFFDF8]/65 px-6 py-3 text-[9px] font-medium uppercase tracking-[0.22em] text-[#4B2E20] transition duration-300 hover:bg-[#C9A227]/15 sm:w-auto"
                    >
                      Explore the day <span aria-hidden="true">↗</span>
                    </a>
                  </div>

                  <div className="mt-9 border-t border-[#C9A227]/35 pt-5">
                    <p className="text-[9px] uppercase tracking-[0.3em] text-[#4B2E20]/70">The colors of our celebration</p>
                    <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 lg:justify-start">
                      {[{ name: "White", color: "#FFFDF8" }, { name: "Emerald", color: "#064E3B" }, { name: "Gold", color: "#C9A227" }, { name: "Coffee", color: "#4B2E20" }].map((shade) => (
                        <div key={shade.name} className="flex items-center gap-2">
                          <span title={shade.name} className="h-5 w-5 rounded-full border border-[#4B2E20]/20 shadow-sm" style={{ backgroundColor: shade.color }} />
                          <span className="text-[9px] tracking-wide text-[#4B2E20]/75">{shade.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Invitation artwork */}
                <motion.div
                  initial={{ opacity: 0, y: 28, rotate: 1.2 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                  className="relative mx-auto w-full max-w-[430px] lg:max-w-[470px]"
                >
                  <div aria-hidden="true" className="absolute -inset-3 rounded-[3px] border border-[#C9A227]/45 bg-[#C9A227]/10 sm:-inset-4" />
                  <div aria-hidden="true" className="absolute -inset-6 rounded-[4px] border border-[#064E3B]/20" />
                  <div className="invitation-card-frame relative rounded-[2px] border border-[#C9A227] bg-[#FFFDF8] p-2 shadow-[0_28px_75px_rgba(57,34,23,0.25)] sm:p-3">
                    <img
                      src="/Blessing%20%26%20Gideon.jpeg"
                      alt="Official wedding invitation for Blessing Gabriel and Gideon Ihieve, Wednesday 23 December 2026"
                      className="h-auto w-full"
                    />
                    <div aria-hidden="true" className="pointer-events-none absolute inset-2 border border-[#C9A227]/35 sm:inset-3" />
                  </div>
                  <p className="mt-5 text-center text-[9px] uppercase tracking-[0.28em] text-[#4B2E20]/65">A keepsake for our special day</p>
                </motion.div>
              </div>
            </section>

            {/* Countdown */}
            <Countdown />
            
{/* =====================================================
    OUR STORY — COMING SOON
===================================================== */}
<section id="wedding-details" className="relative overflow-hidden bg-[#FFFDF8] px-6 py-24">
  {/* Decorative background */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute left-0 top-16 h-32 w-32 rounded-full border border-[#C9A227]/20" />

    <div className="absolute -right-10 bottom-10 h-40 w-40 rounded-full border border-[#064E3B]/10" />

    <span className="absolute left-[12%] top-[30%] text-sm text-[#C9A227]/40">
      ✦
    </span>

    <span className="absolute right-[15%] bottom-[25%] text-sm text-[#064E3B]/30">
      ✦
    </span>
  </div>

  <div className="relative mx-auto flex max-w-xl flex-col items-center text-center">
    {/* Ring */}
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="flex h-16 w-16 items-center justify-center rounded-full border border-[#C9A227]/40"
    >
      <svg
        viewBox="0 0 64 64"
        className="h-9 w-9 text-[#C9A227]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="32"
          cy="36"
          r="15"
          stroke="currentColor"
          strokeWidth="3"
        />

        <path
          d="M24 21L28 14H36L40 21L32 29L24 21Z"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        <path
          d="M28 14L32 29L36 14"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    </motion.div>

    {/* Section label */}
    <motion.p
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.15, duration: 0.6 }}
      className="mt-7 text-[9px] uppercase tracking-[0.45em] text-[#064E3B]"
    >
      Our Story
    </motion.p>

    {/* Coming Soon */}
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 0.7 }}
      className="mt-4 font-serif text-4xl text-[#4B2E20] sm:text-5xl"
    >
      Coming Soon
    </motion.h2>

    {/* Gold divider */}
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.45, duration: 0.7 }}
      className="my-7 h-px w-16 bg-[#C9A227]"
    />

    {/* Description */}
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.6, duration: 0.7 }}
      className="max-w-md font-serif text-lg leading-8 text-[#4B2E20]/60"
    >
      Every love story has a beginning, a thousand little moments,
      and a beautiful chapter still being written.
    </motion.p>

    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.8, duration: 0.7 }}
      className="mt-5 text-[10px] uppercase tracking-[0.3em] text-[#4B2E20]/40"
    >
      Our story will be revealed here
    </motion.p>

    {/* Decorative hearts */}
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 1, duration: 0.6 }}
      className="mt-10 flex items-center gap-4 text-[#C9A227]"
    >
      <span className="h-px w-10 bg-[#C9A227]/40" />

      <span className="text-sm">♥</span>

      <span className="h-px w-10 bg-[#C9A227]/40" />
    </motion.div>
  </div>
</section>


{/* =====================================================
    WEDDING DAY SCHEDULE
===================================================== */}
<section className="relative overflow-hidden bg-[#FFFDF8] px-5 py-24">
  {/* Decorative background */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute left-0 top-20 h-40 w-40 rounded-full border border-[#C9A227]/20" />

    <div className="absolute -right-16 bottom-20 h-48 w-48 rounded-full border border-[#064E3B]/10" />

    <div className="absolute left-[15%] top-[18%] text-[#C9A227]/40">
      ✦
    </div>

    <div className="absolute right-[15%] bottom-[25%] text-[#064E3B]/30">
      ✦
    </div>
  </div>

  <div className="relative mx-auto max-w-xl">
    {/* Section heading */}
    <div className="text-center">
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-[9px] uppercase tracking-[0.45em] text-[#064E3B]"
      >
        Save the moments
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15, duration: 0.6 }}
        className="mt-4 font-serif text-4xl text-[#4B2E20] sm:text-5xl"
      >
        Wedding Day
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-2 font-serif text-lg italic text-[#064E3B]"
      >
        Wednesday, 23 December 2026
      </motion.p>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="mx-auto my-7 h-px w-16 bg-[#C9A227]"
      />
    </div>

    {/* Wedding day schedule */}
    <div className="relative mt-12 space-y-5">
      <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex gap-5 rounded-sm border border-[#C9A227]/25 bg-[#FFFDF8] p-5 shadow-[0_10px_30px_rgba(75,46,32,0.06)] sm:p-6">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#C9A227] text-xl text-[#C9A227]">♡</div>
        <div className="min-w-0 flex-1">
          <p className="text-[9px] uppercase tracking-[0.3em] text-[#064E3B]">9:00 AM</p>
          <h3 className="mt-2 font-serif text-xl text-[#4B2E20]">Church Service</h3>
          <p className="mt-2 text-sm leading-6 text-[#4B2E20]/65">RCCG Aroma of Christ Parish, Behind Acropolis Park, APO Resettlement, APO, Abuja.</p>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.15, duration: 0.6 }} className="flex gap-5 rounded-sm border border-[#C9A227]/25 bg-[#FFFDF8] p-5 shadow-[0_10px_30px_rgba(75,46,32,0.06)] sm:p-6">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#C9A227] text-xl text-[#C9A227]">♩</div>
        <div className="min-w-0 flex-1">
          <p className="text-[9px] uppercase tracking-[0.3em] text-[#064E3B]">Immediately after the church service</p>
          <h3 className="mt-2 font-serif text-xl text-[#4B2E20]">Reception</h3>
          <p className="mt-2 text-sm leading-6 text-[#4B2E20]/65">Hotel De Bently, 892 Ngozi Okonjo-Iweala Way, Utako, Abuja.</p>
        </div>
      </motion.div>
    </div>

    {/* Footer message */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.6, duration: 0.7 }}
      className="mt-14 text-center"
    >
      <span className="text-[#C9A227]">✦</span>

      <p className="mt-4 font-serif text-base italic text-[#4B2E20]/60">
        Come ready to celebrate, laugh, dance and make memories with us.
      </p>
    </motion.div>
  </div>
</section>


{/* =====================================================
    VENUE & LOCATION
===================================================== */}
<section className="relative overflow-hidden bg-[#FFFDF8] px-5 py-24">
  {/* Decorative background */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute -left-20 top-20 h-48 w-48 rounded-full border border-[#C9A227]/15" />

    <div className="absolute -right-20 bottom-20 h-48 w-48 rounded-full border border-[#064E3B]/10" />

    <span className="absolute left-[12%] top-[25%] text-sm text-[#C9A227]/40">
      ✦
    </span>

    <span className="absolute right-[15%] bottom-[30%] text-sm text-[#064E3B]/30">
      ✦
    </span>
  </div>

  <div className="relative mx-auto max-w-xl">
    {/* Heading */}
    <div className="text-center">
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-[9px] uppercase tracking-[0.45em] text-[#064E3B]"
      >
        Find us here
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15, duration: 0.6 }}
        className="mt-4 font-serif text-4xl text-[#4B2E20] sm:text-5xl"
      >
        The Venue
      </motion.h2>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="mx-auto my-7 h-px w-16 bg-[#C9A227]"
      />
    </div>

    {/* Venue card */}
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4, duration: 0.7 }}
      className="overflow-hidden rounded-sm border border-[#C9A227]/20 bg-[#FFFDF8] shadow-[0_20px_50px_rgba(74,44,36,0.10)]"
    >
      {/* Map visual */}
      <div className="relative h-[230px] overflow-hidden bg-[#D8C5AB]">
        {/* Abstract map roads */}
        <div className="absolute left-[-10%] top-[48%] h-[2px] w-[120%] rotate-[18deg] bg-[#FFFDF8]/80" />

        <div className="absolute left-[20%] top-[-20%] h-[140%] w-[2px] rotate-[32deg] bg-[#FFFDF8]/70" />

        <div className="absolute left-[60%] top-[-20%] h-[140%] w-[3px] rotate-[-25deg] bg-[#FFFDF8]/80" />

        <div className="absolute left-[-10%] top-[25%] h-[1px] w-[120%] rotate-[-8deg] bg-[#C9A227]/30" />

        <div className="absolute left-[10%] top-[70%] h-[1px] w-[100%] rotate-[12deg] bg-[#C9A227]/30" />

        {/* Location pin */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 10 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
        >
          <motion.div
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex h-14 w-14 items-center justify-center rounded-full border-4 border-[#FFFDF8] bg-[#4B2E20] shadow-[0_8px_20px_rgba(74,44,36,0.3)]"
          >
            <span className="text-xl text-[#C9A227]">♥</span>
          </motion.div>

          <div className="mt-2 h-2 w-2 rounded-full bg-[#4B2E20]/30 blur-sm" />
        </motion.div>

        {/* Map label */}
        <div className="absolute left-4 top-4 rounded-full border border-[#FFFDF8]/60 bg-[#FFFDF8]/80 px-3 py-1.5 backdrop-blur-sm">
          <span className="text-[8px] uppercase tracking-[0.2em] text-[#4B2E20]">
            APO & Utako, Abuja
          </span>
        </div>
      </div>

      {/* Venue information */}
      <div className="p-6 text-center sm:p-8">
        <p className="text-[9px] uppercase tracking-[0.35em] text-[#064E3B]">
          Church Service & Reception
        </p>

        <h3 className="mt-3 font-serif text-2xl text-[#4B2E20] sm:text-3xl">
          Two Locations · One Celebration
        </h3>

        <div className="mx-auto my-5 h-px w-12 bg-[#C9A227]" />

        {/* Address */}
        <div className="mx-auto flex max-w-sm items-start justify-center gap-3 text-left">
          <span className="mt-1 text-[#C9A227]">⌖</span>

          <p className="text-sm leading-6 text-[#4B2E20]/65">
            <strong>Church:</strong> RCCG Aroma of Christ Parish, Behind Acropolis Park, APO Resettlement, APO, Abuja.
            <br /><br />
            <strong>Reception:</strong> Hotel De Bently, 892 Ngozi Okonjo-Iweala Way, Utako, Abuja.
          </p>
        </div>

        {/* Directions button */}
        <a
          href="https://www.google.com/maps/search/?api=1&query=Hotel+De+Bently%2C+892+Ngozi+Okonjo-Iweala+Way%2C+Utako%2C+Abuja"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-sm bg-[#4B2E20] px-6 py-4 text-[10px] font-medium uppercase tracking-[0.25em] text-[#FFFDF8] transition-all duration-300 hover:bg-[#064E3B] sm:w-auto"
        >
          <span>⌖</span>
          Reception Directions
        </a>
        <a
          href="https://www.google.com/maps/search/?api=1&query=RCCG+Aroma+of+Christ+Parish%2C+Behind+Acropolis+Park%2C+APO+Resettlement%2C+Abuja"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex w-full items-center justify-center gap-3 rounded-sm border border-[#4B2E20]/20 bg-[#FFFDF8] px-6 py-4 text-[10px] font-medium uppercase tracking-[0.25em] text-[#4B2E20] transition-all duration-300 hover:border-[#064E3B] hover:text-[#064E3B] sm:ml-3 sm:mt-7 sm:w-auto"
        >
          <span>⌖</span>
          Church Directions
        </a>
      </div>
    </motion.div>

    {/* Small note */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.8, duration: 0.6 }}
      className="mt-8 text-center"
    >
      <span className="text-[#C9A227]">✦</span>

      <p className="mx-auto mt-3 max-w-sm font-serif text-sm italic leading-6 text-[#4B2E20]/55">
        We can't wait to celebrate this beautiful day with you.
      </p>
    </motion.div>
  </div>
</section>

{/* =====================================================
    WEDDING COLORS
===================================================== */}
<section className="relative overflow-hidden bg-[#FFFDF8] px-5 py-24">
  {/* Decorative background */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute -left-16 top-20 h-40 w-40 rounded-full border border-[#C9A227]/20" />

    <div className="absolute -right-16 bottom-20 h-40 w-40 rounded-full border border-[#064E3B]/10" />

    <span className="absolute left-[15%] top-[30%] text-[#C9A227]/40">
      ✦
    </span>

    <span className="absolute right-[15%] bottom-[30%] text-[#064E3B]/30">
      ✦
    </span>
  </div>

  <div className="relative mx-auto max-w-xl text-center">
    {/* Heading */}
    <motion.p
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-[9px] uppercase tracking-[0.45em] text-[#064E3B]"
    >
      Our palette
    </motion.p>

    <motion.h2
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.15, duration: 0.6 }}
      className="mt-4 font-serif text-4xl text-[#4B2E20] sm:text-5xl"
    >
      Wedding Colors
    </motion.h2>

    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 0.7 }}
      className="mx-auto my-7 h-px w-16 bg-[#C9A227]"
    />

    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="font-serif text-lg italic text-[#4B2E20]/60"
    >
      A little touch of our colors
      <br />
      as we celebrate together.
    </motion.p>

    {/* Wedding day palette: only the four invitation colors */}
    <div className="mx-auto mt-12 grid max-w-md grid-cols-2 gap-4">
      {[
        { name: "White", hex: "#FFFFFF", color: "#FFFFFF", border: true },
        { name: "Emerald Green", hex: "#064E3B", color: "#064E3B" },
        { name: "Gold", hex: "#C9A227", color: "#C9A227" },
        { name: "Coffee Brown", hex: "#4B2E20", color: "#4B2E20" },
      ].map((color, index) => (
        <motion.div
          key={color.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 * index, duration: 0.5 }}
          className="overflow-hidden rounded-sm bg-white shadow-[0_10px_30px_rgba(75,46,32,0.08)]"
        >
          <div className={`h-24 ${color.border ? "border border-[#4B2E20]/10" : ""}`} style={{ backgroundColor: color.color }} />
          <div className="p-4">
            <p className="font-serif text-base text-[#4B2E20]">{color.name}</p>
            <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-[#4B2E20]/50">{color.hex}</p>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Bottom decoration */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 1.1, duration: 0.6 }}
      className="mt-12 flex items-center justify-center gap-4"
    >
      <span className="h-px w-10 bg-[#C9A227]/40" />

      <span className="text-sm text-[#C9A227]">✦</span>

      <span className="h-px w-10 bg-[#C9A227]/40" />
    </motion.div>
  </div>
</section>

{/* =====================================================
    #8 — WEDDING GALLERY
===================================================== */}
<section className="relative overflow-hidden bg-[#FFFDF8] px-5 py-24">
  {/* Decorative background */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute left-[-80px] top-24 h-48 w-48 rounded-full border border-[#C9A227]/15" />

    <div className="absolute right-[-80px] bottom-24 h-48 w-48 rounded-full border border-[#064E3B]/10" />

    <span className="absolute left-[10%] top-[20%] text-[#C9A227]/40">
      ✦
    </span>

    <span className="absolute right-[12%] top-[55%] text-[#064E3B]/30">
      ✦
    </span>
  </div>

  <div className="relative mx-auto max-w-xl">
    {/* Heading */}
    <div className="text-center">
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-[9px] uppercase tracking-[0.45em] text-[#064E3B]"
      >
        Moments of love
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15, duration: 0.6 }}
        className="mt-4 font-serif text-4xl text-[#4B2E20] sm:text-5xl"
      >
        Our Gallery
      </motion.h2>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="mx-auto my-7 h-px w-16 bg-[#C9A227]"
      />

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="font-serif text-lg italic leading-7 text-[#4B2E20]/60"
      >
        A few moments from our journey
        <br />
        to forever.
      </motion.p>
    </div>

    {/* Photo Grid */}
    <div className="mt-12 grid grid-cols-2 gap-3">
      {/* Large image */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative col-span-2 h-[300px] overflow-hidden rounded-sm bg-[#FFFDF8]"
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <span className="text-3xl text-[#C9A227]">♡</span>

          <p className="mt-3 text-[9px] uppercase tracking-[0.3em] text-[#4B2E20]/40">
            Our photo
          </p>
        </div>

        {/* Replace this div with Image when photos are available */}
      </motion.div>

      {/* Small image 1 */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15, duration: 0.6 }}
        className="relative h-[210px] overflow-hidden rounded-sm bg-[#FFFDF8]"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl text-[#C9A227]/70">✦</span>
        </div>
      </motion.div>

      {/* Small image 2 */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.25, duration: 0.6 }}
        className="relative h-[210px] overflow-hidden rounded-sm bg-[#4B2E20]"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-serif text-3xl text-[#C9A227]">
            B & G
          </span>
        </div>
      </motion.div>
    </div>

    {/* =================================================
        #9 — GUEST MEMORIES
    ================================================= */}
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4, duration: 0.7 }}
      className="mt-16 overflow-hidden rounded-sm border border-[#C9A227]/25 bg-[#FFFDF8]"
    >
      {/* Top */}
      <div className="relative px-6 pb-8 pt-9 text-center">
        <div className="absolute left-5 top-5 text-[#C9A227]/40">
          ✦
        </div>

        <div className="absolute right-5 top-5 text-[#064E3B]/30">
          ✦
        </div>

        {/* Camera icon */}
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#C9A227] bg-[#FFFDF8]">
          <svg
            viewBox="0 0 64 64"
            className="h-8 w-8 text-[#4B2E20]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="10"
              y="18"
              width="44"
              height="32"
              rx="5"
              stroke="currentColor"
              strokeWidth="2.5"
            />

            <circle
              cx="32"
              cy="34"
              r="9"
              stroke="currentColor"
              strokeWidth="2.5"
            />

            <path
              d="M23 18L26 13H38L41 18"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />

            <circle
              cx="46"
              cy="25"
              r="2"
              fill="currentColor"
            />
          </svg>
        </div>

        <p className="mt-6 text-[9px] uppercase tracking-[0.4em] text-[#064E3B]">
          Your memories matter
        </p>

        <h3 className="mt-3 font-serif text-3xl text-[#4B2E20]">
          See It Through Your Eyes
        </h3>

        <p className="mx-auto mt-4 max-w-sm font-serif text-sm leading-6 text-[#4B2E20]/60">
          Take a photo, capture a moment and share it with us.
          Your memories will become part of our wedding story.
        </p>
      </div>

      {/* Coming Soon upload area */}
      <div className="border-t border-[#C9A227]/20 bg-[#FFFDF8]/60 p-6">
        <div className="rounded-sm border border-dashed border-[#C9A227]/40 px-5 py-8 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#4B2E20] text-[#C9A227]">
            +
          </div>

          <h4 className="mt-4 font-serif text-xl text-[#4B2E20]">
            Share Your Photos
          </h4>

          <p className="mt-2 text-xs leading-5 text-[#4B2E20]/50">
            Upload your favorite moments from
            <br />
            Blessing Gabriel & Gideon Ihieve's special day.
          </p>

          {/* Coming Soon button */}
         <div className="mt-6">
  <WeddingCamera />
</div>
        </div>
      </div>
    </motion.div>

    {/* Guest gallery preview */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.7 }}
      className="mt-10 text-center"
    >
      <p className="text-[9px] uppercase tracking-[0.3em] text-[#4B2E20]/40">
        Your photos will appear here
      </p>

     <WeddingGallery />

    </motion.div>

    {/* Bottom message */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.9 }}
      className="mt-12 text-center"
    >
      <span className="text-[#C9A227]">✦</span>

      <p className="mt-4 font-serif text-sm italic text-[#4B2E20]/55">
        One wedding.
        <br />
        Hundreds of memories.
      </p>
    </motion.div>
  </div>
</section>


<Guestbook />


{/* =====================================================
    #11 — RSVP
===================================================== */}
<section className="relative overflow-hidden bg-[#FFFDF8] px-5 py-24">
  <div className="relative mx-auto max-w-xl text-center">
    <p className="text-[9px] uppercase tracking-[0.45em] text-[#064E3B]">
      Will you join us?
    </p>

    <h2 className="mt-4 font-serif text-4xl text-[#4B2E20] sm:text-5xl">
      RSVP
    </h2>

    <div className="mx-auto my-7 h-px w-16 bg-[#C9A227]" />

    <p className="font-serif text-lg italic leading-7 text-[#4B2E20]/60">
      Your presence would make our celebration
      <br />
      even more special.
    </p>

    <div className="mt-12 rounded-sm border border-[#C9A227]/20 bg-[#FFFDF8] p-6">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#4B2E20] text-[#C9A227]">
        ♡
      </div>

      <h3 className="mt-5 font-serif text-2xl text-[#4B2E20]">
        Confirm Your Attendance
      </h3>

      <p className="mt-3 text-sm leading-6 text-[#4B2E20]/55">
        Let us know if you'll be celebrating
        <br />
        with us on Wednesday, 23 December 2026.
      </p>

      <p className="mt-6 text-[9px] uppercase tracking-[0.3em] text-[#064E3B]">RSVP / Contact</p>
      <div className="mt-4 flex flex-col gap-3 sm:flex-row">
        <a href="tel:08057605778" className="flex-1 rounded-sm bg-[#4B2E20] px-4 py-4 text-sm font-medium text-[#FFFDF8] transition-colors hover:bg-[#064E3B]">08057605778</a>
        <a href="tel:08073552084" className="flex-1 rounded-sm bg-[#4B2E20] px-4 py-4 text-sm font-medium text-[#FFFDF8] transition-colors hover:bg-[#064E3B]">08073552084</a>
      </div>
    </div>

    <p className="mt-7 text-[9px] uppercase tracking-[0.25em] text-[#4B2E20]/35">
      We hope to celebrate with you
    </p>
  </div>
</section>


{/* =====================================================
    #12 — GIFTS & SUPPORT
===================================================== */}
<section className="relative overflow-hidden bg-[#4B2E20] px-5 py-24 text-center">
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute left-1/2 top-0 h-32 w-px -translate-x-1/2 bg-[#C9A227]/30" />

    <div className="absolute bottom-0 left-1/2 h-32 w-px -translate-x-1/2 bg-[#C9A227]/30" />

    <span className="absolute left-[15%] top-[25%] text-[#C9A227]/40">
      ✦
    </span>

    <span className="absolute right-[15%] bottom-[25%] text-[#C9A227]/40">
      ✦
    </span>
  </div>

  <div className="relative mx-auto max-w-xl">
    <p className="text-[9px] uppercase tracking-[0.45em] text-[#C9A227]">
      A little something
    </p>

    <h2 className="mt-4 font-serif text-4xl text-[#FFFDF8] sm:text-5xl">
      Gifts & Support
    </h2>

    <div className="mx-auto my-7 h-px w-16 bg-[#C9A227]" />

    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#C9A227] text-2xl text-[#C9A227]">
      ♡
    </div>

    <p className="mx-auto mt-7 max-w-sm font-serif text-lg italic leading-8 text-[#FFFDF8]/70">
      Your presence, prayers and love are already
      the greatest gift we could ask for.
    </p>

    <div className="mt-10 rounded-sm border border-[#C9A227]/30 bg-[#FFFDF8]/5 p-6">
      <p className="text-[9px] uppercase tracking-[0.3em] text-[#C9A227]">
        For those who wish to bless us
      </p>

      <p className="mt-4 text-sm leading-6 text-[#FFFDF8]/60">
        Gift information will be made available
        here for anyone who would like to support
        our new beginning.
      </p>

      <button
        type="button"
        disabled
        className="mt-6 rounded-sm border border-[#C9A227]/50 px-7 py-3 text-[9px] uppercase tracking-[0.3em] text-[#C9A227]"
      >
        Coming Soon
      </button>
    </div>
  </div>
</section>


{/* =====================================================
    #13 — SHARE THE WEDDING
===================================================== */}
<section className="relative overflow-hidden bg-[#FFFDF8] px-5 py-24">
  <div className="relative mx-auto max-w-xl text-center">
    <p className="text-[9px] uppercase tracking-[0.45em] text-[#064E3B]">
      Spread the love
    </p>

    <h2 className="mt-4 font-serif text-4xl text-[#4B2E20] sm:text-5xl">
      Share Our Joy
    </h2>

    <div className="mx-auto my-7 h-px w-16 bg-[#C9A227]" />

    <p className="font-serif text-lg italic leading-7 text-[#4B2E20]/60">
      Know someone who should celebrate
      <br />
      this beautiful day with us?
    </p>

    {/* Share card */}
    <div className="mt-12 rounded-sm bg-[#FFFDF8] p-7 shadow-[0_15px_40px_rgba(74,44,36,0.08)]">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#4B2E20] text-2xl text-[#C9A227]">
        ↗
      </div>

      <h3 className="mt-5 font-serif text-2xl text-[#4B2E20]">
        Blessing Gabriel & Gideon Ihieve
      </h3>

      <p className="mt-2 text-[9px] uppercase tracking-[0.3em] text-[#064E3B]">
        Wedding Celebration
      </p>

      <div className="mx-auto my-5 h-px w-10 bg-[#C9A227]" />

      <p className="text-sm leading-6 text-[#4B2E20]/50">
        Wednesday, 23 December 2026
      </p>

      <button
        type="button"
        onClick={() => {
          if (navigator.share) {
            navigator.share({
              title: "Blessing Gabriel & Gideon Ihieve — Wedding Celebration",
              text: "Join us as we celebrate our wedding on Wednesday, 23 December 2026.",
              url: window.location.href,
            });
          } else {
            navigator.clipboard.writeText(window.location.href);
          }
        }}
        className="mt-7 w-full rounded-sm bg-[#4B2E20] px-6 py-4 text-[9px] font-medium uppercase tracking-[0.3em] text-[#FFFDF8] transition-colors hover:bg-[#064E3B]"
      >
        Share Invitation
      </button>
    </div>

    <div className="mt-10 flex items-center justify-center gap-4">
      <span className="h-px w-10 bg-[#C9A227]/40" />

      <span className="text-[#C9A227]">✦</span>

      <span className="h-px w-10 bg-[#C9A227]/40" />
    </div>

    <p className="mt-5 font-serif text-sm italic text-[#4B2E20]/50">
      Thank you for being part of our story.
    </p>
  </div>
</section>







          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </main>
  );
}