import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "./ui/card";

const data = [
  {
    link: "https://easy-lld.netlify.app",
    title: "Easy LLD",
    description:
      "Easy LLD is a platform to learn Low Level Design through an interactive and engaging quiz.",
    tags: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Spring Boot",
      "PostgreSQL",
      "Axios",
      "Docker",
    ],
    image: [
      "/lld/1.png",
      "/lld/2.png",
      "/lld/3.png",
      "/lld/4.png",
      "/lld/5.png",
    ],
  },
  {
    link: "https://ncr-twitter.netlify.app/",
    title: "NCR Twitter",
    description:
      "NCR Twitter is a modern Twitter clone showcasing real-time updates, user authentication, and responsive design.",
    tags: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "NextAuth",
      "Prisma",
      "MongoDB",
      "Zustand",
    ],
    image: [
      "/twitter/1.png",
      "/twitter/2.png",
      "/twitter/3.png",
      "/twitter/4.png",
      "/twitter/5.png",
    ],
  },
  {
    link: "https://ncroom.netlify.app/",
    title: "NCRoom",
    description:
      "NCRoom is a powerful and intuitive Zoom clone that takes your virtual meetings to the next level.",
    tags: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Clerk",
      "getsream.io",
      "shadcn/ui",
    ],
    image: ["/zoom/1.png", "/zoom/2.png", "/zoom/3.png", "/zoom/4.png"],
  },
  {
    link: "https://nithin-beast-morph.netlify.app/",
    title: "Beast Morph",
    description:
      "Beast Morph, a dynamic web application that offers personalized workout routines curated by advanced algorithms.",
    tags: ["React", "Tailwind CSS", "JavaScript", "Netlify"],
    image: ["/gym/1.png", "/gym/2.png", "/gym/3.png"],
  },
  {
    link: "https://github.com/NithinChowdaryRavuri/facial_expression_recognition",
    title: "Facial Expression recognition model",
    description:
      "Designed and trained a highly efficient CNN-based facial expression recognition model using Python and OpenCV.",
    tags: ["CNN", "OpenCV", "Python"],
    image: ["/CNN/1.png"],
  },
  {
    link: "https://ncr-portfolio.netlify.app/",
    title: "Svelte Portfolio",
    description: "An older version of my portfolio built using Svelte.",
    tags: ["Svelte", "Tailwind CSS", "particles.js", "Font Awesome icons"],
    image: [
      "/svelte_portfolio/1.png",
      "/svelte_portfolio/2.png",
      "/svelte_portfolio/3.png",
    ],
  },
];

const Projects = () => {
  return (
    <section className="max-w-7xl w-full mx-auto mt-4">
      <h1 className="text-4xl font-semibold lg:text-5xl pt-5">Projects</h1>
      <p className="leading-7 text-muted-foreground mt-2">
        Check out what projects I have created, swipe or use the arrows to
        scroll through the carousel.
      </p>
      <div className="py-12 grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 grid-cols-1">
        {data.map((item) => (
          <div className="w-full rounded-2xl relative" key={item.title}>
            <div className="overflow-hidden flex justify-center">
              <Carousel className="w-full max-w-xs">
                <CarouselContent>
                  {item.image.map((_, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center">
                            <img src={item.image[index]} alt="not working" />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="hidden lg:block">
                  <CarouselPrevious />
                  <CarouselNext />
                </div>
              </Carousel>
            </div>
            <a href={item.link} className="group block mx-4" target="_blank">
              <div className="mt-4">
                <h2 className="font-medium text-lg hover:underline">
                  {item.title}
                </h2>
                <p className="mt-1 text-muted-foreground line-clamp-3">
                  {item.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.tags.map((tagItem, index) => (
                    <span
                      className="inline-flex items-center rounded-md bg-blue-100 px-3 py-1.5 text-xs sm:text-sm font-medium text-blue-500 ring-2 ring-inset ring-primary/20"
                      key={index}
                    >
                      {tagItem}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
