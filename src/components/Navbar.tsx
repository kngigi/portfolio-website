"use client";
import Link from "next/link";
import NavLink from "./NavLink";
import { useState } from "react";
import { Button } from "./ui/button";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const NAV_LINKS = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setNavbarOpen((prev) => !prev);
  };
  
  return (
    <nav className="sticky z-20 bg-[#121212] top-0 right-0 bg-opacity-90 backdrop-blur-sm">
      <div className="flex justify-between items-center mx-auto p-8">
        <Link
          href={"/"}
          className="uppercase tracking-tighter text-3xl md:text-4xl lg:text-5xl text-white font-semibold"
        >
          KN
        </Link>
        <div className="md:hidden">
          {!navbarOpen ? (
            <Button
              className="flex text-slate-200 items-center px-3 py-2 border rounded border-slate-200 hover:text-black hover:border-black "
              variant={"ghost"}
              onClick={toggleMenu}
            >
              <Bars3Icon className="h-5 w-5" />
            </Button>
          ) : (
            <Button
              className="flex text-slate-200 items-center px-3 py-2 border rounded border-slate-200 hover:text-black hover:border-black"
              variant={"ghost"}
              onClick={toggleMenu}
            >
              <XMarkIcon className="h-5 w-5" />
            </Button>
          )}
        </div>
        <div className="hidden md:block">
          <ul className="flex p-4 md:p-0 md:space-x-8">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Button variant={"link"} className="text-xl ">
                  <NavLink label={link.label} href={link.href} />
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen && <MenuOverlay links={NAV_LINKS}/>}
    </nav>
  );
};

export default Navbar;
