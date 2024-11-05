"use client";
import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
import {motion} from "framer-motion";
import startsBg from "@/assets/stars.png";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <motion.section
    style={{
      backgroundImage: `url(${startsBg.src})`,
    }}
    animate={{
      backgroundPositionX:startsBg.width,
    }}
    transition={{
      repeat:Infinity,
      duration:30,
      ease:"linear",
    }}
    >
    <Header/>
    <HeroSection/>
    <FeaturesSection/>
    <Footer/>
    </motion.section>
  );
}