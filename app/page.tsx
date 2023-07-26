import About from "@/components/About";
import Cursor from "@/components/AnimatedCursor";
import { ContactUs } from "@/components/ContactForm";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProjectSection from "@/components/ProjectSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <main>
        <About />
        <ProjectSection />
        <ContactUs />
      </main>

      <Cursor />
    </>
  );
}
