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
          className="leading-[190%]  2xl:text-lg mb-1.5"
        >
          Hello, My name is <b>Abdulazeez Umar faruq </b>.
        </motion.p>
        <motion.p
          variants={fadeOutMoveUpVariants}
          initial="initial"
          whileInView="animate"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="leading-[190%]  2xl:text-lg"
        >
          With over 3 years of hands-on experience in frontend development, I am
          dedicated to creating seamless and visually appealing user
          experiences. My journey as a self-taught developer has equipped me
          with a deep understanding of frontend technologies and a knack for
          problem-solving.
        </motion.p>
        <motion.p
          variants={fadeOutMoveUpVariants}
          initial="initial"
          whileInView="animate"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="leading-[190%] mt-3 2xl:text-lg "
        >
          Throughout my career, I've spearheaded the development of various
          products, showcasing my ability to build responsive, fast, and
          stunning UIs while prioritizing functionality and performance. From
          concept to execution, I thrive on transforming ideas into functional,
          user-centric designs that not only look great but also deliver optimal
          performance.
        </motion.p>
        <motion.p
          variants={fadeOutMoveUpVariants}
          initial="initial"
          whileInView="animate"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="leading-[190%] mt-3 2xl:text-lg "
        >
          I stay at the forefront of industry trends and best practices,
          ensuring that my skills are always up-to-date with the latest tools
          and technologies. My commitment to continuous learning and improvement
          allows me to deliver high-quality results consistently. If you an
          exciting opportunity available, please do not hesitate to contact me.
        </motion.p>
        {/* <motion.div
          variants={fadeOutMoveUpVariants}
          initial="initial"
          whileInView="animate"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="leading-[190%] mt-[84px] "
        >
          <h2 className="font-bold text-[24px]">Experience</h2>
          <div className="w-full flex-col mt-8 flex justify-between">
            <div className=" experiences">
              <div className="flex items-center flex-wrap">
                {" "}
                <h1 className="text-[20px] font-bold">Manaknight Digital</h1>
                <span className="text-[13px] ml-6 font-extralight  experiences">
                  Dec 2023 - Sept 2024
                </span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline italics ml-4"
                  href="https://guidetryb.com"
                >
                  https://manaknightdigital.com/
                </a>
              </div>
              <h3 className="text-[19px] mt-3 font-medium">
                Frontend Developer
              </h3>
              <ul className="lg:space-y-3 space-y-6  mt-3 list-disc pl-[30px]">
                <li className="text-[16px]">
                  Conducted direct meetings with diverse clients to
                  comprehensively understand their product requirements and
                  translate them into actionable development plans. Implemented
                  client feedback and suggestions into their applications,
                  ensuring alignment with their vision and goals while fostering
                  strong client relationships
                </li>
                <li className="text-[16px] ">
                  Successfully optimized multiple projects for improved
                  performance and SEO by transitioning them to Hexo-based
                  platforms, achieving remarkable Lighthouse speed index
                  reductions from 3.4–5.8s to 1.5–1.9s, and attaining SEO scores
                  of 100 and performance ratings of 90+.
                </li>
                <li className="text-[16px] ">
                  Spearheaded the development of a cutting-edge gacha
                  application frontend, integrating complex probability
                  calculations and a pity system, while ensuring seamless user
                  experiences with captivating item animations and efficient API
                  integration.
                </li>
                <li className="text-[16px] ">
                  Utilized Jenkins for continuous integration and continuous
                  deployment (CI/CD), along with Git and Gitea for version
                  control, across various projects within the company.
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full flex-col  flex justify-between mt-[4rem]">
            <div className=" experiences">
              <div className="flex items-center ">
                {" "}
                <h1 className="text-[20px] font-bold">Dera</h1>
                <span className="text-[13px] ml-6 font-extralight  experiences">
                  May 2023 - Feb 2024
                </span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline italics ml-4"
                  href="https://dera.money"
                >
                  https://dera.money
                </a>
              </div>
              <h3 className="text-[19px] mt-3 font-medium">
                Frontend developer
              </h3>
              <ul className="lg:space-y-3 space-y-6  mt-3 list-disc pl-[30px]">
                <li className="text-[16px] ">
                  Collaborated closely with a frontend developer to develop and
                  build an elegant and responsive user interface for the company
                  website.
                </li>
                <li className="text-[16px] ">
                  Actively participated in team meetings, providing input on
                  design decisions, discussing project workflows, and
                  effectively communicating progress updates.
                </li>
              </ul>
            </div>
          </div>
        </motion.div> */}
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
