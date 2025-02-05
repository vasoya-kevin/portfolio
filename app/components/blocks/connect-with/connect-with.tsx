"use client";
import { ArrowRightUp, RightArrow } from "@/svg";
import { Discord, Email, Github, LinkedIn, WhatsApp } from "@/svg/social";
import Link from "next/link";
import React from "react";

const ConnectWith = () => {
  return (
    <section className="grid grid-cols-12 gap-5 box-border w-full justify-between mt-5 ">
      <Link
        href=""
        className="col-span-6 lg:col-span-8 flex justify-between items-center gap-3 border border-gray-500 py-0.5 px-2 duration-300 ease-in-out rounded-lg cursor-pointer hover:bg-zinc-200 group"
      >
        <span className="flex items-center text-sm group-hover:font-semibold">
          <LinkedIn width={22} height={22} />
          Connect with me
        </span>
        <ArrowRightUp
          width={22}
          height={22}
          className="group-hover:rotate-45 group-hover:ease-in-out group-hover:duration-300"
        />
      </Link>
      <div className="col-span-6 lg:col-span-4 flex justify-between gap-1">
        <Link
          href=""
          className="border border-gray-500 rounded-lg p-2 cursor-pointer hover:ease-in-out hover:duration-300 hover:bg-zinc-200 group sm:p-2"
        >
          <Github width={22} height={22} />
        </Link>
        <Link
          href=""
          className="border border-gray-500 rounded-lg p-2 cursor-pointer hover:ease-in-out hover:duration-300 hover:bg-zinc-200 group sm:p-2"
        >
          <Discord width={22} height={22} />
        </Link>
        <Link
          href=""
          className="border border-gray-500 rounded-lg p-2 cursor-pointer hover:ease-in-out hover:duration-300 hover:bg-zinc-200 group sm:p-2"
        >
          <Email width={22} height={22} />
        </Link>
        <Link
          href=""
          className="border border-gray-500 rounded-lg p-2 cursor-pointer hover:ease-in-out hover:duration-300 hover:bg-zinc-200 group sm:p-2"
        >
          <WhatsApp width={22} height={22} />
        </Link>
      </div>
    </section>
  );
};

export default ConnectWith;
