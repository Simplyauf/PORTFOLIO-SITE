export const Navbar = ({ openHamBurgerBar }) => {
  return (
    <>
      <ul
        className={` flex-col items-center justify-center gap-8 text-2xl relative  font-bold py-16 ${
          openHamBurgerBar ? "hidden" : "flex md:hidden"
        } `}
      >
        <li className=""> Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Works</li>
        <li>Contact</li>
      </ul>

      {/* horizontal nav for large screens */}
      <ul className="hidden md:flex items-center gap-8 text-xl relative  font-medium ">
        <li className=""> Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Works</li>
        <li>Contact</li>
      </ul>
    </>
  );
};
