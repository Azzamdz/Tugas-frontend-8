"use client";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [isHover, setIsHover] = useState(false);

  return (
    <main className="bg-[url('/bg-1.jpg')] bg-cover bg-center min-h-screen text-white overflow-hidden flex items-end md:items-center justify-center">
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 lg:px-40 py-16 md:py-28 gap-20 md:gap-0 w-full max-w-screen-xl">
        <div className="text-center md:text-left max-w-[450px] lg:max-w-[550px] space-y-6">
          <p className="text-sm md:text-base tracking-[3px] text-slate-300 uppercase">
            So, you want to travel to
          </p>
          <h1 className="text-[80px] md:text-[120px] lg:text-[150px] font-serif tracking-wide leading-none">
            SPACE
          </h1>
          <p className="text-[15px] md:text-lg text-slate-300 leading-relaxed md:leading-8">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>

        <div className="relative flex justify-center items-center mt-16 md:mt-0">
          <div
            className={`absolute w-[288px] md:w-[350px] lg:w-[400px] h-[288px] md:h-[350px] lg:h-[400px] rounded-full bg-white transition-opacity duration-300 pointer-events-none ${
              isHover ? "opacity-20" : "opacity-0"
            }`}
          ></div>

          <Link href="/destination">
            <div
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
              className="w-[150px] h-[150px] md:w-[240px] md:h-[240px] lg:w-[274px] lg:h-[274px] rounded-full bg-white text-black flex items-center justify-center text-xl md:text-2xl font-serif tracking-widest hover:scale-105 transition-all duration-300 cursor-pointer z-10"
            >
              EXPLORE
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
