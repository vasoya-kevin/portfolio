import { India } from "@/svg";
import React from "react";

const HeroAboutMe = () => {
  return (
    <>
      <h1 className="text-base duration-300 ease-in-out hover:font-semibold hover:text-blue-500 hover:tracking-wide hover:underline cursor-pointer">
        Hi, I'm Kevin Vasoya!
      </h1>

      <div className="flex items-center gap-2">
        <h2 className="text-justify">
          <span>
            As a <strong>Software Engineer </strong>from{" "}
          </span>
          hailing from the culturally rich Dev Bhumi, India{" "}
          <India className="inline w-6 h-6 mb-1" />, I possess a profound
          passion for developing innovative, efficient, and user-centric
          solutions. I thrive on transforming intricate challenges into
          sophisticated code. Let us collaborate to create something truly
          remarkable.
        </h2>
      </div>
    </>
  );
};

export default HeroAboutMe;
