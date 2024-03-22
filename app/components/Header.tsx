import React from "react";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className="fixed left-0 right-0 w-full bg-white ">
      <div className=" container mx-auto">
        <NavBar containerStyles="bg-red-300 py-12 flex gap-4" />
      </div>
    </header>
  );
};

export default Header;
