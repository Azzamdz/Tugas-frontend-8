"use client";
import { useState } from "react";

const planets = [
  {
    name: "MOON",
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 KM",
    travelTime: "3 DAYS",
    image: "/moon.png",
  },
  {
    name: "MARS",
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 MIL. KM",
    travelTime: "9 MONTHS",
    image: "/mars.png",
  },
  {
    name: "EUROPA",
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 MIL. KM",
    travelTime: "3 YEARS",
    image: "/europa.png",
  },
  {
    name: "TITAN",
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 BIL. KM",
    travelTime: "7 YEARS",
    image: "/titan.png",
  },
];

export default function DestinationPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activePlanet = planets[activeIndex];

  return (
    <main className="bg-[url('/bg-2.png')] bg-cover bg-center min-h-screen text-white px-6 md:px-16 lg:px-40 py-10 md:py-20">
      <h2 className="text-base md:text-xl lg:text-2xl tracking-[3px] uppercase text-center md:text-left mb-10 p-20">
        <span className="text-gray-600 font-bold mr-4 ">01</span>
        Pick your destination
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-between gap-y-16 md:gap-x-28">
        <div className="flex justify-center flex-1">
          <img
            src={activePlanet.image}
            alt={activePlanet.name}
            className="w-[170px] md:w-[300px] lg:w-[445px] transition-all duration-300"
          />
        </div>

        <div className="flex-1 text-center md:text-left max-w-xl">
          <div className="flex justify-center md:justify-start gap-6 mb-8 text-sm md:text-base uppercase tracking-widest">
            {planets.map((planet, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`pb-2 transition-colors duration-200 ${
                  activeIndex === index
                    ? "border-b-2 border-white text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {planet.name}
              </button>
            ))}
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif mb-6">
            {activePlanet.name}
          </h1>

          <p className="text-[15px] md:text-base text-gray-300 leading-relaxed mb-10 md:mb-14">
            {activePlanet.description}
          </p>

          <div className="h-px bg-gray-600 w-full mb-8"></div>

          <div className="flex flex-col md:flex-row gap-8 justify-center md:justify-start text-sm uppercase tracking-widest">
            <div>
              <p className="text-gray-400 mb-1">Avg. Distance</p>
              <p className="text-xl md:text-2xl">{activePlanet.distance}</p>
            </div>
            <div>
              <p className="text-gray-400 mb-1">Est. Travel Time</p>
              <p className="text-xl md:text-2xl">{activePlanet.travelTime}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
