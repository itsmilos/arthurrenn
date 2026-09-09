"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useRef } from "react";

const chapters = [
  {
    number: "01",
    title: "The Stories We Inherit",
    description:
      "The narratives we are born into. The assumptions passed from one generation to another. The invisible framework that quietly shapes what we believe is possible.",
    keyword: "Inheritance",
  },
  {
    number: "02",
    title: "The Beliefs We Rarely Question",
    description:
      "Ideas that become truths simply because we have heard them often enough. Beliefs that feel like our own, even when they were given to us long before we could question them.",
    keyword: "Belief",
  },
  {
    number: "03",
    title: "The Psychological Patterns Shaping Our Decisions",
    description:
      "The hidden mechanisms behind our choices. Fear, desire, status, identity, memory, and the patterns that influence our decisions long before we become aware of them.",
    keyword: "Psychology",
  },
  {
    number: "04",
    title: "The Invisible Forces Competing For Our Attention",
    description:
      "Attention has become one of the most valuable resources in existence. Systems, institutions, media, and technology constantly compete to shape what we notice—and what we ignore.",
    keyword: "Influence",
  },
  {
    number: "05",
    title: "The Possibility That Reality Is Far More Flexible",
    description:
      "What happens when the boundaries we accepted begin to disappear? When perception changes, possibilities change with it. Perhaps reality is not as fixed as we were taught to believe.",
    keyword: "Possibility",
  },
];

export default function BookChapters() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#0b0b0a] text-[#eeeae2]"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[20%] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#a89577]/[0.025] blur-[150px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
            backgroundSize: "90px 90px",
          }}
        />
      </div>

      {/* INTRO */}
      <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-24 sm:px-8 sm:pb-20 lg:px-16 lg:pb-24 lg:pt-32">
        <div className="grid items-end gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Left */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-[#a89577]" />

              <span className="text-[9px] uppercase tracking-[0.38em] text-[#a89577]">
                Inside the book
              </span>
            </div>

            <h2 className="max-w-xl font-serif text-[43px] leading-[0.94] tracking-[-0.045em] sm:text-[55px] lg:text-[70px]">
              Five layers.
              <br />
              <span className="text-[#a89577]">One reality</span>
              <br />
              to question.
            </h2>
          </div>

          {/* Right */}
          <div className="max-w-xl lg:pb-1">
            <p className="mb-4 text-[9px] uppercase tracking-[0.35em] text-[#77736b]">
              Reality Before The Script
            </p>

            <h3 className="mb-5 max-w-lg font-serif text-[24px] leading-[1.15] text-[#d8d1c4] sm:text-[29px]">
              What lies beneath the reality we&apos;ve been taught to accept?
            </h3>

            <p className="text-[14px] leading-[1.85] text-[#8f8b83] sm:text-[15px]">
              Reality Before the Script takes you through a series of ideas that
              challenge the way we understand perception, influence, belief,
              power, wealth, consciousness, and human behavior.
            </p>

            <p className="mt-4 text-[14px] leading-[1.85] text-[#8f8b83] sm:text-[15px]">
              Each chapter uncovers another layer. Not to give you another
              version of the truth, but to make you question the version you
              already have.
            </p>
          </div>
        </div>

        <div className="mt-12 flex items-center gap-3 sm:mt-16">
          <ArrowDown size={13} strokeWidth={1} className="text-[#a89577]" />

          <span className="text-[8px] uppercase tracking-[0.35em] text-[#5e5b55]">
            Explore the chapters
          </span>
        </div>
      </div>

      {/* CHAPTER LIST */}
      <div className="relative mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:px-16 lg:pb-28">
        <div className="border-t border-white/[0.09]">
          {chapters.map((chapter, index) => (
            <Chapter key={chapter.number} chapter={chapter} index={index} />
          ))}
        </div>
      </div>

      {/* END */}
      <div className="relative mx-auto max-w-5xl px-5 pb-28 pt-12 text-center sm:px-8 lg:pb-40 lg:pt-20">
        <div className="mb-7 flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-[#a89577]/40" />

          <span className="text-[8px] uppercase tracking-[0.4em] text-[#a89577]">
            The question remains
          </span>

          <span className="h-px w-8 bg-[#a89577]/40" />
        </div>

        <h3 className="font-serif text-[38px] leading-[0.98] tracking-[-0.04em] text-[#eeeae2] sm:text-[50px] lg:text-[66px]">
          What if reality is
          <br />
          <span className="text-[#a89577]">more flexible</span> than we thought?
        </h3>

        <motion.div
          whileHover={{ x: 4, y: -4 }}
          className="mt-8 inline-flex text-[#a89577]"
        >
          <ArrowUpRight size={20} strokeWidth={1} />
        </motion.div>
      </div>
    </section>
  );
}

function Chapter({
  chapter,
  index,
}: {
  chapter: {
    number: string;
    title: string;
    description: string;
    keyword: string;
  };
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "end 10%"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 1],
    [0.45, 1, 1, 0.45],
  );

  const x = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [index % 2 === 0 ? -12 : 12, 0, index % 2 === 0 ? 8 : -8],
  );

  const numberY = useTransform(scrollYProgress, [0, 1], [25, -25]);

  return (
    <section id="chapters">
      <motion.div
        ref={ref}
        style={{ opacity }}
        className="group relative border-b border-white/[0.09]"
      >
        <div className="relative overflow-hidden">
          <motion.div
            style={{ y: numberY }}
            className="pointer-events-none absolute right-[-5px] top-1/2 -translate-y-1/2 select-none font-serif text-[150px] font-light leading-none tracking-[-0.08em] text-white/[0.025] sm:right-0 sm:text-[220px] lg:text-[300px]"
          >
            {chapter.number}
          </motion.div>

          <motion.div
            style={{ x }}
            className="relative grid gap-6 py-9 sm:py-11 lg:grid-cols-[90px_1fr_280px] lg:items-center lg:gap-12 lg:py-14"
          >
            <div className="flex items-center gap-3 lg:block">
              <span className="font-serif text-[25px] font-light text-[#a89577] sm:text-[28px]">
                {chapter.number}
              </span>

              <span className="h-px w-7 bg-[#a89577]/30 lg:mt-4 lg:block" />

              <span className="text-[8px] uppercase tracking-[0.3em] text-[#5d5953] lg:mt-3 lg:block">
                Chapter
              </span>
            </div>

            <div className="max-w-3xl">
              <div className="mb-3 flex items-center gap-3">
                <span className="text-[8px] uppercase tracking-[0.32em] text-[#77736b]">
                  {chapter.keyword}
                </span>
              </div>

              <h3 className="max-w-3xl font-serif text-[31px] leading-[1.02] tracking-[-0.035em] text-[#e5dfd4] transition-colors duration-500 group-hover:text-[#c8b89a] sm:text-[39px] md:text-[46px] lg:text-[53px]">
                {chapter.title}
              </h3>
            </div>

            <div className="max-w-sm lg:justify-self-end">
              <p className="text-[13px] leading-[1.8] text-[#858179] sm:text-[14px]">
                {chapter.description}
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
