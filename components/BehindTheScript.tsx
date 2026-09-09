"use client";

import { motion } from "framer-motion";
import { Eye, ArrowDown } from "lucide-react";

export default function TruthBehindScript() {
  return (
    <section
      id="truth"
      className="relative overflow-hidden bg-[#0b0b0a] px-6 py-32 text-[#eeeae2] md:px-10 lg:px-16 lg:py-44"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[10%] h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-[#a89577]/[0.025] blur-[170px]" />

        <div className="absolute right-[-15%] top-[35%] h-[550px] w-[550px] rounded-full bg-[#c8b89a]/[0.02] blur-[160px]" />

        <div className="absolute left-[-15%] bottom-[10%] h-[450px] w-[450px] rounded-full bg-[#a89577]/[0.015] blur-[140px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_15%,rgba(11,11,10,0.75)_90%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-between border-b border-[#d8d1c5]/[0.08] pb-6"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#a89577]/20">
              <Eye size={15} strokeWidth={1} className="text-[#a89577]" />
            </div>

            <div>
              <p className="text-[8px] uppercase tracking-[0.45em] text-[#a89577]">
                The Truth Behind The Script
              </p>

              <p className="mt-1 text-[9px] uppercase tracking-[0.25em] text-white/25">
                Reality Before The Script
              </p>
            </div>
          </div>

          <span className="hidden text-[8px] uppercase tracking-[0.4em] text-white/20 sm:block">
            01 / Reality
          </span>
        </motion.div>

        <div className="grid items-center gap-20 pt-24 lg:grid-cols-[0.7fr_1.5fr] lg:gap-24 lg:pt-36">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9 }}
            className="relative hidden lg:block"
          >
            <div className="sticky top-32">
              <div className="-mt-5 h-px w-20 bg-[#a89577]/40" />

              <p className="mt-5 max-w-[210px] text-[9px] uppercase leading-5 tracking-[0.3em] text-white/25">
                The beginning of the investigation.
              </p>
            </div>
          </motion.div>

          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="mb-8 text-[9px] uppercase tracking-[0.5em] text-[#a89577]"
            >
              The truth behind the script
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-serif text-[48px] leading-[0.98] tracking-[-0.04em] text-[#eeeae2] sm:text-[60px] md:text-[76px] lg:text-[92px]"
            >
              What If The Reality
              <br />
              <span className="text-white/35">You Know Was Never</span>
              <br />
              <span className="text-[#a89577]">The Whole Story?</span>
            </motion.h2>

            <motion.div
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: 90, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                delay: 0.3,
              }}
              className="mt-12 h-px bg-[#a89577]/50"
            />

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.9,
                delay: 0.35,
              }}
              className="mt-10 max-w-2xl"
            >
              <p className="text-[15px] leading-8 text-white/45 md:text-[17px] md:leading-9">
                Arthur Renn spent years questioning the systems, beliefs, and
                invisible forces that shape the way we see the world.
              </p>

              <p className="mt-7 text-[15px] leading-8 text-white/45 md:text-[17px] md:leading-9">
                Now, he reveals what he discovered—and challenges you to look
                beyond the reality you were taught to accept.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.7 }}
              className="mt-14 flex items-center gap-8"
            >
              <div className="h-px w-10 bg-white/10" />

              <span className="text-[8px] uppercase tracking-[0.4em] text-white/20">
                Arthur Renn
              </span>

              <span className="text-[8px] uppercase tracking-[0.4em] text-[#a89577]/60">
                Chapter 01
              </span>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          animate={{
            y: [0, 6, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          className="mt-28 flex justify-center md:mt-36"
        >
          <ArrowDown size={16} strokeWidth={1} className="text-[#a89577]" />
        </motion.div>
      </div>
    </section>
  );
}
