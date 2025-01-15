'use client'

import Image from "next/image";
import Header from "@/components/ui/Header";
import Banner from "@/components/Banner";
import FeaturedMovies from "@/components/FeaturedMovies";
import ScrollButton from "@/components/ui/ScrollButton";

export default function Home() {
  return(
    <main className="min-h-screen bg-black"> 
      <Header />
      <Banner/>
      <ScrollButton />
      <FeaturedMovies/>
    </main>
  )
}
