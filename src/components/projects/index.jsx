import { motion } from "framer-motion";
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";
import { RiGithubFill } from "react-icons/ri";
import project1_auffur from "../../assets/auffur.png";
import project2_Countries from "../../assets/rest_countries.png";
import project3_commentSection from "../../assets/comment_section.png";
import IpTrackerImg from "../../assets/Ip-tracker.png";
import spaceApiImg from "../../assets/space_tourism.png";

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
              className="max-w-full w-auto h-auto  justify-self-center rounded rounded-b-none"
              src={project1_auffur}
              alt=""
            />

            <div className="justify-evenly p-8  flex grow flex-col gap-4 ">
              <h3 className="font-bold text-lg">Auffur E-furniture website</h3>
              <p className="leading-[150%] text-justify">
                A fullstack e-commerce website for furnitures which posesses cart,user authentication,database
                management and admin system
              </p>
              <div className="flex gap-2 font-medium text-[20px] flex-wrap">
                {" "}
                <h5 className="p-1 font-medium text-sm bg-[#3c4248] rounded text-white">Mongoose</h5>{" "}
                <h5 className="p-1 font-medium text-sm bg-[#3c4248] rounded text-white">Express</h5>{" "}
                <h5 className="p-1 font-medium text-sm bg-[#3c4248] rounded text-white">Redux toolkit</h5>{" "}
                <h5 className="p-1 font-medium text-sm bg-[#3c4248] rounded text-white">Reactjs</h5>{" "}
                <h5 className="p-1 font-medium text-sm bg-[#3c4248] rounded text-white">Tailwind CSS</h5>
              </div>
              <div className="flex gap-4 mt-7 w-full justify-between items-center">
                <button className="h-12 w-[120px] bg-primaryColor text-white flex justify-center items-center gap-4 rounded shadow-sm  hover:bg-[hsl(0deg,87%,65%)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[hsl(0deg,87%,75%)]">
                  <span>Live</span>
                  <HiOutlineArrowTopRightOnSquare className="w-5 h-5 stroke-white" />
                </button>
                <button className="h-12 w-[120px] group  relative bg-transparent border-primaryColor border-2 flex items-center justify-center gap-4 overflow-hidden  rounded">
                  <span className="absolute w-64 h-0  transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-primaryColor text-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease-in-out"></span>
                  <span className="relative text-primaryColor transition-colors duration-300 group-hover:text-white ease-in-out">
                    {" "}
                    Code
                  </span>
                  <RiGithubFill className="w-5 h-5 fill-primaryColor relative transition-colors duration-300 group-hover:fill-white ease-in-out" />
                </button>
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
              className="max-w-full w-auto h-auto  justify-self-center rounded rounded-b-none"
              src={IpTrackerImg}
              alt=""
            />

            <div className="justify-evenly p-8  flex grow flex-col gap-4 ">
              <h3 className="font-bold text-lg">IP Address Tracker</h3>
              <p className="leading-[150%] text-justify">
                A websites that detects, display location details and a map via the ip-address using the{" "}
                <a rel="noreferrer" target="_blank" href="https://ipwho.is" className="underline">
                  Ipwhois
                </a>
                &nbsp; api
              </p>
              <div className="flex gap-2 font-medium text-[20px] flex-wrap">
                {" "}
                <h5 className="p-1 font-medium text-sm bg-[#3c4248] rounded text-white">Reactjs</h5>{" "}
                <h5 className="p-1 font-medium text-sm bg-[#3c4248] rounded text-white">Tailwind CSS</h5>
                <h5 className="p-1 font-medium text-sm bg-[#3c4248] rounded text-white">Ipwho.is api</h5>
                <h5 className="p-1 font-medium text-sm bg-[#3c4248] rounded text-white">react-leaflet</h5>
              </div>
              <div className="flex gap-4 mt-7 w-full justify-between items-center">
                <button className="h-12 w-[120px] bg-primaryColor text-white flex justify-center items-center gap-4 rounded shadow-sm  hover:bg-[hsl(0deg,87%,65%)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[hsl(0deg,87%,75%)]">
                  <span>Live</span>
                  <HiOutlineArrowTopRightOnSquare className="w-5 h-5 stroke-white" />
                </button>
                <button className="h-12 w-[120px] group  relative bg-transparent border-primaryColor border-2 flex items-center justify-center gap-4 overflow-hidden  rounded">
                  <span className="absolute w-64 h-0  transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-primaryColor text-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease-in-out"></span>
                  <span className="relative text-primaryColor transition-colors duration-300 group-hover:text-white ease-in-out">
                    {" "}
                    Code
                  </span>
                  <RiGithubFill className="w-5 h-5 fill-primaryColor relative transition-colors duration-300 group-hover:fill-white ease-in-out" />
                </button>
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
              className="max-w-full w-auto h-auto  justify-self-center rounded  rounded-b-none"
              src={project2_Countries}
              alt=""
            />

            <div className="justify-evenly p-8  flex grow flex-col gap-4 ">
              <h3 className="font-bold text-lg">Countries data with theme toggler</h3>
              <p className="leading-[150%] text-justify">
                A websites that displays countries data using &nbsp;
                <a rel="noreferrer" className="underline" target="_blank" href="https://restcountries.com">
                  restcountries
                </a>
                &nbsp; api, possesing features like searching, sorting and filtering.
              </p>
              <div className="flex gap-2 font-medium text-[20px] flex-wrap">
                {" "}
                <h5 className="p-1 font-medium text-sm bg-[#3c4248] rounded text-white">Redux toolkit</h5>{" "}
                <h5 className="p-1 font-medium text-sm bg-[#3c4248] rounded text-white">Reactjs</h5>{" "}
                <h5 className="p-1 font-medium text-sm bg-[#3c4248] rounded text-white">Tailwind CSS</h5>
              </div>
              <div className="flex gap-4 mt-7 w-full justify-between items-center">
                <button className="h-12 w-[120px] bg-primaryColor text-white flex justify-center items-center gap-4 rounded shadow-sm  hover:bg-[hsl(0deg,87%,65%)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[hsl(0deg,87%,75%)]">
                  <span>Live</span>
                  <HiOutlineArrowTopRightOnSquare className="w-5 h-5 stroke-white" />
                </button>
                <button className="h-12 w-[120px] group  relative bg-transparent border-primaryColor border-2 flex items-center justify-center gap-4 overflow-hidden  rounded">
                  <span className="absolute w-64 h-0  transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-primaryColor text-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease-in-out"></span>
                  <span className="relative text-primaryColor transition-colors duration-300 group-hover:text-white ease-in-out">
                    {" "}
                    Code
                  </span>
                  <RiGithubFill className="w-5 h-5 fill-primaryColor relative transition-colors duration-300 group-hover:fill-white ease-in-out" />
                </button>
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
              className="max-w-full w-auto h-auto  justify-self-center rounded  rounded-b-none"
              src={spaceApiImg}
              alt=""
            />

            <div className="justify-evenly p-8  flex grow flex-col gap-4 ">
              <h3 className="font-bold text-lg">Space tourism multipage</h3>
              <p className="leading-[150%] text-justify">A multipage web app</p>
              <div className="flex gap-2 font-medium text-[20px] flex-wrap">
                {" "}
                <h5 className="p-1 font-medium text-sm bg-[#3c4248] rounded text-white">Reactjs</h5>{" "}
                <h5 className="p-1 font-medium text-sm bg-[#3c4248] rounded text-white">Tailwind CSS</h5>
              </div>
              <div className="flex gap-4 mt-7 w-full justify-between items-center">
                <button className="h-12 w-[120px] bg-primaryColor text-white flex justify-center items-center gap-4 rounded shadow-sm  hover:bg-[hsl(0deg,87%,65%)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[hsl(0deg,87%,75%)]">
                  <span>Live</span>
                  <HiOutlineArrowTopRightOnSquare className="w-5 h-5 stroke-white" />
                </button>
                <button className="h-12 w-[120px] group  relative bg-transparent border-primaryColor border-2 flex items-center justify-center gap-4 overflow-hidden  rounded">
                  <span className="absolute w-64 h-0  transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-primaryColor text-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease-in-out"></span>
                  <span className="relative text-primaryColor transition-colors duration-300 group-hover:text-white ease-in-out">
                    {" "}
                    Code
                  </span>
                  <RiGithubFill className="w-5 h-5 fill-primaryColor relative transition-colors duration-300 group-hover:fill-white ease-in-out" />
                </button>
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
              className="max-w-full w-auto h-auto  justify-self-center rounded  rounded-b-none"
              src={project3_commentSection}
              alt=""
            />

            <div className="justify-evenly p-8  flex grow flex-col gap-4 ">
              <h3 className="font-bold text-lg">Interactive Comment section</h3>
              <p className="leading-[150%] text-justify">
                An interactive comment section which posesses ability to upvotes & downvotes posts,send posts,delete
                posts,track posts time and also sort posts based on votes.
              </p>
              <div className="flex gap-2 font-medium text-[20px] flex-wrap">
                {" "}
                <h5 className="p-1 font-medium text-sm bg-[#3c4248] rounded text-white">React context</h5>{" "}
                <h5 className="p-1 font-medium text-sm bg-[#3c4248] rounded text-white">Reactjs</h5>{" "}
                <h5 className="p-1 font-medium text-sm bg-[#3c4248] rounded text-white">Tailwind CSS</h5>
              </div>
              <div className="flex gap-4 mt-7 w-full justify-between items-center">
                <button className="h-12 w-[120px] bg-primaryColor text-white flex justify-center items-center gap-4 rounded shadow-sm  hover:bg-[hsl(0deg,87%,65%)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[hsl(0deg,87%,75%)]">
                  <span>Live</span>
                  <HiOutlineArrowTopRightOnSquare className="w-5 h-5 stroke-white" />
                </button>
                <button className="h-12 w-[120px] group  relative bg-transparent border-primaryColor border-2 flex items-center justify-center gap-4 overflow-hidden  rounded">
                  <span className="absolute w-64 h-0  transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-primaryColor text-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease-in-out"></span>
                  <span className="relative text-primaryColor transition-colors duration-300 group-hover:text-white ease-in-out">
                    {" "}
                    Code
                  </span>
                  <RiGithubFill className="w-5 h-5 fill-primaryColor relative transition-colors duration-300 group-hover:fill-white ease-in-out" />
                </button>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
};
