import {
  ArrowUpRight,
  Code2,
  Database,
  Github,
  Linkedin,
  type LucideIcon,
  MonitorSmartphone,
  Trophy,
  Wrench,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";

type SkillGroup = {
  title: string;
  description: string;
  icon: LucideIcon;
  items: string[];
};

type SocialLink = {
  id: number;
  icon: LucideIcon;
  name: string;
  username: string;
  link: string;
  cta: string;
  description: string;
};

const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    description: "Interfaces that stay responsive, clear, and easy to use.",
    icon: MonitorSmartphone,
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui"],
  },
  {
    title: "Backend",
    description: "Application logic, APIs, auth flows, and service integration.",
    icon: Code2,
    items: ["Java", "Spring Boot", "Node.js", "Express", "REST APIs"],
  },
  {
    title: "Database",
    description: "Data models and persistence layers for production-ready apps.",
    icon: Database,
    items: ["PostgreSQL", "MongoDB", "Prisma", "SQL"],
  },
  {
    title: "Tools",
    description: "The workflow pieces I use to ship, test, and iterate quickly.",
    icon: Wrench,
    items: ["Git", "Docker", "Netlify", "Vercel", "Postman"],
  },
];

const socialLinks: SocialLink[] = [
  {
    id: 1,
    icon: Github,
    name: "GitHub",
    username: "@NithinChowdaryRavuri",
    link: "https://github.com/NithinChowdaryRavuri",
    cta: "View GitHub",
    description: "Repositories, experiments, and the code behind my projects.",
  },
  {
    id: 2,
    icon: Linkedin,
    name: "LinkedIn",
    username: "@nithinchowdaryravuri",
    link: "https://www.linkedin.com/in/nithinchowdaryravuri/",
    cta: "View LinkedIn",
    description: "Professional updates, project context, and career background.",
  },
  {
    id: 3,
    icon: Trophy,
    name: "Leetcode",
    username: "@NithinChowdaryRavuri",
    link: "https://leetcode.com/u/NithinChowdaryRavuri/",
    cta: "View LeetCode",
    description: "Problem solving practice and consistency on core fundamentals.",
  },
];

const Tech = () => {
  return (
    <section id="stack" className="section-shell mt-16 sm:mt-20">
      <div className="max-w-3xl">
        <p className="section-eyebrow">Stack</p>
        <h2 className="section-title mt-4">
          Tools I reach for to design, build, and ship strong web products.
        </h2>
        <p className="section-copy mt-4">
          This is the core toolkit behind the work below, from responsive
          frontend experiences to backend services, databases, and delivery
          workflows.
        </p>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {skillGroups.map((group) => {
          const Icon = group.icon;

          return (
            <Card key={group.title} className="h-full bg-white/80">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <CardTitle className="pt-4">{group.title}</CardTitle>
                <CardDescription className="leading-6">
                  {group.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2 px-6 pb-6">
                {group.items.map((item) => (
                  <span className="chip px-3 py-1.5 text-sm" key={item}>
                    {item}
                  </span>
                ))}
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {socialLinks.map((item) => {
          const Icon = item.icon;

          return (
            <Card key={item.id} className="h-full bg-white/80">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
                  <Icon className="h-6 w-6" />
                </div>
                <CardTitle className="pt-4">{item.name}</CardTitle>
                <CardDescription className="text-base font-medium text-foreground/75">
                  {item.username}
                </CardDescription>
              </CardHeader>
              <CardContent className="px-6 pb-6">
                <p className="text-sm leading-7 text-muted-foreground">
                  {item.description}
                </p>
                <Button
                  className="mt-6 rounded-full bg-primary px-5 text-primary-foreground"
                  size="sm"
                  asChild
                >
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.cta}
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default Tech;
