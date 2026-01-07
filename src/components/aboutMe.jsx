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
          Hello, My name is <b>Abdulazeez Umarfaruq</b>.
        </motion.p>
        <motion.p
          variants={fadeOutMoveUpVariants}
          initial="initial"
          whileInView="animate"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="leading-[190%]  2xl:text-lg"
        >
          Experienced self-taught software developer(frontend focused) with over 4+ years of proven expertise. Proficient in core technologies such as HTML, CSS, Javascript, TypeScript, ReactJS, NextJS, and Node.js. I am passionate about creating seamless user experiences and adept at problem-solving.
        </motion.p>
        <motion.p
          variants={fadeOutMoveUpVariants}
          initial="initial"
          whileInView="animate"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="leading-[190%] mt-3 2xl:text-lg "
        >
          Throughout my career, I've spearheaded the development of various products, showcasing my ability to build responsive, fast, and stunning UIs while prioritizing functionality and performance. I thrive on transforming ideas into functional, user-centric designs that deliver optimal performance.
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
              <div className="flex items-center flex-wrap">
                <h1 className="text-[20px] font-bold">Nonceblox</h1>
                <span className="text-[13px] ml-6 font-extralight experiences">
                  Jul 2025 - Present
                </span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline italics ml-4"
                  href="https://nonceblox.com/"
                >
                  https://nonceblox.com/
                </a>
              </div>
              <h3 className="text-[19px] mt-3 font-medium">Full stack Engineer</h3>
              <ul className="lg:space-y-3 space-y-6 mt-3 list-disc pl-[30px]">
                <li className="text-[16px]">
                  Led a partnership with Encryptus.io to launch USD wallets for African users, enabling bill payments, crypto access, wire transfers, and fiat on-/off-ramps.
                </li>
                <li className="text-[16px]">
                  Built Agentic AI-driven HR and project automation tools that reduces manual work (https://app.tara.nonceblox.com/).
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full flex-col mt-[4rem] flex justify-between">
            <div className=" experiences">
              <div className="flex items-center flex-wrap">
                <h1 className="text-[20px] font-bold">EventPark</h1>
                <span className="text-[13px] ml-6 font-extralight experiences">
                  Feb 2025 - Jul 2025
                </span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline italics ml-4"
                  href="https://www.eventpark.africa/"
                >
                  https://www.eventpark.africa/
                </a>
              </div>
              <h3 className="text-[19px] mt-3 font-medium">Frontend Developer</h3>
              <ul className="lg:space-y-3 space-y-6 mt-3 list-disc pl-[30px]">
                <li className="text-[16px]">
                  Spearheaded the frontend development and successful launch of the EventPark MVP, ensuring project delivery within strict timelines.
                </li>
                <li className="text-[16px]">
                  Engineered a robust and intuitive administrative back-office system, optimizing event organization and gift registry management.
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full flex-col mt-[4rem] flex justify-between">
            <div className=" experiences">
              <div className="flex items-center flex-wrap">
                <h1 className="text-[20px] font-bold">Manaknight Digital</h1>
                <span className="text-[13px] ml-6 font-extralight experiences">
                  Dec 2023 - Jun 2025
                </span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline italics ml-4"
                  href="https://manaknightdigital.com"
                >
                  https://manaknightdigital.com
                </a>
              </div>
              <h3 className="text-[19px] mt-3 font-medium">Full stack Developer (Frontend Focused)</h3>
              <ul className="lg:space-y-3 space-y-6 mt-3 list-disc pl-[30px]">
                <li className="text-[16px]">
                  Implemented Jenkins for CI/CD and utilized Git and Gitea for version control across multiple company projects.
                </li>
                <li className="text-[16px]">
                  Led the frontend development of a music production management application featuring distinct portals for superadmin, member, client, and manager roles.
                </li>
                <li className="text-[16px]">
                  Successfully optimized multiple projects for improved performance and SEO, achieving remarkable Lighthouse speed index reductions and perfect SEO scores.
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full flex-col mt-[4rem] flex justify-between">
            <div className=" experiences">
              <div className="flex items-center flex-wrap">
                <h1 className="text-[20px] font-bold">DERA</h1>
                <span className="text-[13px] ml-6 font-extralight experiences">
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
              <h3 className="text-[19px] mt-3 font-medium">Frontend Developer</h3>
              <ul className="lg:space-y-3 space-y-6 mt-3 list-disc pl-[30px]">
                <li className="text-[16px]">
                  Collaborated within the DERA product team, working closely with Back-end developers and designers, resulting in a 30% acceleration of the product roadmap.
                </li>
                <li className="text-[16px]">
                  Executed intuitive and aesthetically pleasing designs, creating functional websites for enhanced user experiences.
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full flex-col mt-[4rem] flex justify-between">
            <div className=" experiences">
              <div className="flex items-center flex-wrap">
                <h1 className="text-[20px] font-bold">Freelancing</h1>
                <span className="text-[13px] ml-6 font-extralight experiences">
                  Sept 2021 - April 2023
                </span>
              </div>
              <h3 className="text-[19px] mt-3 font-medium">Freelance Software Developer</h3>
              <ul className="lg:space-y-3 space-y-6 mt-3 list-disc pl-[30px]">
                <li className="text-[16px]">
                  Developed the admin panel of a music app using Next.js, TypeScript, and MySQL.
                </li>
                <li className="text-[16px]">
                  Designed the UI for a blog builder app with AI integration using Next.js and TypeScript.
                </li>
                <li className="text-[16px]">
                  Created eLearning applications using Next.js.
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
