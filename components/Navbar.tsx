import Image from "next/image";
import React from "react";

function Navbar() {
  return (
    <nav className="h-[50px] fixed top-0 bg-[#FCFD96] z-50 mix-blend-luminosity w-full flex border-b-2 border-black">
      <div className="w-full lg:w-[80%] mx-auto flex justify-between items-center">
        <span className="flex items-center gap-2 select-none">
          <Image src="./me.svg" width={50} height={50} alt="my icon" />
          <p>Meh.</p>
        </span>
        <ul className="flex gap-4">
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
