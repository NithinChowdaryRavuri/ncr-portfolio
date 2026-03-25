import Link from "next/link";

import { Button } from "./ui/button";

const navLinks = [
  { label: "Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  return (
    <nav className="section-shell sticky top-0 z-50 pt-4">
      <div className="surface-card flex flex-col gap-4 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="text-2xl font-bold tracking-tight">
            <span className="bg-[linear-gradient(135deg,#0f766e_0%,#0284c7_55%,#4f46e5_100%)] bg-clip-text text-transparent">
              NCR.
            </span>
          </Link>

          <Button
            className="rounded-full bg-primary px-5 text-primary-foreground sm:hidden"
            asChild
          >
            <a href="mailto:nithinravuri1@gmail.com">Contact Me</a>
          </Button>
        </div>

        <div className="flex items-center gap-5 text-sm font-medium text-muted-foreground">
          {navLinks.map((item) => (
            <a
              className="transition-colors hover:text-foreground"
              href={item.href}
              key={item.label}
            >
              {item.label}
            </a>
          ))}
        </div>

        <Button
          className="hidden rounded-full bg-primary px-5 text-primary-foreground sm:inline-flex"
          asChild
        >
          <a href="mailto:nithinravuri1@gmail.com">Contact Me</a>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
