import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
        <FloatingNav navItems={navItems}/>
        <Hero/>
        <Testimonials/>
        <Footer/>
    </main>
  );
}
