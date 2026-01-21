
import Hero from "@/screens/home/Hero";
import About from "@/screens/home/About";
import Loader from "@/components/Loader";
import Contact from "@/screens/home/Contact";

export default function Home() {

  return (
    <main>
      <Loader />
      <Hero />
      <About />
      <Contact />
    </main>
  );
}
