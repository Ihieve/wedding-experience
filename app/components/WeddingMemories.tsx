"use client";

import { motion } from "framer-motion";

const photos = [
  {
    src: "/wedding-media/_DSC6147.jpg",
    alt: "Blessing and Gideon in their emerald and gold traditional outfits",
  },
  {
    src: "/wedding-media/_DSC6150.jpg",
    alt: "A beautiful traditional portrait of the couple",
  },
  {
    src: "/wedding-media/_DSC6181.jpg",
    alt: "Blessing and Gideon celebrating their love",
  },
  {
    src: "/wedding-media/_DSC6189.jpg",
    alt: "An elegant portrait of the couple",
  },
  {
    src: "/wedding-media/_DSC6198.jpg",
    alt: "A close-up portrait of Blessing and Gideon",
  },
  {
    src: "/wedding-media/_DSC6209.jpg",
    alt: "A full-length traditional portrait",
  },
  {
    src: "/wedding-media/_DSC6222.jpg",
    alt: "Blessing in her beautiful traditional attire",
  },
  {
    src: "/wedding-media/_DSC6230.jpg",
    alt: "The couple in their cultural outfits",
  },
  {
    src: "/wedding-media/_DSC6230BW.jpg",
    alt: "Black and white romantic portrait of the couple",
  },
  {
    src: "/wedding-media/_DSC6240.jpg",
    alt: "A special traditional wedding portrait",
  },
  {
    src: "/wedding-media/_DSC6252.jpg",
    alt: "Blessing in her elegant red traditional outfit",
  },
  {
    src: "/wedding-media/_DSC6286.jpg",
    alt: "A romantic portrait of Blessing and Gideon",
  },
  {
    src: "/wedding-media/_DSC6304.jpg",
    alt: "A beautiful solo portrait of Blessing",
  },
  {
    src: "/wedding-media/_DSC6327.jpg",
    alt: "A portrait of Gideon",
  },
  {
    src: "/wedding-media/_DSC6336.jpg",
    alt: "A treasured moment from the couple's photoshoot",
  },
  {
    src: "/wedding-media/_DSC6125.jpg",
    alt: "A special moment captured during the photoshoot",
  },
  {
    src: "/wedding-media/_DSC6131.jpg",
    alt: "A beautiful portrait from the wedding collection",
  },
  {
    src: "/wedding-media/_DSC6145.jpg",
    alt: "A romantic memory of the couple",
  },
  {
    src: "/wedding-media/wedding-2026-10-28-10.07.02.webp",
    alt: "A close-up of the couple's hands and engagement ring",
  },
];

const videos = [
  {
    src: "/wedding-media/lv_0_20261028144344.mp4",
    title: "Our moments in motion",
  },
  {
    src: "/wedding-media/lv_0_20261026151038.mp4",
    title: "A little more of our story",
  },
];

export default function WeddingMemories() {
  return (
    <section
      id="memories"
      className="relative isolate overflow-hidden bg-[#F8F3E9] px-5 py-20 sm:px-8 sm:py-28"
    >
      {/* Background video */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 overflow-hidden"
      >
        <video
          className="h-full w-full object-cover opacity-25"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          tabIndex={-1}
        >
          <source
            src="/wedding-media/lv_0_20261028144344.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[#FFF9EF]/85 dark:bg-[#10251D]/80"
      />

      <div className="pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full bg-[#064E3B]/[0.06] blur-3xl" />

      <div className="pointer-events-none absolute -right-24 bottom-10 h-64 w-64 rounded-full bg-[#C9A227]/[0.10] blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-[10px] uppercase tracking-[0.42em] text-[#064E3B]">
            Little moments, forever memories
          </p>

          <h2 className="mt-4 font-serif text-4xl text-[#4B2E20] sm:text-5xl">
            Our Memories
          </h2>

          <div className="mx-auto my-6 h-px w-16 bg-[#C9A227]" />

          <p className="font-serif text-base leading-7 text-[#4B2E20]/70 sm:text-lg">
            A collection of moments and videos we want to share with the
            people we love.
          </p>
        </motion.div>

        {/* Videos */}
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {videos.map((video, index) => (
            <motion.article
              key={video.src}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: index * 0.1,
              }}
              className="overflow-hidden rounded-2xl border border-[#C9A227]/25 bg-white/70 p-3 shadow-[0_18px_55px_rgba(74,44,36,0.10)]"
            >
              <video
                controls
                playsInline
                preload="metadata"
                className="aspect-video w-full rounded-xl bg-[#1D2B24] object-contain"
                aria-label={video.title}
                onError={(event) => {
                  console.error(
                    `Unable to load wedding video: ${video.src}`,
                    event.currentTarget.error
                  );
                }}
              >
                <source src={video.src} type="video/mp4" />
                Your browser does not support embedded video.
              </video>

              <p className="px-2 pb-1 pt-4 font-serif text-xl text-[#4B2E20]">
                {video.title}
              </p>
            </motion.article>
          ))}
        </div>

        {/* Gallery divider */}
        <div className="mt-16 flex items-center gap-4">
          <div className="h-px flex-1 bg-[#C9A227]/50" />

          <h3 className="font-serif text-2xl text-[#4B2E20] sm:text-3xl">
            Captured moments
          </h3>

          <div className="h-px flex-1 bg-[#C9A227]/50" />
        </div>

        {/* Slow sliding photo gallery */}
        <div
          className="wedding-memory-marquee mt-8"
          aria-label="Continuously sliding wedding photo gallery"
        >
          <div className="wedding-memory-track">
            {[...photos, ...photos].map((photo, index) => (
              <figure
                key={`${photo.src}-${index}`}
                className="wedding-memory-slide"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading={index < photos.length ? "eager" : "lazy"}
                  decoding="async"
                  draggable={false}
                />
              </figure>
            ))}
          </div>
        </div>

        <p className="mt-4 text-center text-xs text-[#4B2E20]/55">
          A continuous stream of our favorite moments · Swipe to explore
        </p>

        <p className="mt-5 text-center text-xs text-[#4B2E20]/55">
          With love, Blessing &amp; Gideon · 23 December 2026
        </p>
      </div>

      {/* Slower carousel animation */}
      <style jsx global>{`
        .wedding-memory-track {
          animation-duration: 100s !important;
          animation-timing-function: linear !important;
        }

        .wedding-memory-marquee:hover .wedding-memory-track {
          animation-play-state: paused;
        }

        .wedding-memory-slide img {
          user-select: none;
          -webkit-user-drag: none;
        }

        @media (prefers-reduced-motion: reduce) {
          .wedding-memory-track {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}