
import Hero from "@/screens/home/Hero";
import Projects from "@/screens/home/Projects";
import About from "@/screens/home/About";

export default function Home() {
  return (
    <main>
      <section className="max-lg:hidden">
        <Hero />
        <Projects />
        <About />
      </section>
      <section className="lg:hidden">
        <Hero />
        <About />
        <Projects />
      </section>
    </main>
  );
}
