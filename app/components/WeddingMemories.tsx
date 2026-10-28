"use client";

import { motion } from "framer-motion";

const photos = [
  { src: "/wedding-media/wedding-2026-10-28-10.05.44.webp", alt: "A wedding memory" },
  { src: "/wedding-media/wedding-2026-10-28-10.06.03.webp", alt: "A special moment" },
  { src: "/wedding-media/wedding-2026-10-28-10.06.14.webp", alt: "A beautiful memory" },
  { src: "/wedding-media/wedding-2026-10-28-10.06.21.webp", alt: "A moment to remember" },
  { src: "/wedding-media/wedding-2026-10-28-10.06.29.webp", alt: "A special memory" },
  { src: "/wedding-media/wedding-2026-10-28-10.06.40.webp", alt: "A moment together" },
  { src: "/wedding-media/wedding-2026-10-28-10.06.45.webp", alt: "A wedding detail" },
  { src: "/wedding-media/wedding-2026-10-28-10.06.52.webp", alt: "A treasured moment" },
  { src: "/wedding-media/wedding-2026-10-28-10.07.02.webp", alt: "A beautiful detail" },
  { src: "/wedding-media/wedding-2026-10-28-10.07.09.webp", alt: "A memory captured" },
  { src: "/wedding-media/wedding-2026-10-28-10.07.15.webp", alt: "A moment worth keeping" },
  { src: "/wedding-media/extra-memory-01.webp", alt: "Wedding memory 12" },
  { src: "/wedding-media/extra-memory-02.webp", alt: "Wedding memory 13" },
  { src: "/wedding-media/extra-memory-03.webp", alt: "Wedding memory 14" },
  { src: "/wedding-media/extra-memory-04.webp", alt: "Wedding memory 15" },
  { src: "/wedding-media/extra-memory-05.webp", alt: "Wedding memory 16" },
  { src: "/wedding-media/extra-memory-06.webp", alt: "Wedding memory 17" },
  { src: "/wedding-media/extra-memory-07.webp", alt: "Wedding memory 18" },
  { src: "/wedding-media/extra-memory-08.webp", alt: "Wedding memory 19" },
  { src: "/wedding-media/extra-memory-09.webp", alt: "Wedding memory 20" },
  { src: "/wedding-media/extra-memory-10.webp", alt: "Wedding memory 21" },
  { src: "/wedding-media/extra-memory-11.webp", alt: "Wedding memory 22" },
  { src: "/wedding-media/extra-memory-12.webp", alt: "Wedding memory 23" },
  { src: "/wedding-media/extra-memory-13.webp", alt: "Wedding memory 24" },
  { src: "/wedding-media/extra-memory-14.webp", alt: "Wedding memory 25" },
  { src: "/wedding-media/extra-memory-15.webp", alt: "Wedding memory 26" },
  { src: "/wedding-media/extra-memory-16.webp", alt: "Wedding memory 27" },
  { src: "/wedding-media/extra-memory-17.webp", alt: "Wedding memory 28" },
  { src: "/wedding-media/extra-memory-18.webp", alt: "Wedding memory 29" },
  { src: "/wedding-media/extra-memory-19.webp", alt: "Wedding memory 30" },
  { src: "/wedding-media/extra-memory-20.webp", alt: "Wedding memory 31" },
  { src: "/wedding-media/extra-memory-21.webp", alt: "Wedding memory 32" },
  { src: "/wedding-media/extra-memory-22.webp", alt: "Wedding memory 33" },
  { src: "/wedding-media/extra-memory-23.webp", alt: "Wedding memory 34" },
  { src: "/wedding-media/extra-memory-24.webp", alt: "Wedding memory 35" },
  { src: "/wedding-media/extra-memory-25.webp", alt: "Wedding memory 36" },
  { src: "/wedding-media/extra-memory-26.webp", alt: "Wedding memory 37" },
  { src: "/wedding-media/extra-memory-27.webp", alt: "Wedding memory 38" },
  { src: "/wedding-media/extra-memory-28.webp", alt: "Wedding memory 39" },
  { src: "/wedding-media/extra-memory-29.webp", alt: "Wedding memory 40" },
  { src: "/wedding-media/extra-memory-30.webp", alt: "Wedding memory 41" },
  { src: "/wedding-media/extra-memory-31.webp", alt: "Wedding memory 42" }
];

const videos = [
  { src: "/wedding-media/lv_0_20261028144344.mp4", title: "Our moments in motion" },
  { src: "/wedding-media/lv_0_20261026151038.mp4", title: "A little more of our story" },
];

export default function WeddingMemories() {
  return (
    <section id="memories" className="relative isolate overflow-hidden bg-[#F8F3E9] px-5 py-20 sm:px-8 sm:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
        <video className="h-full w-full object-cover opacity-25" autoPlay muted loop playsInline preload="metadata" tabIndex={-1}>
          <source src="/wedding-media/lv_0_20261028144344.mp4" type="video/mp4" />
        </video>
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[#FFF9EF]/85 dark:bg-[#10251D]/80" />
      <div className="pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full bg-[#064E3B]/[0.06] blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-64 w-64 rounded-full bg-[#C9A227]/[0.10] blur-3xl" />
      <div className="relative mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }} className="mx-auto max-w-2xl text-center">
          <p className="text-[10px] uppercase tracking-[0.42em] text-[#064E3B]">Little moments, forever memories</p>
          <h2 className="mt-4 font-serif text-4xl text-[#4B2E20] sm:text-5xl">Our Memories</h2>
          <div className="mx-auto my-6 h-px w-16 bg-[#C9A227]" />
          <p className="font-serif text-base leading-7 text-[#4B2E20]/70 sm:text-lg">A collection of moments and videos we want to share with the people we love.</p>
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {videos.map((video, index) => (
            <motion.article key={video.src} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: index * 0.1 }} className="overflow-hidden rounded-2xl border border-[#C9A227]/25 bg-white/70 p-3 shadow-[0_18px_55px_rgba(74,44,36,0.10)]">
              <video controls playsInline preload="auto" className="aspect-video w-full rounded-xl bg-[#1D2B24] object-contain" aria-label={video.title} onError={(event) => { console.error(`Unable to load wedding video: ${video.src}`, event.currentTarget.error); }}>
                <source src={video.src} type="video/mp4" />
                Your browser does not support embedded video.
              </video>
              <p className="px-2 pb-1 pt-4 font-serif text-xl text-[#4B2E20]">{video.title}</p>
            </motion.article>
          ))}
        </div>

        <div className="mt-16 flex items-center gap-4">
          <div className="h-px flex-1 bg-[#C9A227]/50" />
          <h3 className="font-serif text-2xl text-[#4B2E20] sm:text-3xl">Captured moments</h3>
          <div className="h-px flex-1 bg-[#C9A227]/50" />
        </div>

        <div className="wedding-memory-marquee mt-8" aria-label="Continuously sliding wedding photo gallery">
          <div className="wedding-memory-track">
            {[...photos, ...photos].map((photo, index) => (
              <figure key={`${photo.src}-${index}`} className="wedding-memory-slide">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading={index < 8 ? "eager" : "lazy"}
                  decoding="async"
                  draggable={false}
                />
              </figure>
            ))}
          </div>
        </div>
        <p className="mt-4 text-center text-xs text-[#4B2E20]/55">A continuous stream of our favorite moments · Swipe to explore</p>
        <p className="mt-5 text-center text-xs text-[#4B2E20]/55">With love, Blessing &amp; Gideon · 23 December 2026</p>
      </div>
    </section>
  );
}
