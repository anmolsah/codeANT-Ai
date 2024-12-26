import React, { useState } from "react";
import { assets } from "../assets/assests";
import MenuItem from "./MenuItem";

const HamburgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      <div className="flex absolute justify-between items-center p-4 bg-white shadow-md top-0 left-0 w-full z-10">
        <div className="flex items-center">
          <img src={assets.miniLogo} alt="Logo" className="h-8 w-8 mr-2" />
          <span className="text-xl font-normal ">CodeAnt AI</span>
        </div>

        <img
          className={`w-[21px] h-[17.25px] md:hidden cursor-pointer ${
            isMenuOpen ? "w-[15px] h-[15.5px]" : "font-normal"
          }`}
          src={isMenuOpen ? assets.crossIccon : assets.hamburger}
          alt="Menu Icon"
          onClick={toggleMenu}
        />
      </div>

      {isMenuOpen && <MenuItem />}
    </div>
  );
};

export default HamburgerMenu;
