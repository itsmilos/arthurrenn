"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Quote, Star } from "lucide-react";

const reviews = [
  {
    quote:
      "I finished this book with more questions than answers. And somehow, that was exactly what I needed.",
    name: "Michael R.",
    role: "Verified Reader",
  },
  {
    quote:
      "It made me question ideas I had accepted for years without ever asking where they came from.",
    name: "Daniel K.",
    role: "Reader",
  },
  {
    quote:
      "Some books give you information. This one changes the way you look at the information you already have.",
    name: "James W.",
    role: "Verified Reader",
  },
  {
    quote:
      "I had to put it down several times just to think about what I had read.",
    name: "Ethan M.",
    role: "Reader",
  },
];

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="relative overflow-hidden bg-[#eeeae2] text-[#0b0b0a]"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-180px] top-[10%] h-[500px] w-[500px] rounded-full bg-[#a89577]/[0.10] blur-[150px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.2) 1px, transparent 1px)",
            backgroundSize: "90px 90px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28 lg:px-16 lg:py-36">
        <div className="mb-16 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-20">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-9 bg-[#a89577]" />

              <span className="text-[9px] font-medium uppercase tracking-[0.38em] text-[#81796d]">
                Reader&apos;s voices
              </span>
            </div>

            <h2 className="max-w-xl font-serif text-[44px] leading-[0.94] tracking-[-0.045em] sm:text-[56px] lg:text-[70px]">
              They read
              <br />
              <span className="text-[#a89577]">between</span>
              <br />
              the lines.
            </h2>
          </div>

          <div className="max-w-lg lg:pb-2">
            <p className="text-[14px] leading-[1.9] text-[#625e57] sm:text-[15px]">
              Reality Before the Script was written to leave a question behind
              long after the final page.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={11}
                    fill="currentColor"
                    strokeWidth={0}
                    className="text-[#a89577]"
                  />
                ))}
              </div>

              <span className="text-[9px] uppercase tracking-[0.25em] text-[#817b72]">
                Reader reactions
              </span>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative border-y border-[#0b0b0a]/10 py-12 sm:py-16 lg:py-20"
        >
          <Quote
            size={42}
            strokeWidth={0.7}
            className="absolute left-0 top-8 text-[#a89577]/50 sm:left-2 sm:top-10"
          />

          <div className="mx-auto max-w-5xl px-8 text-center sm:px-12">
            <p className="font-serif text-[28px] leading-[1.2] tracking-[-0.025em] text-[#181714] sm:text-[37px] md:text-[44px] lg:text-[52px]">
              &ldquo;{reviews[0].quote}&rdquo;
            </p>

            <div className="mt-9 flex flex-col items-center gap-2">
              <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#27251f]">
                {reviews[0].name}
              </span>

              <span className="text-[8px] uppercase tracking-[0.3em] text-[#91897d]">
                {reviews[0].role}
              </span>
            </div>
          </div>
        </motion.div>

        <div className="grid border-b border-[#0b0b0a]/10 md:grid-cols-3">
          {reviews.slice(1).map((review, index) => (
            <motion.article
              key={review.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="group border-b border-[#0b0b0a]/10 py-9 md:border-b-0 md:border-r md:px-8 md:py-12 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="font-serif text-xl text-[#a89577]">
                  0{index + 2}
                </span>

                <div className="flex gap-1 opacity-60 transition-opacity duration-300 group-hover:opacity-100">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={9}
                      fill="currentColor"
                      strokeWidth={0}
                      className="text-[#a89577]"
                    />
                  ))}
                </div>
              </div>

              <p className="font-serif text-[21px] leading-[1.3] tracking-[-0.015em] text-[#26241f]">
                &ldquo;{review.quote}&rdquo;
              </p>

              <div className="mt-7">
                <p className="text-[9px] font-medium uppercase tracking-[0.25em] text-[#39362f]">
                  {review.name}
                </p>

                <p className="mt-1 text-[8px] uppercase tracking-[0.28em] text-[#91897d]">
                  {review.role}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="flex flex-col gap-6 pt-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-[8px] uppercase tracking-[0.35em] text-[#91897d]">
              After the final page
            </p>

            <p className="max-w-xl font-serif text-[24px] leading-[1.2] text-[#24221d] sm:text-[29px]">
              Some books end when you close them.
              <br />
              <span className="text-[#a89577]">This one might not.</span>
            </p>
          </div>

          <motion.div
            whileHover={{ x: 4, y: -4 }}
            transition={{ duration: 0.2 }}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#0b0b0a]/15 text-[#a89577]"
          >
            <ArrowUpRight size={17} strokeWidth={1} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
