import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  return (
    <div className="flex justify-between items-center py-6 h-[80px] w-full  px-[6%]">
      <h2 className="text-2xl font-bold">Auf</h2>
      <RxHamburgerMenu className="w-8 h-8" />
    </div>
  );
};

export default Header;
