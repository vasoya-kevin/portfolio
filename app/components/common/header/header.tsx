import { Astro, Logo } from "@/svg";
import React from "react";

const Header = () => {
  return (
    <header className="mt-20 grid grid-cols-12 gap-4 justify-between">
      <div className="col-start-1 col-end-7 sm:col-end-4">
        <div className="border rounded-full border-t-[#FF9933] border-r-[#FFFFFF] border-b-[#000080] border-l-[#138808] w-fit">
          <Astro width={50} height={50} fill="black" />
        </div>
      </div>
      <div className="col-start-7 col-end-13  sm:col-start-9 justify-self-end self-center flex gap-2 items-center justify-center">
        <span className="relative flex size-2 h-full">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#00AC3A]"></span>
          <span className="relative inline-flex size-2 rounded-full bg-[#00CA50]"></span>
        </span>
        <span>Open to Work</span>
      </div>
    </header>
  );
};

export default Header;
