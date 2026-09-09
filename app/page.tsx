import Hero from "@/components/Hero";
import RealityManifesto from "@/components/RealityManifesto";
import BehindTheScript from "@/components/BehindTheScript";
import BookChapter from "@/components/BookChapter";
import FacebookPost from "@/components/FacebookPost";
import Reviews from "@/components/Reviews";
import { Analytics } from "@vercel/analytics/next";

export default function Home() {
  return (
    <>
      <Hero />
      <RealityManifesto />
      <BehindTheScript />
      <BookChapter />
      <Reviews />
      <FacebookPost />
      <Analytics />
    </>
  );
}
