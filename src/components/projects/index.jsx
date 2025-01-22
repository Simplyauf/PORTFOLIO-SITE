import { motion } from "framer-motion";
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";
import { RiGithubFill } from "react-icons/ri";
import project1_auffur from "../../assets/auffur.png";
import project2_Countries from "../../assets/rest_countries.png";
import project3_commentSection from "../../assets/comment_section.png";
import IpTrackerImg from "../../assets/Ip-tracker.png";
import updatestack from "../../assets/updatestack-img.png";
import dera from "../../assets/dera-img.png";
import kito from "../../assets/questionaire-img.png";
import automateintel from "../../assets/automateintel.png";
import coinchord from "../../assets/coinchord.png";
import wssu from "../../assets/wssu.png";
import aiIdea from "../../assets/aiIdea.png";

export const Projects = () => {
  return (
    <section
      id="projectSection"
      className="w-full px-[6%] md:px-[5rem] lg:px-[10rem] mt-20 py-20  after relative before:absolute before:left-0 before:origin-top before:bg-inherit before:skew-y-[4deg] skew-y-[-4deg] before:w-full before:h-[160px] before:-z-10 before:-bottom-[80px] bg-[hsl(0,0%,96%)]"
    >
      <div className="skew-y-[4deg]  w-full px-[2%] pt-20">
        <h2 className="font-bold text-2xl ">My Projects</h2>
        <div className=" bg-primaryColor -skew-x-6  h-[10px] mt-[4px] w-[60px]"></div>
        <div className="flex flex-wrap flex-col md:flex-row mt-16 gap-6 items-center md:justify-center md:items-stretch lg:gap-10 2xl:gap-12">
          <motion.article
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.93 }}
            transition={{ ease: "easeInOut" }}
            className="w-full cursor-pointer max-w-[350px] xl: 2xl:max-w-[400px]  3xl:max-w-[450px] flex flex-col   rounded-md bg-white   shadow-[2px_2px_6px_-2px] shadow-[hsl(0,0%,80%)]"
          >
            <img
              className="object-cover 2xl:min-h-[300px] max-w-full w-auto h-auto min-h-[262.5px] justify-self-center rounded rounded-b-none"
              src={project1_auffur}
              alt="auffur"
            />

            <div className="justify-evenly p-8  flex grow flex-col gap-4 ">
              <h3 className="font-bold text-lg">Auffur E-furniture website</h3>
              <p className="leading-[150%] text-left">
                A fullstack e-commerce website for furnitures which posesses
                cart,user authentication,database management and admin system
              </p>
              <div className="flex gap-2 font-medium text-[20px] flex-wrap">
                {" "}
                <h5 className="p-1 font-medium text-sm bg-[#3c4248] rounded text-white">
                  Mongoose
                </h5>{" "}
                <h5 className="p-1 font-medium text-sm bg-[#3c4248] rounded text-white">
                  Express
                </h5>{" "}
                <h5 className="p-1 font-medium text-sm bg-[#3c4248] rounded text-white">
                  Redux toolkit
                </h5>{" "}
                <h5 className="p-1 font-medium text-sm bg-[#3c4248] rounded text-white">
                  Reactjs
                </h5>{" "}
                <h5 className="p-1 font-medium text-sm bg-[#3c4248] rounded text-white">
                  Tailwind CSS
                </h5>
              </div>
              <div className="flex gap-4 mt-7 w-full justify-between items-center">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://auffur-furnishes.netlify.app/"
                >
                  <button className="h-12 w-[120px] bg-primaryColor text-white flex justify-center items-center gap-4 rounded shadow-sm  hover:bg-[hsl(0deg,87%,65%)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[hsl(0deg,87%,75%)]">
                    <span>Live</span>
                    <HiOutlineArrowTopRightOnSquare className="w-5 h-5 stroke-white" />
                  </button>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/Simplyauf/Auffur-Ecommerce-furniture-website"
                >
                  <button className="h-12 w-[120px] group  relative bg-transparent border-primaryColor border-2 flex items-center justify-center gap-4 overflow-hidden  rounded">
                    <span className="absolute w-64 h-0  transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-primaryColor text-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease-in-out"></span>
                    <span className="relative text-primaryColor transition-colors duration-300 group-hover:text-white ease-in-out">
                      {" "}
                      Code
                    </span>
                    <RiGithubFill className="w-5 h-5 fill-primaryColor relative transition-colors duration-300 group-hover:fill-white ease-in-out" />
                  </button>
                </a>
              </div>
            </div>
          </motion.article>
          <motion.article
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.93 }}
            transition={{ ease: "easeInOut" }}
            className="w-full cursor-pointer max-w-[350px] xl: 2xl:max-w-[400px]  3xl:max-w-[450px] flex flex-col   rounded-md bg-white   shadow-[2px_2px_6px_-2px] shadow-[hsl(0,0%,80%)]"
          >
            <img
              className="object-cover 2xl:min-h-[300px] max-w-full w-auto h-auto min-h-[262.5px] justify-self-center rounded rounded-b-none"
              src={coinchord}
              alt="auffur"
            />

            <div className="justify-evenly p-8  flex grow flex-col gap-4 ">
              <h3 className="font-bold text-lg">Coinchord</h3>
              <p className="leading-[150%] text-left">
                Make Tax payment with valid SIN number,stripe payment
                gateway,crypto payment,Request for refunds aaaand other custom
                support integrated with Hubspot Crm,Live Chat Hubspot Crm,Admin
                portals and Super Admins to manage the users
              </p>
              <div className="flex gap-2 font-medium text-[20px] flex-wrap">
                {" "}
                <h5 className="p-1 font-medium text-sm bg-[#3c4248] rounded text-white">
                  Reactjs
                </h5>{" "}
                <h5 className="p-1 font-medium text-sm bg-[#3c4248] rounded text-white">
                  Hubspot CRM
                </h5>{" "}
                <h5 className="p-1 font-medium text-sm bg-[#3c4248] rounded text-white">
                  Stripe Payment Gateway
                </h5>{" "}
                <h5 className="p-1 font-medium text-sm bg-[#3c4248] rounded text-white">
                  React Context
                </h5>{" "}
                <h5 className="p-1 font-medium text-sm bg-[#3c4248] rounded text-white">
                  Tailwind CSS
                </h5>
              </div>
              <div className="flex gap-4 mt-7 w-full justify-between items-center">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://coinchord.manaknightdigital.com/user/login"
                >
                  <button className="h-12 w-[120px] bg-primaryColor text-white flex justify-center items-center gap-4 rounded shadow-sm  hover:bg-[hsl(0deg,87%,65%)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[hsl(0deg,87%,75%)]">
                    <span>Live</span>
                    <HiOutlineArrowTopRightOnSquare className="w-5 h-5 stroke-white" />
                  </button>
                </a>
              </div>
            </div>
          </motion.article>
          <motion.article
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.93 }}
            transition={{ ease: "easeInOut" }}
            className="w-full cursor-pointer max-w-[350px] xl: 2xl:max-w-[400px]  3xl:max-w-[450px] flex flex-col rounded-md bg-white   shadow-[2px_2px_6px_-2px] shadow-[hsl(0,0%,80%)]"
          >
            <img
              className="object-cover 2xl:min-h-[300px] max-w-full w-auto min-h-[262.5px] h-auto  justify-self-center rounded  rounded-b-none"
              src={updatestack}
              alt="space-data"
            />

            <div className="justify-evenly p-8  flex grow flex-col gap-4 ">
              <h3 className="font-bold text-lg">Updatestack</h3>
              <p className="leading-[150%] text-left">
                A multiportal web application for automating and sharing updates
                between between stakeholders, investors, and companies.
              </p>
              <div className="flex gap-2 font-medium text-[20px] flex-wrap">
                {" "}
                <h5 className="p-1 font-medium text-sm bg-[#3c4248] rounded text-white">
                  Reactjs
                </h5>{" "}
                <h5 className="p-1 font-medium text-sm bg-[#3c4248] rounded text-white">
                  Hexo
                </h5>
                <h5 className="p-1 font-medium text-sm bg-[#3c4248] rounded text-white">
                  Tailwind CSS
                </h5>
              </div>
              <div className="flex gap-4 mt-7 w-full justify-between items-center">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://updatestack.com/"
                >
                  <button className="h-12 w-[120px] bg-primaryColor text-white flex justify-center items-center gap-4 rounded shadow-sm  hover:bg-[hsl(0deg,87%,65%)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[hsl(0deg,87%,75%)]">
                    <span>Live</span>
                    <HiOutlineArrowTopRightOnSquare className="w-5 h-5 stroke-white" />
                  </button>
                </a>
              </div>
            </div>
          </motion.article>
          <motion.article
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.93 }}
            transition={{ ease: "easeInOut" }}
            className="w-full cursor-pointer max-w-[350px] xl: 2xl:max-w-[400px]  3xl:max-w-[450px] flex flex-col   rounded-md bg-white   shadow-[2px_2px_6px_-2px] shadow-[hsl(0,0%,80%)]"
          >
            <img
              className="object-cover 2xl:min-h-[300px] max-w-full w-auto h-auto min-h-[262.5px] justify-self-center rounded  rounded-b-none"
              src={automateintel}
              alt="comment section"
            />

            <div className="justify-evenly p-8  flex grow flex-col gap-4 ">
              <h3 className="font-bold text-lg">AutomateIntel</h3>
              <p className="leading-[150%] text-left">
                Different AI solutions for Businesses
              </p>
              <div className="flex gap-2 font-medium text-[20px] flex-wrap">
                {" "}
                <h5 className="p-1 font-medium text-sm bg-[#3c4248] rounded text-white">
                  React context
                </h5>{" "}
                <h5 className="p-1 font-medium text-sm bg-[#3c4248] rounded text-white">
                  Reactjs
                </h5>{" "}
                <h5 className="p-1 font-medium text-sm bg-[#3c4248] rounded text-white">
                  Hexo
                </h5>
                <h5 className="p-1 font-medium text-sm bg-[#3c4248] rounded text-white">
                  Tailwind CSS
                </h5>
              </div>
              <div className="flex gap-4 mt-7 w-full justify-between items-center">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://automateintel.ai"
                >
                  <button className="h-12 w-[120px] bg-primaryColor text-white flex justify-center items-center gap-4 rounded shadow-sm  hover:bg-[hsl(0deg,87%,65%)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[hsl(0deg,87%,75%)]">
                    <span>Live</span>
                    <HiOutlineArrowTopRightOnSquare className="w-5 h-5 stroke-white" />
                  </button>
                </a>
              </div>
            </div>
          </motion.article>

          <motion.article
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.93 }}
            transition={{ ease: "easeInOut" }}
            className="w-full cursor-pointer max-w-[350px] xl: 2xl:max-w-[400px]  3xl:max-w-[450px] flex flex-col   rounded-md bg-white   shadow-[2px_2px_6px_-2px] shadow-[hsl(0,0%,80%)]"
          >
            <img
              className="object-cover 2xl:min-h-[300px] max-w-full w-auto h-auto min-h-[262.5px]  justify-self-center rounded  rounded-b-none"
              src={dera}
              alt="comment section"
            />

            <div className="justify-evenly p-8  flex grow flex-col gap-4 ">
              <h3 className="font-bold text-lg">Dera</h3>
              <p className="leading-[150%] text-left">
                A Web 3.0 platform for making interest-bearing payment
                currencies the standard.
              </p>
              <div className="flex gap-2 font-medium text-[20px] flex-wrap">
                {" "}
                <h5 className="p-1 font-medium text-sm bg-[#3c4248] rounded text-white">
                  Next.js
                </h5>{" "}
                <h5 className="p-1 font-medium text-sm bg-[#3c4248] rounded text-white">
                  Tailwind
                </h5>{" "}
                <h5 className="p-1 font-medium text-sm bg-[#3c4248] rounded text-white">
                  Ghost CMS
                </h5>
                <h5 className="p-1 font-medium text-sm bg-[#3c4248] rounded text-white">
                  Ethers.js
                </h5>
              </div>
              <div className="flex gap-4 mt-7 w-full justify-between items-center">
                <a target="_blank" rel="noreferrer" href="https://dera.money">
                  <button className="h-12 w-[120px] bg-primaryColor text-white flex justify-center items-center gap-4 rounded shadow-sm  hover:bg-[hsl(0deg,87%,65%)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[hsl(0deg,87%,75%)]">
                    <span>Live</span>
                    <HiOutlineArrowTopRightOnSquare className="w-5 h-5 stroke-white" />
                  </button>
                </a>
              </div>
            </div>
          </motion.article>
          <motion.article
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.93 }}
            transition={{ ease: "easeInOut" }}
            className="w-full cursor-pointer max-w-[350px] xl: 2xl:max-w-[400px]  3xl:max-w-[450px] flex flex-col   rounded-md bg-white   shadow-[2px_2px_6px_-2px] shadow-[hsl(0,0%,80%)]"
          >
            <img
              className="object-cover 2xl:min-h-[300px] max-w-full w-auto h-auto min-h-[262.5px] justify-self-center rounded rounded-b-none"
              src={wssu}
              alt="auffur"
            />

            <div className="justify-evenly p-8  flex grow flex-col gap-4 ">
              <h3 className="font-bold text-lg">
                Winston Salem University Application
              </h3>
              <p className="leading-[150%] text-left">
                A web application for managing and tracking the progress of
                students application in a university.
              </p>
              <div className="flex gap-2 font-medium text-[20px] flex-wrap">
                {" "}
                <h5 className="p-1 font-medium text-sm bg-[#3c4248] rounded text-white">
                  Reactjs
                </h5>{" "}
                <h5 className="p-1 font-medium text-sm bg-[#3c4248] rounded text-white">
                  Tailwind CSS
                </h5>
              </div>
              <div className="flex gap-4 mt-7 w-full justify-between items-center">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://wssu.manaknightdigital.com/user/login"
                >
                  <button className="h-12 w-[120px] bg-primaryColor text-white flex justify-center items-center gap-4 rounded shadow-sm  hover:bg-[hsl(0deg,87%,65%)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[hsl(0deg,87%,75%)]">
                    <span>Live</span>
                    <HiOutlineArrowTopRightOnSquare className="w-5 h-5 stroke-white" />
                  </button>
                </a>
              </div>
            </div>
          </motion.article>
          <motion.article
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.93 }}
            transition={{ ease: "easeInOut" }}
            className="w-full cursor-pointer max-w-[350px] xl: 2xl:max-w-[400px]  3xl:max-w-[450px] flex flex-col   rounded-md bg-white   shadow-[2px_2px_6px_-2px] shadow-[hsl(0,0%,80%)]"
          >
            <img
              className="object-cover 2xl:min-h-[300px] max-w-full w-auto h-auto min-h-[262.5px]    justify-self-center rounded rounded-b-none"
              src={IpTrackerImg}
              alt="ip address tracker"
            />

            <div className="justify-evenly p-8  flex grow flex-col gap-4 ">
              <h3 className="font-bold text-lg">IP Address Tracker</h3>
              <p className="leading-[150%] text-left">
                A websites that detects, display location details and a map via
                the ip-address using the{" "}
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://ipwho.is"
                  className="underline"
                >
                  Ipwhois
                </a>
                &nbsp; api
              </p>
              <div className="flex gap-2 font-medium text-[20px] flex-wrap">
                {" "}
                <h5 className="p-1 font-medium text-sm bg-[#3c4248] rounded text-white">
                  Reactjs
                </h5>{" "}
                <h5 className="p-1 font-medium text-sm bg-[#3c4248] rounded text-white">
                  Tailwind CSS
                </h5>
                <h5 className="p-1 font-medium text-sm bg-[#3c4248] rounded text-white">
                  Ipwho.is api
                </h5>
                <h5 className="p-1 font-medium text-sm bg-[#3c4248] rounded text-white">
                  react-leaflet
                </h5>
              </div>
              <div className="flex gap-4 mt-7 w-full justify-between items-center">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://ip-address-tracker-auf.netlify.app/"
                >
                  <button className="h-12 w-[120px] bg-primaryColor text-white flex justify-center items-center gap-4 rounded shadow-sm  hover:bg-[hsl(0deg,87%,65%)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[hsl(0deg,87%,75%)]">
                    <span>Live</span>
                    <HiOutlineArrowTopRightOnSquare className="w-5 h-5 stroke-white" />
                  </button>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/Simplyauf/IP-ADDRESS-TRACKER-REACTJS"
                >
                  <button className="h-12 w-[120px] group  relative bg-transparent border-primaryColor border-2 flex items-center justify-center gap-4 overflow-hidden  rounded">
                    <span className="absolute w-64 h-0  transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-primaryColor text-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease-in-out"></span>
                    <span className="relative text-primaryColor transition-colors duration-300 group-hover:text-white ease-in-out">
                      {" "}
                      Code
                    </span>
                    <RiGithubFill className="w-5 h-5 fill-primaryColor relative transition-colors duration-300 group-hover:fill-white ease-in-out" />
                  </button>
                </a>
              </div>
            </div>
          </motion.article>
          <motion.article
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.93 }}
            transition={{ ease: "easeInOut" }}
            className="w-full cursor-pointer max-w-[350px] xl: 2xl:max-w-[400px]  3xl:max-w-[450px] flex flex-col   rounded-md bg-white   shadow-[2px_2px_6px_-2px] shadow-[hsl(0,0%,80%)]"
          >
            <img
              className="object-contain 2xl:min-h-[300px] max-w-full w-auto h-auto min-h-[262.5px] justify-self-center rounded rounded-b-none"
              src={aiIdea}
              alt="auffur"
            />

            <div className="justify-evenly p-8  flex grow flex-col gap-4 ">
              <h3 className="font-bold text-lg">AI Idea Generator</h3>
              <p className="leading-[150%] text-left">
                An AI idea Generator that allows to save ideas from chat
              </p>
              <div className="flex gap-2 font-medium text-[20px] flex-wrap">
                {" "}
                <h5 className="p-1 font-medium text-sm bg-[#3c4248] rounded text-white">
                  Reactjs
                </h5>{" "}
                <h5 className="p-1 font-medium text-sm bg-[#3c4248] rounded text-white">
                  Gemini AI KEYs
                </h5>{" "}
                <h5 className="p-1 font-medium text-sm bg-[#3c4248] rounded text-white">
                  Express.js
                </h5>{" "}
                <h5 className="p-1 font-medium text-sm bg-[#3c4248] rounded text-white">
                  Tailwind CSS
                </h5>
              </div>
              <div className="flex gap-4 mt-7 w-full justify-between items-center">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://ai-idea-generator-three.vercel.app/"
                >
                  <button className="h-12 w-[120px] bg-primaryColor text-white flex justify-center items-center gap-4 rounded shadow-sm  hover:bg-[hsl(0deg,87%,65%)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[hsl(0deg,87%,75%)]">
                    <span>Live</span>
                    <HiOutlineArrowTopRightOnSquare className="w-5 h-5 stroke-white" />
                  </button>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/Simplyauf/AI-IDEA-GENERATOR"
                >
                  <button className="h-12 w-[120px] group  relative bg-transparent border-primaryColor border-2 flex items-center justify-center gap-4 overflow-hidden  rounded">
                    <span className="absolute w-64 h-0  transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-primaryColor text-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease-in-out"></span>
                    <span className="relative text-primaryColor transition-colors duration-300 group-hover:text-white ease-in-out">
                      {" "}
                      Code
                    </span>
                    <RiGithubFill className="w-5 h-5 fill-primaryColor relative transition-colors duration-300 group-hover:fill-white ease-in-out" />
                  </button>
                </a>
              </div>
            </div>
          </motion.article>
          <motion.article
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.93 }}
            transition={{ ease: "easeInOut" }}
            className="w-full cursor-pointer max-w-[350px] xl: 2xl:max-w-[400px]  3xl:max-w-[450px] flex flex-col   rounded-md bg-white   shadow-[2px_2px_6px_-2px] shadow-[hsl(0,0%,80%)]"
          >
            <img
              className="object-cover 2xl:min-h-[300px] max-w-full w-auto h-auto min-h-[262.5px]  justify-self-center rounded  rounded-b-none"
              src={kito}
              alt="restcountries"
            />

            <div className="justify-evenly p-8  flex grow flex-col gap-4 ">
              <h3 className="font-bold text-lg">Questionaire Platform</h3>
              <p className="leading-[150%] text-left">
                A Fullstack web platform for creating, sharing and questionaire
              </p>
              <div className="flex gap-2 font-medium text-[20px] flex-wrap">
                {" "}
                <h5 className="p-1 font-medium text-sm bg-[#3c4248] rounded text-white">
                  Express.js
                </h5>{" "}
                <h5 className="p-1 font-medium text-sm bg-[#3c4248] rounded text-white">
                  Mongoose.js
                </h5>{" "}
                <h5 className="p-1 font-medium text-sm bg-[#3c4248] rounded text-white">
                  HTML
                </h5>
                <h5 className="p-1 font-medium text-sm bg-[#3c4248] rounded text-white">
                  Passport.js
                </h5>
                <h5 className="p-1 font-medium text-sm bg-[#3c4248] rounded text-white">
                  Tailwind CSS
                </h5>
              </div>
              <div className="flex gap-4 mt-7 w-full justify-between items-center">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://kito-questionaire.vercel.app"
                >
                  <button className="h-12 w-[120px] bg-primaryColor text-white flex justify-center items-center gap-4 rounded shadow-sm  hover:bg-[hsl(0deg,87%,65%)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[hsl(0deg,87%,75%)]">
                    <span>Live</span>
                    <HiOutlineArrowTopRightOnSquare className="w-5 h-5 stroke-white" />
                  </button>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/Simplyauf/Kito-questionaire"
                >
                  <button className="h-12 w-[120px] group  relative bg-transparent border-primaryColor border-2 flex items-center justify-center gap-4 overflow-hidden  rounded">
                    <span className="absolute w-64 h-0  transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-primaryColor text-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease-in-out"></span>
                    <span className="relative text-primaryColor transition-colors duration-300 group-hover:text-white ease-in-out">
                      {" "}
                      Code
                    </span>
                    <RiGithubFill className="w-5 h-5 fill-primaryColor relative transition-colors duration-300 group-hover:fill-white ease-in-out" />
                  </button>
                </a>
              </div>
            </div>
          </motion.article>
          <motion.article
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.93 }}
            transition={{ ease: "easeInOut" }}
            className="w-full cursor-pointer max-w-[350px] xl: 2xl:max-w-[400px]  3xl:max-w-[450px] flex flex-col   rounded-md bg-white   shadow-[2px_2px_6px_-2px] shadow-[hsl(0,0%,80%)]"
          >
            <img
              className="object-cover 2xl:min-h-[300px] max-w-full w-auto h-auto min-h-[262.5px]  justify-self-center rounded  rounded-b-none"
              src={project2_Countries}
              alt="restcountries"
            />

            <div className="justify-evenly p-8  flex grow flex-col gap-4 ">
              <h3 className="font-bold text-lg">
                Countries data with theme toggler
              </h3>
              <p className="leading-[150%] text-left">
                A websites that displays countries data using &nbsp;
                <a
                  rel="noreferrer"
                  className="underline"
                  target="_blank"
                  href="https://restcountries.com"
                >
                  restcountries
                </a>
                &nbsp; api, possesing features like searching, sorting and
                filtering.
              </p>
              <div className="flex gap-2 font-medium text-[20px] flex-wrap">
                {" "}
                <h5 className="p-1 font-medium text-sm bg-[#3c4248] rounded text-white">
                  Redux toolkit
                </h5>{" "}
                <h5 className="p-1 font-medium text-sm bg-[#3c4248] rounded text-white">
                  Reactjs
                </h5>{" "}
                <h5 className="p-1 font-medium text-sm bg-[#3c4248] rounded text-white">
                  Tailwind CSS
                </h5>
              </div>
              <div className="flex gap-4 mt-7 w-full justify-between items-center">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://aufrestcountriesapi.netlify.app"
                >
                  <button className="h-12 w-[120px] bg-primaryColor text-white flex justify-center items-center gap-4 rounded shadow-sm  hover:bg-[hsl(0deg,87%,65%)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[hsl(0deg,87%,75%)]">
                    <span>Live</span>
                    <HiOutlineArrowTopRightOnSquare className="w-5 h-5 stroke-white" />
                  </button>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/Simplyauf/REST-Countries-API-with-Framer-motion "
                >
                  <button className="h-12 w-[120px] group  relative bg-transparent border-primaryColor border-2 flex items-center justify-center gap-4 overflow-hidden  rounded">
                    <span className="absolute w-64 h-0  transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-primaryColor text-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease-in-out"></span>
                    <span className="relative text-primaryColor transition-colors duration-300 group-hover:text-white ease-in-out">
                      {" "}
                      Code
                    </span>
                    <RiGithubFill className="w-5 h-5 fill-primaryColor relative transition-colors duration-300 group-hover:fill-white ease-in-out" />
                  </button>
                </a>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
};
