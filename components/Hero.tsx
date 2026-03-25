import { ArrowRight, Sparkles } from "lucide-react";

import { Button } from "./ui/button";

const skillHighlights = [
  "Next.js",
  "React",
  "TypeScript",
  "Java",
  "Spring Boot",
  "PostgreSQL",
];

const focusAreas = [
  {
    title: "End-to-end product work",
    description:
      "From designing the interface to wiring the backend and polishing the final experience.",
  },
  {
    title: "Frontend that feels intentional",
    description:
      "Responsive layouts, clean interaction details, and user flows that stay easy to understand.",
  },
  {
    title: "Backend foundations that scale",
    description:
      "APIs, authentication, data modeling, and integrations built with reliability in mind.",
  },
];

const Hero = () => {
  return (
    <section className="section-shell pt-6 sm:pt-10">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] lg:items-stretch">
        <div className="surface-card relative overflow-hidden px-6 py-12 sm:px-10 sm:py-14">
          <div className="absolute inset-x-10 top-0 h-32 rounded-full bg-[radial-gradient(circle,_rgba(52,211,153,0.28),_transparent_70%)] blur-3xl" />
          <p className="section-eyebrow">Portfolio</p>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-7xl">
            Nithin Chowdary Ravuri
            <span className="mt-3 block bg-[linear-gradient(135deg,#0f766e_0%,#0284c7_55%,#4f46e5_100%)] bg-clip-text text-transparent">
              Software Development Engineer
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            I build polished full-stack products that balance thoughtful user
            experience, dependable backend systems, and clean delivery from idea
            to launch.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {skillHighlights.map((skill) => (
              <span className="chip" key={skill}>
                {skill}
              </span>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-primary px-6 text-primary-foreground shadow-[0_20px_40px_-24px_rgba(15,118,110,0.75)]"
            >
              <a href="#projects">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="surface-card px-6 py-7 sm:px-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Sparkles className="h-5 w-5" />
              </div>
              <p className="section-eyebrow tracking-[0.2em]">What I Bring</p>
            </div>
            <div className="mt-6 space-y-6">
              {focusAreas.map((area) => (
                <div key={area.title}>
                  <h2 className="text-xl font-semibold tracking-tight text-foreground">
                    {area.title}
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground sm:text-base">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="surface-card bg-[linear-gradient(135deg,rgba(15,118,110,0.12),rgba(14,165,233,0.08),rgba(255,255,255,0.92))] px-6 py-7 sm:px-8">
            <p className="section-eyebrow">Build Style</p>
            <p className="mt-4 text-2xl font-semibold tracking-tight text-foreground">
              Thoughtful UI. Reliable systems. Product-minded details.
            </p>
            <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
              I enjoy turning rough ideas into responsive, production-ready
              experiences that feel clear, fast, and dependable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
