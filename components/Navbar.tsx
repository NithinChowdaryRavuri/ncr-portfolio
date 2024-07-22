import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="max-w-7xl mx-auto px-4 md:px-8 py-5 grid grid-cols-12">
      <div className="col-span-6 flex md:col-span-9">
        <Link href="/">
          <h1 className="text-2xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-green-300 to-indigo-500">
              NCR.
            </span>
          </h1>
        </Link>
      </div>
      <div className="flex items-center justify-end md:col-span-3 col-span-6">
        <Button className="flex bg-blue-600" asChild>
          <a href="mailto:ravurinithinchowdary@gmail.com">Contact Me</a>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
