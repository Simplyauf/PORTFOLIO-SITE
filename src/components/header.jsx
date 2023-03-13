import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Navbar } from "./navBar";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [openHamBurgerBar, setOpenHamburgerBar] = useState(true);

  useEffect(() => {
    const OnScroll = () => {
      let headerDOM = document.querySelector("header");

      if (window.scrollY > headerDOM.getBoundingClientRect().height) {
        headerDOM.style.boxShadow = "0px 4px 5px -3px rgba(0,0,0,0.1)";
      } else {
        headerDOM.style.boxShadow = "";
      }
    };
    window.addEventListener("scroll", OnScroll);

    return () => {
      window.removeEventListener("scroll", OnScroll);
    };
  });

  return (
    <>
      <header
        className={`md:px-[10rem] md:flex md:justify-between lg:px-[10rem] w-full ${
          !openHamBurgerBar && "shadow-[0_10px_10px_-10px_rgba(0,0,0,0.2)] sm:shadow-none bottom-2"
        } z-[100] top-0  fixed bg-white md:relative`}
      >
        <div className="flex justify-between items-center py-6 h-[80px] md:h-[120px] md:py-0 w-full  px-[6%] lg:px-0">
          <h2 className="text-2xl font-bold md:text-3xl">Auf</h2>
          {openHamBurgerBar ? (
            <RxHamburgerMenu
              className="w-8 h-8 sm:hidden cursor-pointer"
              onClick={() => setOpenHamburgerBar(!openHamBurgerBar)}
            />
          ) : (
            <AiOutlineClose
              className="w-8 h-8 sm:hidden cursor-pointer"
              onClick={() => setOpenHamburgerBar(!openHamBurgerBar)}
            />
          )}
        </div>
        <Navbar {...{ openHamBurgerBar }} />
      </header>
    </>
  );
};

export default Header;
