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
          Hello, My name is <b>Abdulazeez Umar faruq </b> and i am a self-taught frontend developer with over 2 year
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
          Over the course of my career, I have dedicated hundreds of hours to courses on various online programming and learning platforms , including YouTube. I have also worked on several projects to further my skills. I am
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
        I am currently actively seeking job opportunities, including freelance and part-time positions, where I can demonstrate my skills, acquire more experience, and contribute to a team. If you have any available opportunities, please do not hesitate to contact me.
        </motion.p>
        <motion.div
        variants={fadeOutMoveUpVariants}
        initial="initial"
        whileInView="animate"
        transition={{ duration: 1, ease: "easeInOut" }}
        className="leading-[190%] mt-[84px] "
      >
      <h2 className="font-bold text-[24px]">Experience</h2>
      <div className="w-full flex-col mt-8 flex justify-between">
           
            <div className=" experiences">
             
              <div className="flex items-center "> <h1 className="text-[20px] font-bold">Dera</h1>
              <span className="text-[13px] ml-6 font-extralight  experiences">
                May 2023 - Present
            </span>
                <a target="_blank" rel="noopener noreferrer" className="text-blue-500 underline italics ml-4" href="https://dera.money">https://dera.money</a>
         
              </div>
              <h3 className="text-[19px] mt-3 font-medium">Frontend developer</h3>
              <ul className="lg:space-y-3 space-y-6  mt-3 list-disc pl-[30px]">
                <li className="text-[16px] ">
                Collaborated closely with a frontend developer to develop and build an elegant and responsive user interface for the company website.
                </li>
                <li className="text-[16px] ">
                Actively participated in team meetings, providing input on design decisions, discussing project workflows, and effectively communicating progress updates.
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full flex-col  flex justify-between mt-[4rem]">
          
          <div className=" experiences">
           
            <div className="flex items-center flex-wrap"> <h1 className="text-[20px] font-bold">Guidetryb</h1>
            <span className="text-[13px] ml-6 font-extralight  experiences">
              May 2023 - Jun 2023
          </span>
          <a target="_blank" rel="noopener noreferrer" className="text-blue-500 underline italics ml-4" href="https://guidetryb.com">https://guidetryb.com</a>
         
            </div>
            <h3 className="text-[19px] mt-3 font-medium">Frontend developer (Contract)</h3>
            <ul className="lg:space-y-3 space-y-6  mt-3 list-disc pl-[30px]">
              <li className="text-[16px]">
              Developed the frontend of the website independently, utilizing design elements supplied by designers and working with backend developers to integrate APIs to build a visually stunning and functional website.
              </li>
              <li className="text-[16px] ">
              Communicated regularly with the client, understanding their requirements, providing progress updates, and incorporating feedback to deliver a website that aligns with their interests and goals.
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://drive.google.com/file/d/1aO95l56XfzyZpcRLiwrcHbnEsmTo2jSP/view?usp=sharing"
        >
          <motion.button
            variants={fadeOutMoveUpVariants}
            initial="initial"
            whileInView="animate"
            transition={{ duration: 1, ease: "easeInOut" }}
            className="h-12 mt-6 w-[120px] bg-primaryColor text-white rounded shadow-sm transition-colors hover:bg-[hsl(0deg,87%,65%)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[hsl(0deg,87%,75%)]"
          >
            Resume
          </motion.button>
        </a>
      </div>
    </section>
  );
};
