"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Brain,
  Compass,
  Eye,
  Network,
} from "lucide-react";

const features = [
  {
    icon: Eye,
    title: "Question",
    subtitle: "Perception",
  },
  {
    icon: Brain,
    title: "Understand",
    subtitle: "Influence",
  },
  {
    icon: Network,
    title: "Recognize",
    subtitle: "Patterns",
  },
  {
    icon: Compass,
    title: "Reclaim",
    subtitle: "Thinking",
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#0b0b0a] text-[#eeeae2]"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-18%] h-[850px] w-[850px] -translate-x-1/2 rounded-full bg-[#b09a76]/[0.055] blur-[180px]" />

        <div className="absolute bottom-[-25%] left-1/2 h-[650px] w-[900px] -translate-x-1/2 rounded-full bg-[#8f8069]/[0.045] blur-[180px]" />

        <div className="absolute left-[-10%] top-[40%] h-[400px] w-[400px] rounded-full bg-[#d8d1c5]/[0.025] blur-[150px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(11,11,10,0.3)_55%,rgba(11,11,10,0.96)_100%)]" />

        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0b0b0a] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0b0b0a] to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-6rem)] max-w-7xl flex-col items-center px-6 pb-16 pt-8 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-4 flex items-center gap-4"
        >
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#a89577]" />

          <span className="text-[9px] uppercase tracking-[0.5em] text-[#a89577]">
            The Buried Reality
          </span>

          <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#a89577]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.1,
            ease: "easeOut",
          }}
          className="relative z-20 mt-8 text-center"
        >
          <p className="mb-4 text-[9px] uppercase tracking-[0.5em] text-white/25">
            A question worth asking
          </p>

          <h1 className="max-w-5xl font-serif text-[46px] leading-[0.92] tracking-[-0.035em] text-[#eeeae2] sm:text-[62px] md:text-[76px] lg:text-[92px]">
            What If The Reality
            <br />
            <span className="text-[#b7aa95]">You Know Was Never</span>
            <br />
            <span className="bg-gradient-to-r from-[#e9e2d5] via-[#b09a76] to-[#80745f] bg-clip-text text-transparent">
              The Whole Story?
            </span>
          </h1>
        </motion.div>

        <div className="relative flex w-full flex-1 items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-serif text-[120px] uppercase tracking-[0.08em] text-white/[0.018] sm:text-[180px] md:text-[250px] lg:text-[320px]"
          >
            REALITY
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 360,
            }}
            transition={{
              opacity: { duration: 1.5 },
              scale: { duration: 1.5 },
              rotate: {
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              },
            }}
            className="pointer-events-none absolute h-[340px] w-[340px] rounded-full border border-[#a89577]/[0.10] sm:h-[430px] sm:w-[430px] md:h-[500px] md:w-[500px] lg:h-[560px] lg:w-[560px]"
          >
            <span className="absolute left-1/2 top-[-3px] h-[6px] w-[6px] -translate-x-1/2 rounded-full bg-[#c8b89a] shadow-[0_0_20px_#b09a76]" />

            <span className="absolute bottom-[12%] right-[4%] h-1.5 w-1.5 rounded-full bg-[#8f8069]/70" />
          </motion.div>

          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 55,
              repeat: Infinity,
              ease: "linear",
            }}
            className="pointer-events-none absolute h-[430px] w-[430px] rounded-full border border-dashed border-[#d8d1c5]/[0.045] sm:h-[540px] sm:w-[540px] md:h-[620px] md:w-[620px] lg:h-[700px] lg:w-[700px]"
          />

          <motion.div
            animate={{
              opacity: [0.25, 0.45, 0.25],
              scale: [0.96, 1.03, 0.96],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute h-[330px] w-[250px] rounded-full bg-[#a89577]/[0.10] blur-[90px] sm:h-[400px] sm:w-[300px]"
          />

          <motion.div
            initial={{
              opacity: 0,
              y: 70,
              scale: 0.9,
              rotateZ: -2,
            }}
            animate={{
              opacity: 1,
              y: [0, -12, 0],
              scale: 1,
              rotateZ: [-1, 0.5, -1],
            }}
            transition={{
              opacity: {
                duration: 1.2,
                delay: 0.3,
              },
              y: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              },
              rotateZ: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              },
              scale: {
                duration: 1.2,
                delay: 0.3,
              },
            }}
            className="relative z-10 mt-10 w-[215px] sm:w-[270px] md:w-[300px] lg:w-[320px]"
          >
            <div className="absolute -inset-8 rounded-[20px] bg-[#a89577]/[0.08] blur-3xl" />

            <div className="absolute -bottom-10 left-1/2 h-16 w-[85%] -translate-x-1/2 rounded-full bg-black/80 blur-3xl" />

            <div className="relative aspect-[2/3] overflow-hidden rounded-[4px] shadow-[0_50px_100px_rgba(0,0,0,0.85)]">
              <Image
                src="/ebook2.webp"
                alt="Reality Before the Script book cover"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 640px) 215px, (max-width: 768px) 270px, 300px"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.13] via-transparent to-black/35" />

              <div className="pointer-events-none absolute inset-0 rounded-[4px] ring-1 ring-[#e8e0d2]/15" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="absolute left-0 top-1/2 hidden -translate-y-1/2 lg:block"
          >
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-[#a89577]/40" />

              <div>
                <div className="text-[8px] uppercase tracking-[0.4em] text-[#a89577]">
                  Chapter 01
                </div>

                <div className="mt-2 font-serif text-sm text-white/55">
                  Perception
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="absolute right-0 top-1/2 hidden -translate-y-1/2 lg:block"
          >
            <div className="flex items-center gap-4 text-right">
              <div>
                <div className="text-[8px] uppercase tracking-[0.4em] text-[#a89577]">
                  Chapter 07
                </div>

                <div className="mt-2 font-serif text-sm text-white/55">
                  Reclaim
                </div>
              </div>

              <div className="h-px w-12 bg-[#a89577]/40" />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.65,
          }}
          className="relative z-20 flex flex-col items-center text-center"
        >
          <p className="max-w-xl text-[13px] leading-6 text-[#b9b4aa]/55 md:text-[14px]">
            Arthur Renn spent years questioning the systems, beliefs, and
            invisible forces that shape the way we see the world.
          </p>

          <div className="relative mt-7">
            <motion.div
              animate={{
                opacity: [0, 0.7, 0],
                scale: [0.8, 1.25, 1.45],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                repeatDelay: 1.5,
                ease: "easeOut",
              }}
              className="pointer-events-none absolute -inset-8 rounded-full bg-[#b09a76]/20 blur-2xl"
            />

            <motion.div
              animate={{
                opacity: [0, 0.45, 0],
                scale: [0.85, 1.15, 1.45],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                repeatDelay: 1.5,
                ease: "easeOut",
              }}
              className="pointer-events-none absolute -inset-3 rounded-full border border-[#c8b89a]/30"
            />

            <motion.div
              animate={{
                opacity: [0, 0.25, 0],
                scale: [0.9, 1.2, 1.5],
              }}
              transition={{
                duration: 2.8,
                delay: 0.35,
                repeat: Infinity,
                repeatDelay: 1.5,
                ease: "easeOut",
              }}
              className="pointer-events-none absolute -inset-3 rounded-full border border-[#a89577]/20"
            />

            <Link
              href="/products/reality-before-the-script"
              className="group relative flex items-center gap-5 rounded-full border border-[#c8b89a]/15 bg-[#151513] px-8 py-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#eeeae2] shadow-[0_15px_50px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-[#c8b89a]/30 hover:bg-[#1b1a17]"
            >
              <span>Enter The Reality</span>

              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b09a76] text-[#0b0b0a] transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight size={14} strokeWidth={2.5} />
              </span>
            </Link>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 1,
        }}
        className="relative z-20 mx-auto grid max-w-7xl grid-cols-2 border-t border-[#d8d1c5]/[0.08] px-6 py-5 md:grid-cols-4 md:px-10 lg:px-16"
      >
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
              className={`flex items-center justify-center gap-3 px-3 py-3 ${
                index !== 0 ? "border-l border-[#d8d1c5]/[0.07]" : ""
              }`}
            >
              <Icon size={18} strokeWidth={1.2} className="text-[#a89577]" />

              <div className="text-left">
                <div className="text-[8px] font-medium uppercase tracking-[0.3em] text-[#e8e4dc]">
                  {feature.title}
                </div>

                <div className="mt-1 text-[7px] uppercase tracking-[0.28em] text-white/25">
                  {feature.subtitle}
                </div>
              </div>
            </div>
          );
        })}
      </motion.div>

      <motion.div
        animate={{
          y: [0, 6, 0],
          opacity: [0.35, 0.7, 0.35],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[100px] left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
      >
        <span className="text-[7px] uppercase tracking-[0.4em] text-white/25">
          Scroll
        </span>

        <ArrowDown size={12} strokeWidth={1} className="text-[#a89577]" />
      </motion.div>
    </section>
  );
}
