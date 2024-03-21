import React from "react";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header>
      <div className=" container mx-auto">
        <NavBar containerStyles="bg-red-300 py-12" />
      </div>
    </header>
  );
};

export default Header;
