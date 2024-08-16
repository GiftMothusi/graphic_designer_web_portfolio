import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-full">
        <Hero/>
        <Testimonials/>
        <Footer/>
    </main>
  );
}
