"use client";
import { useState } from "react";

const techItems = [
  {
    id: 1,
    title: "LAUNCH VEHICLE",
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    image: "/r-1.jpg",
  },
  {
    id: 2,
    title: "SPACEPORT",
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    image: "/r-2.jpg",
  },
  {
    id: 3,
    title: "SPACE CAPSULE",
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    image: "/r-3.jpg",
  },
];

export default function TechnologyPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = techItems[activeIndex];

  return (
    <main className="bg-[url('/bg-4.png')] bg-no-repeat bg-cover min-h-screen bg-black text-white px-4 md:px-24 py-20 text-lg flex flex-col items-center">
      <h2 className="text-3xl uppercase tracking-[0.3em] font-light mt-20 self-center md:self-start ml-10">
        <span className="font-bold mr-2 text-gray-600">03</span>
        SPACE LAUNCH 101
      </h2>

      <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-20 max-w-[1110px] w-full mt-10">
        <div className="flex flex-col md:flex-row items-center gap-10 w-full">
          <div className="flex md:flex-col gap-6">
            {techItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-12 h-12 rounded-full border border-white text-xl font-bold flex items-center justify-center transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-white text-black"
                    : "bg-transparent text-white hover:bg-white hover:text-black"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <div className="text-center md:text-left max-w-md">
            <h3 className="text-xl text-gray-400 uppercase mb-2">
              THE TERMINOLOGY...
            </h3>
            <h1 className="text-4xl md:text-5xl font-serif uppercase mb-4">
              {active.title}
            </h1>
            <p className="text-gray-300 leading-relaxed">
              {active.description}
            </p>
          </div>
        </div>

        <div className="w-full max-w-md px-4 md:px-0">
          <img
            src={active.image}
            alt={active.title}
            className="w-full h-auto object-contain "
          />
        </div>
      </div>
    </main>
  );
}
