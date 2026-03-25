import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

type Project = {
  link: string;
  title: string;
  description: string;
  tags: string[];
  images: string[];
  ctaLabel?: string;
};

const data: Project[] = [
  {
    link: "https://easy-lld.netlify.app",
    title: "Easy LLD",
    description:
      "An interactive platform for learning low level design through guided quizzes, structured problem solving, and a clean study experience.",
    tags: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Spring Boot",
      "PostgreSQL",
      "Axios",
      "Docker",
    ],
    images: [
      "/lld/1.png",
      "/lld/2.png",
      "/lld/3.png",
      "/lld/4.png",
      "/lld/5.png",
    ],
    ctaLabel: "View Live Project",
  },
  {
    link: "https://ncr-twitter.netlify.app/",
    title: "NCR Twitter",
    description:
      "A modern Twitter-inspired social app featuring real-time updates, authentication, and a responsive interface for everyday interactions.",
    tags: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "NextAuth",
      "Prisma",
      "MongoDB",
      "Zustand",
    ],
    images: [
      "/twitter/1.png",
      "/twitter/2.png",
      "/twitter/3.png",
      "/twitter/4.png",
      "/twitter/5.png",
    ],
    ctaLabel: "View Live Project",
  },
  {
    link: "https://ncroom.netlify.app/",
    title: "NCRoom",
    description:
      "A video meeting experience inspired by Zoom with authentication, room management, and a polished collaborative interface.",
    tags: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Clerk",
      "GetStream",
      "shadcn/ui",
    ],
    images: ["/zoom/1.png", "/zoom/2.png", "/zoom/3.png", "/zoom/4.png"],
    ctaLabel: "View Live Project",
  },
  {
    link: "https://nithin-beast-morph.netlify.app/",
    title: "Beast Morph",
    description:
      "A fitness-focused web app that generates personalized workout routines with a straightforward, energetic user experience.",
    tags: ["React", "Tailwind CSS", "JavaScript", "Netlify"],
    images: ["/gym/1.png", "/gym/2.png", "/gym/3.png"],
    ctaLabel: "View Live Project",
  },
  {
    link: "https://github.com/NithinChowdaryRavuri/facial_expression_recognition",
    title: "Facial Expression Recognition Model",
    description:
      "A computer vision project focused on training and evaluating a CNN-based facial expression recognition model with Python and OpenCV.",
    tags: ["CNN", "OpenCV", "Python"],
    images: ["/CNN/1.png"],
    ctaLabel: "View Repository",
  },
  {
    link: "https://ncr-portfolio.netlify.app/",
    title: "Svelte Portfolio",
    description:
      "An earlier portfolio iteration built with Svelte, focused on experimentation with motion and personal site design.",
    tags: ["Svelte", "Tailwind CSS", "particles.js", "Font Awesome icons"],
    images: [
      "/svelte_portfolio/1.png",
      "/svelte_portfolio/2.png",
      "/svelte_portfolio/3.png",
    ],
    ctaLabel: "View Live Project",
  },
];

const getCtaLabel = (project: Project) => {
  if (project.ctaLabel) {
    return project.ctaLabel;
  }

  return project.link.includes("github.com")
    ? "View Repository"
    : "View Live Project";
};

const ProjectPreview = ({ project }: { project: Project }) => {
  if (project.images.length === 1) {
    return (
      <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] border border-border/70 bg-slate-100">
        <Image
          src={project.images[0]}
          alt={`${project.title} preview`}
          fill
          sizes="(min-width: 1024px) 45vw, 100vw"
          className="object-cover object-top"
        />
      </div>
    );
  }

  return (
    <Carousel className="w-full" opts={{ loop: true }}>
      <CarouselContent className="-ml-0">
        {project.images.map((image, index) => (
          <CarouselItem className="pl-0" key={image}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] border border-border/70 bg-slate-100">
              <Image
                src={image}
                alt={`${project.title} screenshot ${index + 1}`}
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover object-top"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-4 top-1/2 h-10 w-10 -translate-y-1/2 border-white/60 bg-white/85 text-slate-900 shadow-lg backdrop-blur hover:bg-white disabled:opacity-40" />
      <CarouselNext className="right-4 top-1/2 h-10 w-10 -translate-y-1/2 border-white/60 bg-white/85 text-slate-900 shadow-lg backdrop-blur hover:bg-white disabled:opacity-40" />
    </Carousel>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section-shell mt-16 sm:mt-20">
      <div className="max-w-3xl">
        <p className="section-eyebrow">Projects</p>
        <h2 className="section-title mt-4">
          Selected work that shows how I think, build, and polish products.
        </h2>
        <p className="section-copy mt-4">
          A mix of full-stack applications, interactive platforms, and focused
          experiments that highlight both implementation depth and user
          experience.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6">
        {data.map((item) => (
          <Card key={item.title} className="overflow-hidden bg-white/85">
            <div className="grid gap-0 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)]">
              <CardContent className="p-4 sm:p-6">
                <ProjectPreview project={item} />
              </CardContent>

              <div className="flex flex-col px-6 pb-8 pt-2 sm:px-8 sm:pb-10 lg:py-8">
                <p className="section-eyebrow">Featured Project</p>
                <h3 className="mt-4 text-3xl font-semibold tracking-tight text-foreground">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-muted-foreground">
                  {item.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2.5">
                  {item.tags.map((tagItem) => (
                    <span
                      className="chip px-3 py-1.5 text-sm text-foreground/80"
                      key={tagItem}
                    >
                      {tagItem}
                    </span>
                  ))}
                </div>

                <div className="mt-8">
                  <Button
                    asChild
                    size="lg"
                    className="rounded-full bg-primary px-6 text-primary-foreground shadow-[0_20px_40px_-24px_rgba(15,118,110,0.75)]"
                  >
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {getCtaLabel(item)}
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
