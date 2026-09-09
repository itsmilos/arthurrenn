import type { Metadata } from "next";
import ProductPage from "./ProductPage";

export const metadata: Metadata = {
  title: "Reality Before the Script - Arthur Renn",

  description:
    "Read Reality Before the Script by Arthur Renn, a digital book exploring perception, influence, belief, consciousness, and the hidden structures shaping the reality we experience.",

  alternates: {
    canonical: "https://jonasriven.com/products/reality-before-the-script",
  },

  openGraph: {
    title: "Reality Before the Script — Arthur Renn",
    description: "Discover Reality Before the Script by Arthur Renn.",
    url: "https://jonasriven.com/products/reality-before-the-script",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Reality Before the Script by Arthur Renn",
      },
    ],
  },
};

export default function Page() {
  return <ProductPage />;
}
