import Hero from "@/components/Hero";
import Tech from "@/components/Tech";
import { Code } from "@/components/Code";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <section className="w-full px-6 pb-12 antialiased bg-white">
      <Hero />
      <Tech />
      <Code />
      <Projects />
    </section>
  );
}
