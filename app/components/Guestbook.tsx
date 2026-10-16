"use client";

import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  addDoc,
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

type GuestMessage = {
  id: string;
  name: string;
  relationship?: string;
  message: string;
  createdAt?: Timestamp | null;
};

const MAX_MESSAGE_LENGTH = 500;

function formatDate(createdAt?: Timestamp | null) {
  if (!createdAt) return "Just shared";
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(createdAt.toDate());
}

export default function Guestbook() {
  const [messages, setMessages] = useState<GuestMessage[]>([]);
  const [name, setName] = useState("");
  const [relationship, setRelationship] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notice, setNotice] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    const messagesQuery = query(
      collection(db, "weddingMessages"),
      orderBy("createdAt", "desc"),
      limit(12)
    );

    return onSnapshot(
      messagesQuery,
      (snapshot) => {
        setMessages(
          snapshot.docs.map((item) => ({
            id: item.id,
            ...(item.data() as Omit<GuestMessage, "id">),
          }))
        );
        setLoadError(false);
      },
      (error) => {
        console.error("Unable to load wedding messages:", error);
        setLoadError(true);
      }
    );
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNotice(null);

    const cleanName = name.trim();
    const cleanMessage = message.trim();
    const cleanRelationship = relationship.trim();

    if (!cleanName || !cleanMessage) {
      setNotice({ type: "error", text: "Please add your name and a message." });
      return;
    }

    if (cleanName.length > 60 || cleanMessage.length > MAX_MESSAGE_LENGTH) {
      setNotice({ type: "error", text: "Please shorten your name or message and try again." });
      return;
    }

    setIsSubmitting(true);
    try {
      await addDoc(collection(db, "weddingMessages"), {
        name: cleanName,
        relationship: cleanRelationship.slice(0, 60),
        message: cleanMessage,
        createdAt: serverTimestamp(),
      });
      setName("");
      setRelationship("");
      setMessage("");
      setNotice({ type: "success", text: "Your message has been added to our guestbook. Thank you for the love!" });
    } catch (error) {
      console.error("Unable to save wedding message:", error);
      setNotice({
        type: "error",
        text: "We couldn't save your message right now. Please try again in a moment.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="guestbook" className="relative overflow-hidden bg-gradient-to-br from-[#FFFDF8] via-[#F5E8D3] to-[#E8D8C3] px-5 py-20 sm:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-12 h-72 w-72 rounded-full border border-[#C9A227]/25" />
        <div className="absolute -left-16 top-20 h-56 w-56 rounded-full border border-[#0F6B5B]/15" />
        <div className="absolute -right-28 bottom-0 h-96 w-96 rounded-full bg-[#0F6B5B]/[0.06] blur-3xl" />
        <div className="absolute right-[8%] top-[12%] text-2xl text-[#C9A227]/50">✦</div>
        <div className="absolute bottom-[18%] left-[12%] text-lg text-[#0F6B5B]/40">✧</div>
      </div>

      <div className="relative mx-auto max-w-6xl">
        <motion.header
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-[10px] font-medium uppercase tracking-[0.42em] text-[#0F6B5B]">Leave a little love</p>
          <h2 className="mt-4 font-serif text-4xl text-[#4A2C24] sm:text-5xl">A note for our forever</h2>
          <div className="mx-auto my-6 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#C9A227]" />
            <span className="text-lg text-[#C9A227]">♡</span>
            <span className="h-px w-12 bg-[#C9A227]" />
          </div>
          <p className="mx-auto max-w-xl text-sm leading-7 text-[#4A2C24]/70 sm:text-base">
            Every kind word becomes part of our story. Leave Blessing and Gideon a wish, a prayer, or a memory—we would love to read your message and keep it close to our hearts.
          </p>
        </motion.header>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl border border-[#C9A227]/40 bg-[#4A2C24] p-7 text-[#FFFDF8] shadow-[0_24px_70px_rgba(74,44,36,0.18)] sm:p-9"
          >
            <div aria-hidden="true" className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full border border-[#C9A227]/30" />
            <div aria-hidden="true" className="pointer-events-none absolute -right-6 -top-6 h-32 w-32 rounded-full border border-[#C9A227]/20" />
            <span className="text-4xl leading-none text-[#C9A227]">“</span>
            <p className="mt-3 font-serif text-2xl italic leading-relaxed sm:text-3xl">
              The best wishes are the ones we can look back on and feel all over again.
            </p>
            <div className="my-7 h-px w-16 bg-[#C9A227]" />
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#D9B96E]">With love and gratitude</p>
            <p className="mt-3 font-serif text-xl">Blessing <span className="text-[#C9A227]">&</span> Gideon</p>
            <p className="mt-2 text-xs tracking-[0.12em] text-white/60">23 December 2026 · Abuja, Nigeria</p>
            <div className="mt-8 flex items-center gap-2" aria-label={`${messages.length} recent messages shown`}>
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C9A227]/50 text-[#C9A227]">♡</span>
              <span className="text-xs text-white/70">{messages.length > 0 ? `${messages.length} recent ${messages.length === 1 ? "message" : "messages"} in our guestbook` : "Be the first to leave us a wish"}</span>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-[#C9A227]/35 bg-white/75 p-6 shadow-[0_20px_60px_rgba(74,44,36,0.08)] backdrop-blur-sm sm:p-8"
          >
            <div className="mb-6">
              <p className="text-[9px] uppercase tracking-[0.35em] text-[#0F6B5B]">Your words matter</p>
              <h3 className="mt-2 font-serif text-2xl text-[#4A2C24]">Write your message</h3>
              <p className="mt-2 text-xs leading-5 text-[#4A2C24]/60">Share a blessing, a prayer, or a few words for the couple.</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-xs font-medium text-[#4A2C24]">
                Your name <span className="text-[#0F6B5B]">*</span>
                <input
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  maxLength={60}
                  required
                  autoComplete="name"
                  placeholder="e.g. Ada Okafor"
                  className="mt-2 w-full rounded-lg border border-[#4A2C24]/15 bg-[#FFFDF8] px-4 py-3 text-sm font-normal text-[#4A2C24] outline-none transition focus:border-[#0F6B5B] focus:ring-2 focus:ring-[#0F6B5B]/10"
                />
              </label>
              <label className="block text-xs font-medium text-[#4A2C24]">
                How you know us <span className="font-normal text-[#4A2C24]/45">(optional)</span>
                <input
                  value={relationship}
                  onChange={(event) => setRelationship(event.target.value)}
                  maxLength={60}
                  placeholder="Friend, family, colleague…"
                  className="mt-2 w-full rounded-lg border border-[#4A2C24]/15 bg-[#FFFDF8] px-4 py-3 text-sm font-normal text-[#4A2C24] outline-none transition focus:border-[#0F6B5B] focus:ring-2 focus:ring-[#0F6B5B]/10"
                />
              </label>
            </div>

            <label className="mt-4 block text-xs font-medium text-[#4A2C24]">
              Your message <span className="text-[#0F6B5B]">*</span>
              <textarea
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                required
                minLength={2}
                maxLength={MAX_MESSAGE_LENGTH}
                rows={5}
                placeholder="Dear Blessing and Gideon, wishing you a lifetime of…"
                className="mt-2 w-full resize-y rounded-lg border border-[#4A2C24]/15 bg-[#FFFDF8] px-4 py-3 text-sm font-normal leading-6 text-[#4A2C24] outline-none transition placeholder:text-[#4A2C24]/35 focus:border-[#0F6B5B] focus:ring-2 focus:ring-[#0F6B5B]/10"
              />
              <span className="mt-1 block text-right text-[10px] font-normal text-[#4A2C24]/45">{message.length}/{MAX_MESSAGE_LENGTH}</span>
            </label>

            <AnimatePresence mode="wait">
              {notice && (
                <motion.p
                  key={notice.text}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  role="status"
                  aria-live="polite"
                  className={`mt-4 rounded-lg px-4 py-3 text-xs leading-5 ${notice.type === "success" ? "bg-[#0F6B5B]/10 text-[#0F6B5B]" : "bg-red-50 text-red-700"}`}
                >
                  {notice.text}
                </motion.p>
              )}
            </AnimatePresence>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#4A2C24] px-6 py-4 text-[10px] font-medium uppercase tracking-[0.25em] text-[#FFFDF8] transition duration-300 hover:bg-[#0F6B5B] focus:outline-none focus:ring-2 focus:ring-[#C9A227] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Sending your love…" : "Send your wishes"}
              {!isSubmitting && <span aria-hidden="true" className="text-[#C9A227]">♡</span>}
            </button>
            <p className="mt-3 text-center text-[10px] leading-5 text-[#4A2C24]/45">By sending a message, you agree that it may appear in our public wedding guestbook.</p>
          </motion.form>
        </div>

        <div className="mt-16">
          <div className="mb-7 flex flex-col gap-2 text-center sm:flex-row sm:items-end sm:justify-between sm:text-left">
            <div>
              <p className="text-[9px] uppercase tracking-[0.35em] text-[#0F6B5B]">Kind words from our people</p>
              <h3 className="mt-2 font-serif text-3xl text-[#4A2C24]">Messages from the heart</h3>
            </div>
            <p className="text-xs text-[#4A2C24]/55">The latest wishes shared with us</p>
          </div>

          {loadError ? (
            <div className="rounded-xl border border-[#C9A227]/30 bg-white/60 p-6 text-center text-sm text-[#4A2C24]/70">
              Messages are temporarily unavailable. Please try refreshing the page.
            </div>
          ) : messages.length === 0 ? (
            <div className="rounded-xl border border-dashed border-[#C9A227]/50 bg-white/45 px-6 py-10 text-center">
              <span className="text-3xl text-[#C9A227]">♡</span>
              <p className="mt-3 font-serif text-xl text-[#4A2C24]">Your message could be the first</p>
              <p className="mt-2 text-sm text-[#4A2C24]/60">Leave a wish above and it will appear here.</p>
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {messages.map((item, index) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.35, delay: Math.min(index * 0.04, 0.2) }}
                  className={`rounded-xl border border-[#C9A227]/25 p-5 shadow-sm ${index % 3 === 1 ? "bg-[#4A2C24] text-[#FFFDF8]" : "bg-white/75 text-[#4A2C24]"}`}
                >
                  <span className={`font-serif text-3xl leading-none ${index % 3 === 1 ? "text-[#C9A227]" : "text-[#C9A227]"}`}>“</span>
                  <p className={`mt-1 whitespace-pre-wrap break-words font-serif text-lg italic leading-7 ${index % 3 === 1 ? "text-white/90" : "text-[#4A2C24]/80"}`}>{item.message}</p>
                  <div className={`mt-5 border-t pt-4 ${index % 3 === 1 ? "border-white/15" : "border-[#4A2C24]/10"}`}>
                    <p className={`text-[10px] font-semibold uppercase tracking-[0.18em] ${index % 3 === 1 ? "text-[#D9B96E]" : "text-[#0F6B5B]"}`}>— {item.name}</p>
                    {item.relationship && <p className={`mt-1 text-xs ${index % 3 === 1 ? "text-white/60" : "text-[#4A2C24]/55"}`}>{item.relationship}</p>}
                    <p className={`mt-2 text-[10px] ${index % 3 === 1 ? "text-white/45" : "text-[#4A2C24]/40"}`}>{formatDate(item.createdAt)}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
