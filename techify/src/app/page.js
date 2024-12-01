import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <Testimonials/>
      <Contact/>
      <Blogs/>
    </div>
  );
}
