import { Handshake } from "lucide-react";
import Image from "next/image";
import React from "react";

const WorkWith = () => {
  return (
    <>
      <div className="flex gap-1 items-center mt-5 py-2">
        <h2 className="text-sm font-semibold leading-tight uppercase">
          Team Work
        </h2>
        <Handshake width={18} height={18} />
      </div>
      <section className="grid grid-cols-1 w-full">
        <div className="border border-gray-500 rounded-lg grid grid-cols-1 p-2 gap-2">
          <div>
            <Image
              src="/work-with/gnb.png"
              layout="intrinsic"
              alt="Graham & Brown"
              width={1000}
              height={1000}
              className="rounded-md border border-gray-500"
            />
          </div>
          <div>
            <h3>Graham & Brown</h3>
          </div>
        </div>
        <div></div>
        <div></div>
      </section>
    </>
  );
};

export default WorkWith;
