"use client";

import { motion } from "framer-motion";
import { Eye, ArrowDown } from "lucide-react";

const paragraphs = [
  `I used to believe reality was something we simply inherited. A world already defined for us. Rules already written. Roles already assigned.`,

  `Then I discovered how much of that reality is constructed.`,

  `My journey began with questions most people never think to ask. Who shapes the stories we believe? Why do certain ideas spread while others disappear? How much of what we call truth is actually interpretation?`,

  `The deeper I went, the more uncomfortable the answers became.`,

  `I encountered people who understood something most of us overlook: controlling a person does not always require force. If you can influence what someone notices, what they fear, what they desire, and what they believe is possible, you can influence the decisions that follow.`,
];

const principles = [
  {
    number: "01",
    word: "Attention",
    description: "became currency.",
  },
  {
    number: "02",
    word: "Belief",
    description: "became leverage.",
  },
  {
    number: "03",
    word: "Perception",
    description: "became power.",
  },
];

const closingParagraphs = [
  `What fascinated me most was that these principles were not confined to one institution or one group. They appeared across psychology, human behavior, symbolism, persuasion, wealth, social structures, ancient philosophies, and the modern systems that compete for our attention every day.`,

  `I began studying the patterns. How narratives are built. How beliefs are reinforced. How crowds can be moved. How individuals can be persuaded without realizing they are being persuaded.`,

  `And eventually, I had to confront a difficult possibility:`,
];

export default function RealityManifesto() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0b0b0a] px-6 py-32 text-[#eeeae2] md:px-10 lg:px-16 lg:py-44"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[15%] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#a89577]/[0.025] blur-[160px]" />

        <div className="absolute right-[-15%] top-[45%] h-[500px] w-[500px] rounded-full bg-[#c8b89a]/[0.025] blur-[150px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(11,11,10,0.7)_85%)]" />
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
                The Beginning
              </p>

              <p className="mt-1 text-[9px] uppercase tracking-[0.25em] text-white/25">
                Before The Script
              </p>
            </div>
          </div>

          <span className="hidden text-[8px] uppercase tracking-[0.4em] text-white/20 sm:block">
            Reality
          </span>
        </motion.div>
      </div>

      <div className="relative mx-auto mt-20 max-w-5xl lg:mt-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <p className="mb-8 text-[9px] uppercase tracking-[0.5em] text-[#a89577]">
            A personal investigation
          </p>

          <h2 className="font-serif text-[42px] leading-[1.02] tracking-[-0.03em] text-[#eeeae2] sm:text-[56px] md:text-[72px] lg:text-[86px]">
            Reality is not always
            <br />
            <span className="text-[#a89577]">what we think it is.</span>
          </h2>
        </motion.div>

        <div className="mt-20 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <div className="sticky top-32">
              <div className="mt-[-20px] h-px w-20 bg-[#a89577]/40" />

              <p className="mt-5 max-w-[220px] text-[9px] uppercase leading-5 tracking-[0.3em] text-white/25">
                Every reality begins with a story.
              </p>
            </div>
          </div>

          <div className="max-w-2xl space-y-9">
            {paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.05,
                }}
                className={
                  index === 1
                    ? "font-serif text-[25px] leading-[1.4] text-[#c8b89a] md:text-[31px]"
                    : "text-[15px] leading-8 text-white/45 md:text-[16px]"
                }
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-32 max-w-7xl border-y border-[#d8d1c5]/[0.08] py-16 md:mt-44 md:py-24">
        <div className="mb-12">
          <p className="text-[8px] uppercase tracking-[0.5em] text-[#a89577]">
            The Patterns
          </p>

          <p className="mt-3 font-serif text-2xl text-[#eeeae2] md:text-3xl">
            Three things changed everything.
          </p>
        </div>

        <div className="grid md:grid-cols-3">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.word}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.8,
                delay: index * 0.12,
              }}
              className={`relative py-8 md:px-10 md:py-4 ${
                index !== 0
                  ? "border-t border-[#d8d1c5]/[0.08] md:border-l md:border-t-0"
                  : ""
              }`}
            >
              <span className="text-[8px] tracking-[0.3em] text-[#a89577]">
                {principle.number}
              </span>

              <h3 className="mt-5 font-serif text-[40px] tracking-[-0.02em] text-[#ddd5c7] md:text-[46px]">
                {principle.word}
              </h3>

              <p className="mt-3 text-[11px] uppercase tracking-[0.25em] text-white/30">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="relative mx-auto mt-32 max-w-5xl md:mt-44">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="text-[8px] uppercase tracking-[0.5em] text-[#a89577]">
              Going deeper
            </p>

            <div className="mt-8 h-px w-20 bg-[#a89577]/40" />
          </div>

          <div className="space-y-9">
            {closingParagraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.08,
                }}
                className={
                  index === 2
                    ? "pt-6 font-serif text-[28px] leading-[1.3] text-[#c8b89a] md:text-[38px]"
                    : "text-[15px] leading-8 text-white/45 md:text-[16px]"
                }
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-36 max-w-6xl text-center md:mt-52">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.1 }}
        >
          <p className="mb-8 text-[8px] uppercase tracking-[0.55em] text-[#a89577]">
            The difficult possibility
          </p>

          <h3 className="font-serif text-[38px] leading-[1.05] tracking-[-0.03em] text-[#eeeae2] sm:text-[48px] md:text-[64px] lg:text-[76px]">
            Perhaps the greatest limitation
            <br className="hidden md:block" />
            in most people's lives
            <br className="hidden md:block" />
            <span className="text-[#a89577]">
              is not the world around them.
            </span>
          </h3>
        </motion.div>
      </div>

      <div className="relative mx-auto mt-28 max-w-4xl text-center md:mt-40">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <div className="mx-auto mb-10 h-px w-16 bg-[#a89577]/50" />

          <p className="font-serif text-[28px] leading-[1.35] text-[#c8b89a] md:text-[38px]">
            It is the version of reality
            <br />
            they have accepted.
          </p>

          <p className="mx-auto mt-10 max-w-2xl text-[14px] leading-7 text-white/35 md:text-[15px]">
            Reality Before the Script is an exploration of what exists beneath
            the stories we are given — and what happens when you begin
            questioning the script itself.
          </p>
        </motion.div>
      </div>

      <div className="relative mx-auto mt-32 max-w-5xl border-t border-[#d8d1c5]/[0.08] pt-16 md:mt-44 md:pt-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-[8px] uppercase tracking-[0.5em] text-[#a89577]">
              An invitation
            </p>

            <h4 className="mt-5 font-serif text-3xl text-[#eeeae2] md:text-4xl">
              Look closer.
            </h4>
          </div>

          <div>
            <p className="text-[14px] leading-7 text-white/40">
              This is not a book asking you to accept every claim as truth. It
              is an invitation to examine the mechanisms behind belief,
              recognize the forces competing for your attention, question
              assumptions you have carried for years, and decide for yourself
              what is real.
            </p>
          </div>
        </div>
      </div>

      <motion.div
        animate={{
          y: [0, 6, 0],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative mt-24 flex justify-center"
      >
        <ArrowDown size={16} strokeWidth={1} className="text-[#a89577]" />
      </motion.div>
    </section>
  );
}
