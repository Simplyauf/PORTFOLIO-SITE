import { motion } from "framer-motion";

export const AboutMe = () => {
  const fadeOutMoveUpVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section
      id="aboutSection"
      className="w-full px-[6%] mt-20 py-20 md:px-[5rem] lg:px-[10rem]  after relative before:absolute before:left-0 before:origin-top before:bg-inherit before:-skew-y-[4deg] skew-y-[4deg] before:w-full before:h-[160px] before:-z-10 before:-bottom-[80px] bg-[hsl(0,0%,96%)]"
    >
      <div className="skew-y-[-4deg]  w-full px-[2%] pt-20 ">
        <h2 className="font-bold text-2xl">About Me</h2>
        <div className="bg-primaryColor  h-[10px] mt-[4px] w-[60px] -skew-x-6 mb-16"></div>
        <motion.p
          variants={fadeOutMoveUpVariants}
          initial="initial"
          whileInView="animate"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="leading-[190%]  2xl:text-lg"
        >
          Hello, My name is <b>Abdulazeez Umar faruq </b> and i am a self-taught frontend developer with over 1 year
          plus experience in the industry. I am passionate about creating beautiful and seamless user experience. My
          love for problem solving and using my logical skills to come up with creative solutions as led me to this
          path.
        </motion.p>
        <motion.p
          variants={fadeOutMoveUpVariants}
          initial="initial"
          whileInView="animate"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="leading-[190%] mt-3 2xl:text-lg "
        >
          Over the course of my career, I have taken hundreds of hours of courses across various online programming and
          learning platforms, including YouTube. I have also worked on several projects to further my skills. I am
          constantly researching the latest trends and best practices in the industry, and I make it a priority to stay
          current with the latest tools and technologies. This commitment allows me to continuously improve my skills
          and deliver high-quality user experiences.
        </motion.p>
        <motion.p
          variants={fadeOutMoveUpVariants}
          initial="initial"
          whileInView="animate"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="leading-[190%] mt-3 2xl:text-lg "
        >
          I am actively seeking entry-level roles, including internships and part-time positions, that will allow me to
          showcase my skills and gain more practical experience in the industry. If you have any opportunities
          available, please don&apos;t hesitate to contact me.
        </motion.p>
        <motion.button
          variants={fadeOutMoveUpVariants}
          initial="initial"
          whileInView="animate"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="h-12 mt-6 w-[120px] bg-primaryColor text-white rounded shadow-sm transition-colors hover:bg-[hsl(0deg,87%,65%)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[hsl(0deg,87%,75%)]"
        >
          Resume
        </motion.button>
      </div>
    </section>
  );
};
