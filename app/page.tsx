"use client";

import { HomePage } from "@/components/home-page";

export default function Home() {
  return (
    <HomePage
      heroImage={{ slot: "image1", src: "/images/image1.jpeg", alt: "A hire van driving on a scenic country road near North Baddesley in morning light." }}
      supportImage={{ slot: "image2", src: "/images/image2.jpeg", alt: "A customer receiving keys beside a clean hire van on a vehicle hire forecourt." }}
    />
  );
}
