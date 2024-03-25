"use client";
import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import MobileNav from "./MobileNav";
import Link from "next/link";
import Image from "next/image";
import { MdMenu } from "react-icons/md";

const Header = () => {
  const [activeHeader, setActiveHeader] = useState(false);
  const [activeNavBar, setActiveNavBa] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setActiveHeader(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`${
        activeHeader ? "h-[100px]" : "h-[124px] "
      } fixed max-w-[2048px] top-0 w-full bg-primary-200 h-[100px] transition-all z-50`}
    >
      <div className=" container h-full flex items-center justify-between mx-auto">
        <Link href={""}>
          <Image src={"/assets/img/logo2.png"} width={117} height={55} alt="" />
        </Link>
        <MobileNav
          containerStyles={`${activeHeader ? "top-[90px]" : "top-[124px] "}${
            activeNavBar
              ? "max-h-max pt-8 pb-10 border-t border-white/10"
              : "max-h-0 pt-0 pb-0 overflow-hidden border-white/0"
          } flex flex-col text-center gap-8 fixed bg-primary-200 w-full left-0 text-white text-base uppercase font-medium  transition-all xl:hidden`}
        />
        <NavBar containerStyles=" text-white  uppercase flex gap-4 hidden xl:flex" />
        <div>
          <button
            onClick={() => setActiveNavBa(!activeNavBar)}
            className="text-white xl:hidden"
          >
            <MdMenu className="text-4xl" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
