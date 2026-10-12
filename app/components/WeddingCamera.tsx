"use client";

import { useRef, useState } from "react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db, storage } from "@/lib/firebase";

export default function WeddingCamera() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [isUploading, setIsUploading] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [error, setError] = useState("");

  const openCamera = () => {
    fileInputRef.current?.click();
  };

  const handlePhoto = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    try {
      setIsUploading(true);
      setUploaded(false);
      setError("");

      const fileName = `${Date.now()}-${file.name}`;

      const storageRef = ref(
        storage,
        `wedding-gallery/${fileName}`
      );

      // Upload image
      await uploadBytes(storageRef, file);

      // Get public download URL
      const imageUrl = await getDownloadURL(storageRef);

      // Save image information
      await addDoc(collection(db, "weddingGallery"), {
        imageUrl,
        fileName,
        createdAt: serverTimestamp(),
      });

      setUploaded(true);
    } catch (err) {
      console.error("Photo upload failed:", err);
      setError("We couldn't upload your photo. Please try again.");
    } finally {
      setIsUploading(false);

      // Allow taking the same photo again
      event.target.value = "";
    }
  };

  return (
    <div className="text-center">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        capture="environment"
        onChange={handlePhoto}
        className="hidden"
      />

      <button
        type="button"
        onClick={openCamera}
        disabled={isUploading}
        className="inline-flex items-center justify-center gap-3 rounded-sm bg-[#4B2E20] px-7 py-4 text-[9px] font-medium uppercase tracking-[0.3em] text-[#FFFDF8] transition-all duration-300 hover:bg-[#064E3B] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isUploading ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#C9A227] border-t-transparent" />
            Uploading...
          </>
        ) : (
          <>
            <CameraIcon />
            Take a Photo
          </>
        )}
      </button>

      {uploaded && (
        <p className="mt-4 text-xs text-[#064E3B]">
          ✦ Your photo has been added to the gallery.
        </p>
      )}

      {error && (
        <p className="mt-4 text-xs text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}

function CameraIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="h-5 w-5"
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
  );
}