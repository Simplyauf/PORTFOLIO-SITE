export const Navbar = ({ openHamBurgerBar }) => {
  return (
    <ul
      className={` flex-col items-center justify-center gap-8 text-2xl relative  font-bold py-16 ${
        openHamBurgerBar ? "hidden" : "flex sm:block"
      } `}
    >
      <li className=""> Home</li>
      <li>About</li>
      <li>Skills</li>
      <li>Works</li>
      <li>Contact</li>
    </ul>
  );
};
