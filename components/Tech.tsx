import React from "react";
import Image from "next/image";
import tools from "@/public/tools.svg";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";

const icons: any[] = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-plain-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg",
];

const socialMedia = [
  {
    id: 1,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    name: "GitHub",
    username: "@NithinChowdaryRavuri",
    link: "https://github.com/NithinChowdaryRavuri",
  },
  {
    id: 2,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg",
    name: "Linkedin",
    username: "@nithinchowdaryravuri",
    link: "https://www.linkedin.com/in/nithinchowdaryravuri/",
  },
  {
    id: 3,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/devicon/devicon-original.svg",
    name: "Leetcode",
    username: "@NithinChowdaryRavuri",
    link: "https://leetcode.com/u/NithinChowdaryRavuri/",
  },
];

const Tech = () => {
  return (
    <div className="max-w-7xl mx-auto grid gird-cols-1 lg:grid-cols-3 gap-4 mt-10">
      <div className="w-full relative col-span-1">
        <Image
          src={tools}
          alt="tools"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
      <div className="flex flex-col w-full col-span-1 lg:col-span-2 gap-4">
        <Card className="bg-gray-100 border-none">
          <CardHeader>
            <CardTitle>My Tech Stack</CardTitle>
            <CardDescription>
              Explore the tools I use to build projects
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-6 p-6">
            {icons.map((item, index) => (
              <Image
                key={index}
                src={item}
                alt="Icon"
                className="w-16 h-16"
                width={18}
                height={18}
              />
            ))}
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 sm:grid-cols-3 w-full gap-4">
          {socialMedia.map((item) => (
            <Card
              key={item.id}
              className="p-4 flex flex-col items-center sm:items-start bg-gray-100 border-none"
            >
              <Image
                src={item.icon}
                alt="Icon"
                className="w-16 h-16"
                width={16}
                height={16}
              />
              <h1 className="text-2xl font-medium pt-3">{item.name}</h1>
              <p className="text-muted-foreground">{item.username}</p>
              <Button className="mt-4 bg-blue-600" size="sm" asChild>
                <a href={item.link}>Follow</a>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tech;
