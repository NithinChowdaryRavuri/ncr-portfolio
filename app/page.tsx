import Hero from "@/components/Hero";
import Tech from "@/components/Tech";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="relative w-full pb-12">
      <Hero />
      <Tech />
      <Projects />
    </main>
  );
}
