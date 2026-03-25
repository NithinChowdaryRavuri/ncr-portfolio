import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

import { Button } from "./ui/button";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="section-shell mt-16 pb-12 pt-6 sm:mt-20 sm:pb-16"
    >
      <div className="surface-card overflow-hidden bg-[linear-gradient(135deg,rgba(15,118,110,0.14),rgba(14,165,233,0.1),rgba(255,255,255,0.92))] px-6 py-8 sm:px-10 sm:py-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="section-eyebrow">Contact</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Let&apos;s build something thoughtful and useful.
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground sm:text-lg">
              If you want to collaborate, chat about an idea, or talk through an
              opportunity, I&apos;m always happy to connect.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              className="rounded-full bg-primary px-6 text-primary-foreground"
              size="lg"
              asChild
            >
              <a href="mailto:nithinravuri1@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Email Me
              </a>
            </Button>
            <Button
              className="rounded-full border-border bg-white/80 px-6 text-foreground hover:bg-white"
              size="lg"
              variant="outline"
              asChild
            >
              <a
                href="https://github.com/NithinChowdaryRavuri"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              className="rounded-full border-border bg-white/80 px-6 text-foreground hover:bg-white"
              size="lg"
              variant="outline"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/nithinchowdaryravuri/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      <p className="mt-6 text-center text-sm text-muted-foreground">
        &copy; {year} Nithin Chowdary Ravuri. Built with Next.js and Tailwind
        CSS.
      </p>
    </footer>
  );
};

export default Footer;
