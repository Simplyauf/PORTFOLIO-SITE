import { FiInstagram, FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { Link as ScrollLink } from "react-scroll";

const HeroSection = () => {
  // gradient text  //role part
  const gradientVariants = {
    notInView: {
      y: 30,
      opacity: 0,
    },
    initial: {
      backgroundImage: "linear-gradient(90deg,#f56a6a , #000 )",
      transition: {
        duration: 0.1,
      },
    },
    animate: {
      backgroundImage: "linear-gradient(90deg, #000 , #f56a6a )",
      transition: {
        duration: 1,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  const expandAndFadeOutTextVariant = {
    notInView: {
      y: 30,
      opacity: 0,
    },
    initial: {
      letterSpacing: "-0.5em",
      translateZ: "-800px",
      filter: "blur(12px)",
      transition: {
        duration: 0.1,
      },
    },
    animate: {
      letterSpacing: "0em",
      translateZ: "0",
      filter: "blur(0)",
      transition: { ease: [0.25, 0.46, 0.45, 0.94], duration: 1 },
    },
  };

  const fadeOutMoveUpVariants = {
    initial: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  // framer animation for  when specific elements are  in view
  const refFadeOut = useRef(null);
  const inViewFadeOut = useInView(refFadeOut);

  const refExpandText = useRef(null);
  const inViewExpandText = useInView(refExpandText);

  const refGradient = useRef(null);
  const inViewGradient = useInView(refGradient);

  const controlsFadeOut = useAnimation();
  const controlsExpand = useAnimation();
  const controlsGradient = useAnimation();

  useEffect(() => {
    if (inViewFadeOut) {
      controlsFadeOut.start({ y: 0, opacity: 1, transition: { duration: 2, ease: "easeOut" } });
    } else {
      controlsFadeOut.start({ y: 30, opacity: 0 });
    }
  }, [inViewFadeOut]);

  // expand
  useEffect(() => {
    console.log(inViewExpandText);
    let AnimateWhileInview = async () => {
      await controlsExpand.start("initial");
      await controlsExpand.start({ y: 0, opacity: 1, transition: { duration: 0.9, ease: "easeInOut" } });

      await controlsExpand.start("animate");
    };

    if (inViewExpandText) {
      AnimateWhileInview();
    } else {
      controlsExpand.start({ y: 30, opacity: 0 });
    }
  }, [inViewExpandText, controlsExpand]);

  // gradient text
  useEffect(() => {
    let AnimateGradientTextInview = async () => {
      await controlsGradient.start("initial");
      await controlsGradient.start({ y: 0, opacity: 1, transition: { duration: 0.9, ease: "easeInOut" } });

      await controlsGradient.start("animate");
    };

    if (inViewGradient) {
      AnimateGradientTextInview();
    } else {
      controlsGradient.start({ y: 30, opacity: 0 });
    }
  }, [inViewGradient, controlsGradient]);

  return (
    <section
      id="heroSection"
      className="flex md:px-[5rem] lg:px-[10rem] justify-center items-center mt-[calc(80px+5rem)] md:mt-[6rem] w-full  pb-20 px-[6%]"
    >
      <div className=" flex flex-col  justify-center items-center">
        <motion.p
          ref={refFadeOut}
          initial="initial"
          animate={controlsFadeOut}
          variants={fadeOutMoveUpVariants}
          className="text-lg font-medium xl:text-lg"
        >
          Hello my name is
        </motion.p>
        <motion.h1
          ref={refExpandText}
          initial="notInView"
          animate={controlsExpand}
          variants={expandAndFadeOutTextVariant}
          className="text-[3rem] md:text-[3.5rem] xl:text-[4rem] md:leading-[130%]  text-center leading-[120%] font-bold "
        >
          Azeez Umar Faruq
        </motion.h1>
        <motion.h3
          ref={refGradient}
          initial="notInView"
          animate={controlsGradient}
          variants={gradientVariants}
          className="text-2xl md:text-3xl xl:text-4xl mt-7 font-bold gradientText "
        >
          Frontend Developer
        </motion.h3>
        <motion.p
          ref={refFadeOut}
          initial="initial"
          animate={controlsFadeOut}
          variants={fadeOutMoveUpVariants}
          className="text-lg font-medium mt-2 text-center xl:text-xl"
        >
          Passionate about building responsive and user-friendly web applications
        </motion.p>
        <motion.div
          ref={refFadeOut}
          initial="initial"
          animate={controlsFadeOut}
          variants={fadeOutMoveUpVariants}
          className="flex gap-4 mt-8"
        >
          <a
            target="_blank"
            rel="noreferrer"
            href="https://drive.google.com/file/d/1aO95l56XfzyZpcRLiwrcHbnEsmTo2jSP/view?usp=sharing"
          >
            <button className="h-12 w-[120px] bg-primaryColor text-white rounded shadow-sm  hover:bg-[hsl(0deg,87%,65%)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[hsl(0deg,87%,75%)]">
              Resume
            </button>
          </a>
          <ScrollLink to="contactSection" spy={true} smooth={true} offset={-100} duration={200}>
            <button className="h-12 w-[120px] group  relative bg-transparent border-primaryColor border-2  overflow-hidden  rounded">
              <span className="absolute w-64 h-0  transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-primaryColor text-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease-in-out"></span>
              <span className="relative text-primaryColor transition-colors duration-300 group-hover:text-white ease-in-out">
                {" "}
                Contact Me
              </span>
            </button>
          </ScrollLink>
        </motion.div>
        <motion.div
          ref={refFadeOut}
          initial="initial"
          animate={controlsFadeOut}
          variants={fadeOutMoveUpVariants}
          className="mt-8"
        >
          <h2 className="text-xl font-bold text-center">Lets connect</h2>
          <div className="flex justify-center items-center gap-4 mt-4">
            <a target="_blank" rel="noreferrer" href="https://twitter.com/UmarFarukA13?t=mvWsP0OImHUckTdvQRz4Yw&s=09">
              <FiTwitter className="w-6 h-6 cursor-pointer hover:stroke-primaryColor transition-colors ease-in duration-200" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/callmhe_auf/">
              <FiInstagram className="w-6 h-6 cursor-pointer hover:stroke-primaryColor transition-colors ease-in duration-200" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://github.com/Simplyauf">
              <FiGithub className="w-6 h-6 cursor-pointer hover:stroke-primaryColor transition-colors ease-in duration-200" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send?phone=2348149660220">
              <BsWhatsapp className="w-6 h-6 cursor-pointer hover:fill-primaryColor transition-colors ease-in duration-200" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/umarfaruq-abdulazeez-02369a21b/">
              <FiLinkedin className="w-6 h-6 cursor-pointer hover:stroke-primaryColor transition-colors ease-in duration-200" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
