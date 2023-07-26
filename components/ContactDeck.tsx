import React from "react";
import Image from "next/image";

function ContactDeck() {
  return (
    <div className="flex gap-2 mb-4 lg:justify-center">
      <a
        className="flex items-center gap-2 hover:rotate-6 transition-all	"
        href="https://github.com/lancebenedictos"
        target="_blank"
      >
        <Image src="./github.svg" width={40} height={40} alt="github" />
        GitHub
      </a>
      <a
        className="flex items-center gap-2 hover:rotate-6 transition-all"
        href="https://www.linkedin.com/in/lance-justine-benedictos-9800b11b5"
        target="_blank"
      >
        <Image src="./linkedin.svg" width={40} height={40} alt="linkedin" />
        LinkedIn
      </a>
      <a
        href="./res.pdf"
        target="_blank"
        className="flex items-center gap-2 hover:rotate-6 transition-all"
      >
        <Image src="./cv.svg" width={40} height={40} alt="cv" />
        CV
      </a>
    </div>
  );
}

export default ContactDeck;
