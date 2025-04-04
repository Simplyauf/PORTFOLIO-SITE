import {
  DiJavascript1,
  DiMongodb,
  DiReact,
  DiHtml5,
  DiCss3,
  DiGit,
} from "react-icons/di";
import { RxFramerLogo } from "react-icons/rx";
import {
  SiTailwindcss,
  SiRedux,
  SiExpress,
  SiTypescript,
  SiLaravel,
  SiPrisma,
  SiPostgresql,
  SiPuppeteer,
  SiSelenium,
  SiShopify,
  SiJenkins,
  SiCypress,
  SiJest,
} from "react-icons/si";

import { motion } from "framer-motion";

export const Skills = () => {
  const tools = {
    javascript: [
      <DiJavascript1 key="js" className="w-14 h-14 group-hover:text-red" />,
      "#fddd00",
    ],
    "Mongoose js": [
      <DiMongodb key="MongoDb" className="w-14 h-14" />,
      "#41a247",
    ],
    React: [<DiReact key="react" className="w-14 h-14 " />, "#00d8ff"],
    HTML5: [<DiHtml5 key="html" className="w-14 h-14 " />, "#f1662a"],
    CSS3: [<DiCss3 key="css3" className="w-14 h-14 " />, "#1572b6"],
    Typescript: [<SiTypescript key="TS" className="w-14 h-14 " />, "#3178c6"],
    "Redux toolkit": [
      <SiRedux key="redux" className="w-14 h-14 " />,
      "#764abc",
    ],
    "Tailwind CSS": [
      <SiTailwindcss key="tailwind" className="w-14 h-14 " />,
      "rgb(14 165 233)",
    ],
    "Framer motion": [
      <RxFramerLogo key="framer-motion" className="w-14 h-14 " />,
      "#ff007a",
    ],
    "Express js": [
      <SiExpress key="express" className="w-14 h-14 " />,
      "#000000",
    ],
    Git: [<DiGit key="git" className="w-14 h-14 " />, "#f05033"],
    Laravel: [<SiLaravel key="laravel" className="w-14 h-14 " />, "#FF2D20"],
    Prisma: [<SiPrisma key="prisma" className="w-14 h-14 " />, "#2D3748"],
    PostgreSQL: [
      <SiPostgresql key="postgresql" className="w-14 h-14 " />,
      "#336791",
    ],
    Puppeteer: [
      <SiPuppeteer key="puppeteer" className="w-14 h-14 " />,
      "#40B5A4",
    ],
    Selenium: [<SiSelenium key="selenium" className="w-14 h-14 " />, "#43B02A"],
    Shopify: [<SiShopify key="shopify" className="w-14 h-14 " />, "#7AB55C"],
    Jenkins: [<SiJenkins key="jenkins" className="w-14 h-14 " />, "#D24939"],
    Cypress: [<SiCypress key="cypress" className="w-14 h-14 " />, "#17202C"],
    Jest: [<SiJest key="jest" className="w-14 h-14 " />, "#C21325"],
    Hydrogen: [<SiShopify key="hydrogen" className="w-14 h-14 " />, "#000000"],
  };

  // single skill box
  const ToolContainer = ({ children, toolName, toolsColor, index }) => {
    return (
      <motion.div
        viewport={{ once: true }}
        initial={{
          scale: 0,
          opacity: 0,
          transition: {
            duration: 0.2,
            ease: "easeOut",
            delay: `${index / 10}`,
          },
        }}
        whileInView={{
          scale: 1,
          opacity: 1,
          transition: { duration: 0.2, ease: "easeIn", delay: `${index / 10}` },
        }}
        whileHover={{ scale: 1.1 }}
        transition={{ ease: "easeInOut" }}
        className={`flex flex-col min-h-[140px] min-w-[99px] basis-[32%] max-w-[100px] sm:max-w-[120px] border  rounded p-3 items-center justify-center gap-4 skillsIcon-container`}
        onMouseOver={(e) => {
          e.currentTarget.style.borderColor = toolsColor;
          e.currentTarget.style.color = toolsColor;
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.borderColor = "hsl(0,0%,74%)";
          e.currentTarget.style.color = "#3d4449";
        }}
      >
        {children}
        <h3 className={`font-medium  relative`}>{toolName}</h3>
      </motion.div>
    );
  };

  return (
    <section
      id="skillsSection"
      className="w-full px-[6%] py-20 md:px-[5rem] lg:px-[10rem]"
    >
      <div className=" w-full my-20">
        <h2 className="font-bold text-2xl ">My Skills</h2>
        <div className="bg-primaryColor -skew-x-6  w-[60px]  h-[10px] mt-[4px] "></div>
        <div className="flex items-center justify-center gap-4 flex-wrap mt-16 lg:px-[5%] xl:px-[10%] 2xl:px-[20%]">
          {Object.keys(tools).map((elem, index) => {
            return (
              <ToolContainer
                toolName={elem}
                index={index}
                toolsColor={tools[elem][1]}
                key={index}
              >
                {tools[elem][0]}
              </ToolContainer>
            );
          })}
        </div>
      </div>
    </section>
  );
};
