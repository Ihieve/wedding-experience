"use client";

import { FormEvent, useEffect, useState } from "react";
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp, where } from "firebase/firestore";
import { db } from "@/lib/firebase";

type GuestMessage = { id: string; name: string; message: string; createdAt?: { toDate?: () => Date } };

export default function GuestbookForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [messages, setMessages] = useState<GuestMessage[]>([]);

  useEffect(() => {
    try {
      const publicMessages = query(collection(db, "guestbookMessages"), where("approved", "==", true), orderBy("createdAt", "desc"));
      return onSnapshot(publicMessages, (snapshot) => {
        setMessages(snapshot.docs.map((item) => ({ id: item.id, ...(item.data() as Omit<GuestMessage, "id">) })).slice(0, 12));
      }, () => setMessages([]));
    } catch {
      setMessages([]);
    }
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(null);
    if (name.trim().length < 2 || message.trim().length < 5) {
      setStatus({ type: "error", text: "Please enter your name and a message of at least 5 characters." });
      return;
    }
    setBusy(true);
    try {
      await addDoc(collection(db, "guestbookMessages"), {
        name: name.trim(),
        message: message.trim(),
        createdAt: serverTimestamp(),
        approved: true,
      });
      setName("");
      setMessage("");
      setStatus({ type: "success", text: "Thank you! Your message has been added to the wedding guestbook." });
    } catch (error) {
      setStatus({ type: "error", text: error instanceof Error ? error.message : "Something went wrong. Please try again." });
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
      <div className="rounded-sm border border-[#C9A227]/30 bg-white/50 p-6 sm:p-8">
        <p className="text-[9px] uppercase tracking-[0.35em] text-[#B77931]">A note for the couple</p>
        <h3 className="mt-3 font-serif text-2xl text-[#4B2E20] sm:text-3xl">Leave a message</h3>
        <p className="mt-2 text-sm leading-6 text-[#4B2E20]/65">Share a blessing, a memory, or a few kind words for our new beginning.</p>
        <form className="mt-6 space-y-5 text-left" onSubmit={handleSubmit}>
          <label className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#4B2E20]/75">Full name
            <input value={name} onChange={(e) => setName(e.target.value)} required minLength={2} maxLength={100} autoComplete="name" className="mt-2 w-full rounded-sm border border-[#4B2E20]/20 bg-white/70 px-3 py-3 text-sm normal-case tracking-normal text-[#4B2E20] outline-none transition focus:border-[#C9A227]" placeholder="Your name" />
          </label>
          <label className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#4B2E20]/75">Your message
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} required minLength={5} maxLength={2000} rows={5} className="mt-2 w-full resize-y rounded-sm border border-[#4B2E20]/20 bg-white/70 px-3 py-3 text-sm normal-case tracking-normal text-[#4B2E20] outline-none transition focus:border-[#C9A227]" placeholder="Write your wishes for Blessing & Gideon..." />
          </label>
          {status && <p role="status" className={`rounded-sm p-3 text-sm ${status.type === "success" ? "bg-emerald-50 text-emerald-900" : "bg-red-50 text-red-800"}`}>{status.text}</p>}
          <button type="submit" disabled={busy} className="w-full rounded-sm bg-[#4B2E20] px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#FFFDF8] transition hover:bg-[#064E3B] disabled:cursor-wait disabled:opacity-60">{busy ? "Adding your message…" : "Sign the guestbook"}</button>
          <p className="text-center text-[10px] leading-5 text-[#4B2E20]/50">Your message will appear in the public wedding guestbook.</p>
        </form>
      </div>

      <div>
        <div className="mb-5 text-center lg:text-left"><p className="text-[9px] uppercase tracking-[0.35em] text-[#064E3B]">Words to treasure</p><h3 className="mt-2 font-serif text-2xl text-[#4B2E20]">Messages from our loved ones</h3></div>
        {messages.length ? <div className="space-y-4">{messages.map((item) => <article key={item.id} className="rounded-sm border border-[#C9A227]/20 bg-[#FFFDF8]/85 p-5 shadow-sm"><span className="font-serif text-3xl leading-none text-[#C9A227]">“</span><p className="mt-1 whitespace-pre-wrap font-serif text-base italic leading-7 text-[#4B2E20]/80">{item.message}</p><p className="mt-4 text-[9px] uppercase tracking-[0.2em] text-[#064E3B]">— {item.name}</p></article>)}</div> : <div className="rounded-sm border border-dashed border-[#C9A227]/35 p-8 text-center"><span className="text-2xl text-[#C9A227]">♡</span><p className="mt-3 font-serif text-lg italic text-[#4B2E20]/70">Your wishes will be the first pages of this guestbook.</p><p className="mt-2 text-xs leading-5 text-[#4B2E20]/50">Messages shared by our guests appear here.</p></div>}
      </div>
    </div>
  );
}
