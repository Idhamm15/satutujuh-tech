import About from "@/component/About";
import Features from "@/component/Feature";
import Footer from "@/component/Footer";
import Hero from "@/component/Hero";
import LandingHero from "@/component/LandingHero";
import Navbar from "@/component/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <LandingHero/>
      <Features/>
      <About/>
      <Footer/>
    </>
  );
}
