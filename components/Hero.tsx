import React from "react";

const Hero = () => {
  return (
    <section className="mx-auto max-w-7xl">
      <div className="container max-w-lg px-4 py-32 mx-auto mt-px text-left md:max-w-none md:text-center">
        <h1 className="text-4xl font-extrabold leading-10 tracking-tight text-left text-gray-900 md:text-center sm:leading-none md:text-6xl lg:text-7xl gap-4">
          <span className="inline md:block">
            Hi! I&apos;m Nithin Chowdary Ravuri
          </span>{" "}
          <span className="relative mt-2 text-transparent bg-clip-text bg-gradient-to-br from-green-300 to-indigo-500 md:inline-block">
            Full Stack Developer
          </span>
        </h1>
        <div className="mx-auto mt-5 text-gray-500 md:mt-12 md:max-w-lg md:text-center lg:text-lg">
          Coding today for a better tomorrow.
        </div>
        <div className="flex flex-col items-center mt-12 text-center">
          <a
            href="/Nithin_Chowdary_Resume.pdf"
            target="_blank"
            className="relative inline-block text-lg group"
          >
            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <span className="relative">View Resume</span>
            </span>
            <span
              className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
