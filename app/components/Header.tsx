import React from "react";
import NavBar from "./NavBar";
import MobileNav from "./MobileNav";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="fixed left-0 right-0 w-full bg-primary h-[90px] ">
      <div className=" container mx-auto">
        <Link href={""}>
          <Image src={"/assets/img/logo.png"} width={117} height={55} alt="" />
        </Link>
        <MobileNav containerStyles="  xl:hidden" />
        <NavBar containerStyles=" flex gap-4 hidden xl:flex" />
      </div>
    </header>
  );
};

export default Header;
