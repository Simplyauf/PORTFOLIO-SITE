import { useEffect } from "react";
import { easeInOut, motion, useAnimation } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

export const Navbar = ({ openHamBurgerBar, setOpenHamburgerBar }) => {
  const controls = useAnimation();

  useEffect(() => {
    if (openHamBurgerBar) {
      controls.start({ opacity: 0 });
    } else {
      controls.start({ opacity: 1 });
    }
  }, [openHamBurgerBar]);

  return (
    <>
      <motion.ul
        animate={controls}
        transition={{ duration: 0.4, ease: easeInOut }}
        className={` flex-col items-center justify-center gap-10 text-3xl md:translate-y-0 md:hidden md:relative  font-bold py-16 ${
          openHamBurgerBar ? "absolute translate-y-[-500px]" : "flex  md:hidden"
        } `}
      >
        <ScrollLink
          onClick={() => setOpenHamburgerBar(true)}
          to="heroSection"
          spy={true}
          smooth={true}
          offset={-100}
          duration={200}
        >
          <li className=""> Home</li>
        </ScrollLink>
        <ScrollLink
          onClick={() => setOpenHamburgerBar(true)}
          to="aboutSection"
          spy={true}
          smooth={true}
          offset={50}
          duration={200}
        >
          <li>About</li>
        </ScrollLink>
        <ScrollLink
          onClick={() => setOpenHamburgerBar(true)}
          to="skillsSection"
          spy={true}
          smooth={true}
          offset={50}
          duration={200}
        >
          <li>Skills</li>
        </ScrollLink>
        <ScrollLink
          onClick={() => setOpenHamburgerBar(true)}
          to="projectSection"
          spy={true}
          smooth={true}
          offset={50}
          duration={200}
        >
          <li>Projects</li>
        </ScrollLink>
        <ScrollLink
          onClick={() => setOpenHamburgerBar(true)}
          to="contactSection"
          spy={true}
          smooth={true}
          offset={50}
          duration={200}
        >
          <li>Contact</li>
        </ScrollLink>
      </motion.ul>

      {/* horizontal nav for large screens */}
      <ul className="hidden md:flex items-center lg:gap-8 lg:text-xl md:gap-6 md:text-lg relative  font-medium ">
        <ScrollLink
          className="hover:gradientText "
          to="heroSection"
          spy={true}
          smooth={true}
          offset={-100}
          duration={200}
        >
          <li className=""> Home</li>
        </ScrollLink>
        <ScrollLink
          className="hover:gradientText"
          to="aboutSection"
          spy={true}
          smooth={true}
          offset={50}
          duration={200}
        >
          <li>About</li>
        </ScrollLink>
        <ScrollLink
          className="hover:gradientText"
          to="skillsSection"
          spy={true}
          smooth={true}
          offset={50}
          duration={200}
        >
          <li>Skills</li>
        </ScrollLink>
        <ScrollLink
          className="hover:gradientText"
          to="projectSection"
          spy={true}
          smooth={true}
          offset={50}
          duration={200}
        >
          <li>Projects</li>
        </ScrollLink>
        <ScrollLink
          className="hover:gradientText"
          to="contactSection"
          spy={true}
          smooth={true}
          offset={50}
          duration={200}
        >
          <li>Contact</li>
        </ScrollLink>
      </ul>
    </>
  );
};
