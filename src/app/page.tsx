import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import PhotographyPage from "@/components/PhotographyPage";
import PhotoGrid from "@/components/PhotoGrid";
import Image from "next/image";
import Illustraions from "@/components/Illustraions";

export default function Home() {
  return (
    <main className="w-full h-full">
        <FloatingNav navItems={navItems}/>
        <Hero/>
        <PhotographyPage/>
        <PhotoGrid/>
        <Illustraions/>
        <Testimonials/>
        <Footer/>
    </main>
  );
}
