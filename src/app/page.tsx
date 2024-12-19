import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import Photography from "@/components/Photography";
import PhotographyPage from "@/components/PhotographyPage";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-full">
        <FloatingNav navItems={navItems}/>
        <Hero/>
        <Photography/>
        <PhotographyPage/>
        <Testimonials/>
        <Footer/>
    </main>
  );
}
