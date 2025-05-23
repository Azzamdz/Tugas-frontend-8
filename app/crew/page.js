"use client";
import { useState } from "react";

const crewMembers = [
  {
    role: "COMMANDER",
    name: "DOUGLAS HURLEY",
    description:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    image: "/satu.png",
  },
  {
    role: "MISSION SPECIALIST",
    name: "MARK SHUTTLEWORTH",
    description:
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    image: "/dua.png",
  },
  {
    role: "PILOT",
    name: "VICTOR GLOVER",
    description:
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18. He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    image: "/tiga.png",
  },
];

export default function CrewPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCrew = crewMembers[activeIndex];

  return (
    <main className="bg-[url('/bg-2.png')] bg-cover bg-center min-h-screen text-white px-6 md:px-16 lg:px-40 py-10 md:py-20">
      <h2 className="text-base md:text-xl lg:text-2xl tracking-[3px] uppercase text-center md:text-left mb-10 p-20">
        <span className="text-gray-600 font-bold mr-4">02</span> Meet your crew
      </h2>

      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20 w-full max-w-[1200px] mx-auto">
        <div className="flex-1 text-center lg:text-left">
          <h3 className="text-lg md:text-2xl text-gray-400 uppercase mb-2 tracking-widest">
            {activeCrew.role}
          </h3>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif uppercase mb-6">
            {activeCrew.name}
          </h1>
          <p className="text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
            {activeCrew.description}
          </p>

          <div className="flex justify-center lg:justify-start gap-4">
            {crewMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                aria-label={`crew member ${index + 1}`}
                className={`w-4 h-4 rounded-full transition-colors duration-300 ${
                  activeIndex === index
                    ? "bg-white"
                    : "bg-gray-600 hover:bg-gray-400"
                }`}
              ></button>
            ))}
          </div>
        </div>

        <div className="flex justify-center flex-1">
          <img
            src={activeCrew.image}
            alt={activeCrew.name}
            className="h-[300px] md:h-[450px] lg:h-[550px] object-contain transition-all duration-300"
          />
        </div>
      </div>
    </main>
  );
}
