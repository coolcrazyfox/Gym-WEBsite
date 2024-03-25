"use client";
import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import MobileNav from "./MobileNav";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [activeHeader, setActiveHeader] = useState(false);
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
        activeHeader ? "h-[100px]" : "h-[124px]"
      }fixed top-0 max-w-[2048px] w-full bg-primary-200 h-[100px] transition-all`}
    >
      <div className=" container h-full flex items-center justify-between mx-auto">
        <Link href={""}>
          <Image src={"/assets/img/logo.png"} width={117} height={55} alt="" />
        </Link>
        <MobileNav containerStyles="flex flex-col text-white  xl:hidden" />
        <NavBar containerStyles=" text-white  flex gap-4 hidden xl:flex" />
      </div>
    </header>
  );
};

export default Header;
