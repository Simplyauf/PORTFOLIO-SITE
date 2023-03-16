import { useAnimation, useInView, motion } from "framer-motion";
import { useEffect, useRef } from "react";

export const AboutMe = () => {
  const fadeOutMoveUpVariants = {
    initial: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const refFadeOut = useRef(null);
  const inViewFadeOut = useInView(refFadeOut);

  const controlsFadeOut = useAnimation();

  useEffect(() => {
    if (inViewFadeOut) {
      controlsFadeOut.start({ y: 0, opacity: 1, transition: { duration: 2, ease: "easeOut" } });
    } else {
      controlsFadeOut.start({ y: 30, opacity: 0 });
    }
  }, [inViewFadeOut]);

  return (
    <section
      id="aboutSection"
      className="w-full px-[6%] mt-20 py-20 md:px-[5rem] lg:px-[10rem]  after relative before:absolute before:left-0 before:origin-top before:bg-inherit before:-skew-y-[4deg] skew-y-[4deg] before:w-full before:h-[160px] before:-z-10 before:-bottom-[80px] bg-[hsl(0,0%,96%)]"
    >
      <div className="skew-y-[-4deg]  w-full px-[2%] pt-20 ">
        <h2 className="font-bold text-2xl">About Me</h2>
        <div className="bg-primaryColor  h-[10px] mt-[4px] w-[60px] -skew-x-6"></div>
        <motion.p
          ref={refFadeOut}
          variants={fadeOutMoveUpVariants}
          initial="initial"
          animate={controlsFadeOut}
          className="leading-[140%] mt-16"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ullam hic corporis ab recusandae aut at autem
          consequatur numquam cumque! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium placeat
          corrupti quae quod cum, expedita suscipit sed atque cumque voluptates. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Laborum esse eveniet minus dignissimos itaque molestiae cum autem laudantium est sunt.
        </motion.p>
        <motion.button
          ref={refFadeOut}
          variants={fadeOutMoveUpVariants}
          initial="initial"
          animate={controlsFadeOut}
          className="h-12 mt-5 w-[120px] bg-primaryColor text-white rounded shadow-sm transition-colors hover:bg-[hsl(0deg,87%,65%)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[hsl(0deg,87%,75%)]"
        >
          Resume
        </motion.button>
      </div>
    </section>
  );
};
