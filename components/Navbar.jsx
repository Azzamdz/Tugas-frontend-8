"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home", number: "00" },
  { href: "/destination", label: "Destination", number: "01" },
  { href: "/crew", label: "Crew", number: "02" },
  { href: "/technology", label: "Technology", number: "03" },
];

export default function Navbar() {
  const [isMenu, setIsMenu] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="p-5 md:p-0 fixed md:pt-5 flex items-center justify-between w-full z-50">
      <div className="md:p-5">
        <Link href="/">
          <img src="/logoaja.svg" alt="Logo" className="size-10" />
        </Link>
      </div>

      <div
        className="hamburger md:hidden flex flex-col gap-1 cursor-pointer"
        onClick={() => setIsMenu(!isMenu)}
      >
        <div className="h-0.5 bg-white w-7"></div>
        <div className="h-0.5 bg-white w-7"></div>
        <div className="h-0.5 bg-white w-7"></div>
      </div>

      <ul
        className={`flex flex-col gap-10 md:gap-12 condensed tracking-widest uppercase bg-white/10 backdrop-blur-[80px] w-3/4 md:w-fit absolute md:static md:flex-row h-screen md:h-fit text-xl p-5 md:p-6 text-white top-0 transition-[right] items-end ${
          isMenu ? "right-0" : "-right-[600px]"
        }`}
      >
        <div className="garis h-[1px] absolute bg-white hidden 2xl:block w-[100%] right-[97%] top-[50%]"></div>

        <li
          className="tombol-close size-10 relative cursor-pointer mt-10 md:hidden"
          onClick={() => setIsMenu(false)}
          aria-label="close-button"
        >
          <div className="h-0.5 bg-white w-7 rotate-45 absolute"></div>
          <div className="h-0.5 bg-white w-7 -rotate-45 absolute"></div>
        </li>

        {navLinks.map((link) => (
          <li
            key={link.href}
            onClick={() => setIsMenu(false)}
            className={`hover:text-slate-300 w-full md:w-fit h-15 hover:border-b-2 ${
              pathname === link.href
                ? "border-b-2 border-white"
                : "border-b-2 border-transparent"
            }`}
          >
            <Link href={link.href}>
              <p>
                <span className="font-bold">{link.number}</span> {link.label}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
