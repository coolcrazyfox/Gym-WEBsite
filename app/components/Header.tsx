import React from "react";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className="fixed left-0 right-0 w-full bg-white h-[90px] ">
      <div className=" container mx-auto">
        <NavBar containerStyles=" flex gap-4 hidden xl:flex" />
      </div>
    </header>
  );
};

export default Header;
