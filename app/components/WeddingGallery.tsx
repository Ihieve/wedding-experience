
"use client";

import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";

import { db } from "@/lib/firebase";

interface WeddingPhoto {
  id: string;
  imageUrl: string;
  alt: string;
  createdAt?: {
    seconds?: number;
    nanoseconds?: number;
  } | null;
}

// Your personal wedding photographs
const personalPhotos: WeddingPhoto[] = [
  {
    id: "personal-6125",
    imageUrl: "/wedding-media/_DSC6125.jpg",
    alt: "Blessing and Gideon in emerald and gold traditional attire",
  },
  {
    id: "personal-6131",
    imageUrl: "/wedding-media/_DSC6131.jpg",
    alt: "A beautiful traditional wedding portrait",
  },
  {
    id: "personal-6145",
    imageUrl: "/wedding-media/_DSC6145.jpg",
    alt: "A cherished portrait of the couple",
  },
  {
    id: "personal-6147",
    imageUrl: "/wedding-media/_DSC6147.jpg",
    alt: "Blessing and Gideon together",
  },
  {
    id: "personal-6150",
    imageUrl: "/wedding-media/_DSC6150.jpg",
    alt: "A full-length traditional wedding portrait",
  },
  {
    id: "personal-6181",
    imageUrl: "/wedding-media/_DSC6181.jpg",
    alt: "Blessing in elegant burgundy traditional attire",
  },
  {
    id: "personal-6189",
    imageUrl: "/wedding-media/_DSC6189.jpg",
    alt: "A beautiful bridal portrait",
  },
  {
    id: "personal-6198",
    imageUrl: "/wedding-media/_DSC6198.jpg",
    alt: "The couple in traditional attire",
  },
  {
    id: "personal-6209",
    imageUrl: "/wedding-media/_DSC6209.jpg",
    alt: "A traditional wedding moment",
  },
  {
    id: "personal-6222",
    imageUrl: "/wedding-media/_DSC6222.jpg",
    alt: "A lovely couple portrait",
  },
  {
    id: "personal-6230",
    imageUrl: "/wedding-media/_DSC6230.jpg",
    alt: "A romantic traditional portrait",
  },
  {
    id: "personal-6230-bw",
    imageUrl: "/wedding-media/_DSC6230BW.jpg",
    alt: "A timeless black and white portrait",
  },
  {
    id: "personal-6240",
    imageUrl: "/wedding-media/_DSC6240.jpg",
    alt: "A beautiful traditional wedding moment",
  },
  {
    id: "personal-6252",
    imageUrl: "/wedding-media/_DSC6252.jpg",
    alt: "A playful couple portrait",
  },
  {
    id: "personal-6286",
    imageUrl: "/wedding-media/_DSC6286.jpg",
    alt: "Blessing and Gideon in burgundy and red",
  },
  {
    id: "personal-6304",
    imageUrl: "/wedding-media/_DSC6304.jpg",
    alt: "A romantic portrait of the couple",
  },
  {
    id: "personal-6327",
    imageUrl: "/wedding-media/_DSC6327.jpg",
    alt: "Blessing in her elegant red dress",
  },
  {
    id: "personal-6336",
    imageUrl: "/wedding-media/_DSC6336.jpg",
    alt: "Gideon in traditional attire",
  },
];

export default function WeddingGallery() {
  const [guestPhotos, setGuestPhotos] = useState<WeddingPhoto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [failedImages, setFailedImages] = useState<string[]>([]);

  // Personal photographs first, followed by guest contributions.
  const photos = [...personalPhotos, ...guestPhotos];

  // Real-time Firebase gallery subscription.
  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "weddingGallery"),
      (snapshot) => {
        const uploadedPhotos = snapshot.docs
          .map((doc) => {
            const data = doc.data();

            return {
              id: doc.id,
              imageUrl: data.imageUrl,
              alt: data.alt || "A beautiful wedding memory",
              createdAt: data.createdAt,
            } as WeddingPhoto;
          })
          .filter(
            (photo) =>
              typeof photo.imageUrl === "string" &&
              photo.imageUrl.trim() !== ""
          )
          .sort(
            (a, b) =>
              (b.createdAt?.seconds ?? 0) -
              (a.createdAt?.seconds ?? 0)
          );

        setGuestPhotos(uploadedPhotos);
        setError("");
        setLoading(false);
      },
      (firebaseError) => {
        console.error("Wedding gallery error:", firebaseError);
        setError("Guest photos could not be loaded. Please try again later.");
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  // Keyboard navigation for the photo preview.
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedIndex(null);
      }

      if (event.key === "ArrowRight") {
        setSelectedIndex((current) =>
          current === null ? null : (current + 1) % photos.length
        );
      }

      if (event.key === "ArrowLeft") {
        setSelectedIndex((current) =>
          current === null
            ? null
            : (current - 1 + photos.length) % photos.length
        );
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex, photos.length]);

  const showPrevious = () => {
    setSelectedIndex((current) =>
      current === null
        ? null
        : (current - 1 + photos.length) % photos.length
    );
  };

  const showNext = () => {
    setSelectedIndex((current) =>
      current === null ? null : (current + 1) % photos.length
    );
  };

  const selectedPhoto =
    selectedIndex !== null ? photos[selectedIndex] : null;

  return (
    <>
      <div className="mt-10">
        {/* Loading skeleton */}
        {loading && (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="aspect-square animate-pulse rounded-sm bg-[#E8D8C3]/70"
              />
            ))}
          </div>
        )}

        {/* Personal and guest photos */}
        <div
          className={`grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 ${
            loading ? "hidden" : ""
          }`}
        >
          {photos.map((photo, index) => {
            const imageFailed = failedImages.includes(photo.id);

            return (
              <button
                key={photo.id}
                type="button"
                onClick={() => setSelectedIndex(index)}
                disabled={imageFailed}
                aria-label={`View ${photo.alt}`}
                className="group relative aspect-square overflow-hidden rounded-sm bg-[#E8D8C3] outline-none transition-all duration-300 hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-[#C9A227] focus-visible:ring-offset-2 disabled:cursor-not-allowed"
              >
                {!imageFailed ? (
                  <img
                    src={photo.imageUrl}
                    alt={photo.alt}
                    loading={index < 6 ? "eager" : "lazy"}
                    decoding="async"
                    onError={() =>
                      setFailedImages((current) =>
                        current.includes(photo.id)
                          ? current
                          : [...current, photo.id]
                      )
                    }
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="flex h-full flex-col items-center justify-center">
                    <span className="text-2xl text-[#C9A227]">♡</span>
                    <span className="mt-2 text-[9px] text-[#4A2C24]/50">
                      Image unavailable
                    </span>
                  </div>
                )}

                {!imageFailed && (
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[#4A2C24]/50 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                    <span className="text-[9px] uppercase tracking-[0.2em] text-white">
                      View photo
                    </span>
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Photo count */}
        {!loading && (
          <div className="mt-6 flex items-center justify-between">
            <p className="text-[9px] uppercase tracking-[0.25em] text-[#4A2C24]/50">
              Captured memories
            </p>

            <span className="text-[10px] text-[#064E3B]">
              {photos.length} {photos.length === 1 ? "Photo" : "Photos"}
            </span>
          </div>
        )}

        {/* Firebase error notice */}
        {!loading && error && (
          <p
            role="status"
            className="mt-4 text-center text-xs text-[#4A2C24]/60"
          >
            {error}
          </p>
        )}
      </div>

      {/* Full-screen photo preview */}
      {selectedPhoto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Wedding photo preview"
          onClick={() => setSelectedIndex(null)}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-[#1B1714]/95 p-4 backdrop-blur-sm sm:p-8"
        >
          <button
            type="button"
            onClick={() => setSelectedIndex(null)}
            aria-label="Close preview"
            className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-2xl text-white hover:bg-white/20"
          >
            ×
          </button>

          {photos.length > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showPrevious();
              }}
              aria-label="Previous photo"
              className="absolute left-3 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-2xl text-white hover:bg-white/20 sm:left-6"
            >
              ‹
            </button>
          )}

          <div
            className="flex max-h-full w-full max-w-5xl flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedPhoto.imageUrl}
              alt={selectedPhoto.alt}
              className="max-h-[78vh] max-w-full rounded-sm object-contain shadow-2xl"
            />

            <p className="mt-5 text-center font-serif text-sm italic text-white/80">
              {selectedPhoto.alt}
            </p>

            <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-white/45">
              {selectedIndex! + 1} of {photos.length}
            </p>
          </div>

          {photos.length > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              aria-label="Next photo"
              className="absolute right-3 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-2xl text-white hover:bg-white/20 sm:right-6"
            >
              ›
            </button>
          )}
        </div>
      )}
    </>
  );
}
