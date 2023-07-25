import About from "@/components/About";
import Computer from "@/components/Computer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <main>
        <About />
      </main>
      <Computer />
    </>
  );
}
