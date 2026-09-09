import Hero from "@/components/Hero";
import RealityManifesto from "@/components/RealityManifesto";
import BehindTheScript from "@/components/BehindTheScript";
import BookChapter from "@/components/BookChapter";
import FacebookPost from "@/components/FacebookPost";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <RealityManifesto />
      <BehindTheScript />
      <BookChapter />
      <Reviews />
      <FacebookPost />
      <Footer />
    </>
  );
}
