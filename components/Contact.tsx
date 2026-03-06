"use client";

import { useRef } from "react";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { useContactAnimation } from "@/hooks/useAnimations";

export default function Contact() {
  const container = useRef(null);

  useContactAnimation(container);

  return (
    <section
      id="contact"
      ref={container}
      className="
      px-5 py-24 md:px-16 md:py-32
      bg-white text-black
      dark:bg-[#050505] dark:text-white
      "
    >
      <div className="border border-black dark:border-white">
        {/* HEADER */}
        <div className="grid grid-cols-1 md:grid-cols-12 border-b border-black dark:border-white">
          <div className="md:col-span-7 border-b md:border-b-0 md:border-r border-black dark:border-white p-6 md:p-10">
            <h2
              className="
              contact-input
              text-[14vw] md:text-[7vw]
              font-black uppercase
              leading-[0.85] tracking-tight
              "
            >
              Contact
            </h2>
          </div>

          <div className="md:col-span-5 p-6 md:p-10 flex items-end">
            <p className="contact-input font-mono text-xs uppercase tracking-widest text-indigo-500 max-w-xs">
              [ Kirim pesan langsung ke inbox saya ]
            </p>
          </div>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* LEFT INFO */}
          <div className="contact-input md:col-span-5 border-b md:border-b-0 md:border-r border-black dark:border-white p-6 md:p-10 flex flex-col justify-between">
            <div>
              <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-6">
                Start a Project
              </h3>

              <p className="font-mono text-xs uppercase text-zinc-500 max-w-xs">
                Biasanya saya membalas pesan dalam 1x24 jam.
              </p>
            </div>

            <div className="flex flex-col gap-4 mt-10">
              {/* EMAIL */}
              <a
                href="mailto:hello@fredy.dev"
                className="
                group
                contact-input
                flex items-center gap-3
                border border-black dark:border-white
                px-4 py-3
                font-mono text-xs uppercase
                hover:bg-indigo-500 hover:text-white
                transition
                "
              >
                <Mail
                  size={16}
                  className="text-indigo-500 group-hover:text-white transition"
                />
                kevinnardiansyahh19@gmail.com
              </a>

              {/* LOCATION */}
              <div
                className="
                contact-input
                flex items-center gap-3
                border border-black dark:border-white
                px-4 py-3
                font-mono text-xs uppercase
                text-zinc-600 dark:text-zinc-400
                "
              >
                <MapPin size={16} className="text-indigo-500" />
                Tangerang, ID
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="md:col-span-7 p-6 md:p-10">
            <form
              className="flex flex-col"
              onSubmit={(e) => e.preventDefault()}
            >
              {/* NAME */}
              <div className="contact-input border-b border-black dark:border-white pb-6 mb-8">
                <label className="font-mono text-xs uppercase text-indigo-500 block mb-3">
                  01 // Nama
                </label>

                <input
                  type="text"
                  placeholder="Your Name"
                  className="
                  w-full
                  bg-transparent
                  text-2xl md:text-3xl
                  font-black uppercase
                  outline-none
                  placeholder:opacity-20 placeholder:normal-case
                  focus:text-indigo-500
                  transition
                  "
                />
              </div>

              {/* EMAIL */}
              <div className="contact-input border-b border-black dark:border-white pb-6 mb-8">
                <label className="font-mono text-xs uppercase text-indigo-500 block mb-3">
                  02 // Email
                </label>

                <input
                  type="email"
                  placeholder="email@example.com"
                  className="
                  w-full
                  bg-transparent
                  text-2xl md:text-3xl
                  font-black uppercase
                  outline-none
                  placeholder:opacity-20 placeholder:normal-case
                  focus:text-indigo-500
                  transition
                  "
                />
              </div>

              {/* MESSAGE */}
              <div className="contact-input border-b border-black dark:border-white pb-6 mb-10">
                <label className="font-mono text-xs uppercase text-indigo-500 block mb-3">
                  03 // Pesan
                </label>

                <textarea
                  rows={4}
                  placeholder="Ceritakan tentang proyek Anda..."
                  className="
                  w-full
                  bg-transparent
                  text-base md:text-lg
                  outline-none
                  resize-none
                  placeholder:opacity-20
                  focus:text-indigo-500
                  transition
                  "
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="
                group
                contact-input
                flex items-center justify-between
                border border-black dark:border-white
                px-6 py-4
                font-black uppercase
                hover:bg-indigo-500 hover:text-white
                transition
                "
              >
                Kirim Pesan
                <ArrowUpRight
                  size={20}
                  className="text-indigo-500 group-hover:text-white transition"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
