"use client";

import { useEffect, useState } from "react";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";

import { db } from "@/lib/firebase";

interface WeddingPhoto {
  id: string;
  imageUrl: string;
  createdAt?: {
    seconds: number;
  };
}

export default function WeddingGallery() {
  const [photos, setPhotos] = useState<WeddingPhoto[]>([]);

  useEffect(() => {
    const photosQuery = query(
      collection(db, "weddingGallery"),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(
      photosQuery,
      (snapshot) => {
        const galleryPhotos = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as WeddingPhoto[];

        setPhotos(galleryPhotos);
      },
      (error) => {
        console.error("Gallery error:", error);
      }
    );

    return () => unsubscribe();
  }, []);

  return (
    <div className="mt-10">
      {photos.length === 0 ? (
        <div className="rounded-sm bg-[#E8D8C3] px-6 py-12 text-center">
          <span className="text-2xl text-[#C9A227]">
            ♡
          </span>

          <p className="mt-4 text-[9px] uppercase tracking-[0.3em] text-[#4A2C24]/40">
            Your photos will appear here
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="group relative aspect-square overflow-hidden rounded-sm bg-[#E8D8C3]"
            >
              <img
                src={photo.imageUrl}
                alt="Wedding memory"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#4A2C24]/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}