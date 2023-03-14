import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";
import { RiGithubFill } from "react-icons/ri";

export const Projects = () => {
  return (
    <section className="w-full px-[6%] md:px-[5rem] lg:px-[10rem] mt-20 py-20  after relative before:absolute before:left-0 before:origin-top before:bg-inherit before:skew-y-[4deg] skew-y-[-4deg] before:w-full before:h-[160px] before:-z-10 before:-bottom-[80px] bg-[hsl(0,0%,96%)]">
      <div className="skew-y-[4deg]  w-full px-[2%] pt-20">
        <h2 className="font-bold text-2xl ">My Projects</h2>
        <div className=" bg-primaryColor -skew-x-6  h-[10px] mt-[4px] w-[60px]"></div>
        <div className="flex flex-wrap flex-col md:flex-row mt-16 gap-6 items-center lg:justify-center md:items-stretch lg:gap-10 2xl:gap-12">
          <article className="w-full  flex flex-col gap-4 max-w-[350px]  2xl:max-w-[378px]  3xl:max-w-[400px]  justify-evenly p-8 rounded-md bg-white   shadow-[2px_2px_6px_-2px] shadow-[hsl(0,0%,80%)]">
            <img
              className="max-w-full h-[150px]  justify-self-center rounded"
              src="https://sanjayloncha.netlify.app/static/media/Domino.d59842af7286460603ea.JPG"
              alt=""
            />
            <p className="leading-[180%] text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque necessitatibus corrupti architecto
              perferendis cum veritatis nemo expedita magnam illum eligendi?
            </p>
            <div className="flex gap-2 font-medium text-[20px] flex-wrap">
              {" "}
              <h5 className="p-2 bg-[#3c4248] rounded text-white">Mongoose</h5>{" "}
              <h5 className="p-2 bg-[#3c4248] rounded text-white">Reactjs</h5>{" "}
              <h5 className="p-2 bg-[#3c4248] rounded text-white">Tailwind CSS</h5>
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
          </article>
          <article className="w-full  flex flex-col gap-4 justify-evenly  max-w-[350px] p-8 rounded-md bg-white  shadow-[2px_2px_6px_-2px] shadow-[hsl(0,0%,80%)]">
            <img
              className="max-w-full h-[150px] justify-self-center rounded"
              src="https://sanjayloncha.netlify.app/static/media/Domino.d59842af7286460603ea.JPG"
              alt=""
            />
            <p className="leading-[180%] text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque necessitatibus corrupti architecto
              perferendis cum veritatis nemo expedita magnam illum eligendi?
            </p>
            <div className="flex gap-2 font-medium text-[20px] flex-wrap">
              {" "}
              <h5 className="p-2 bg-[#3c4248] rounded text-white">Mongoose</h5>{" "}
              <h5 className="p-2 bg-[#3c4248] rounded text-white">Reactjs</h5>{" "}
            </div>
            <div className="flex gap-4 mt-7 w-full justify-between items-center">
              <button className="h-12 w-[120px] bg-primaryColor text-white rounded shadow-sm  hover:bg-[hsl(0deg,87%,65%)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[hsl(0deg,87%,75%)]">
                Live
              </button>
              <button className="h-12 w-[120px] group  relative bg-transparent border-primaryColor border-2  overflow-hidden  rounded">
                <span className="absolute w-64 h-0  transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-primaryColor text-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease-in-out"></span>
                <span className="relative text-primaryColor transition-colors duration-300 group-hover:text-white ease-in-out">
                  {" "}
                  Github
                </span>
              </button>
            </div>
          </article>
          <article className="w-full  flex flex-col gap-4 max-w-[350px]  justify-evenly p-8 rounded-md bg-white   shadow-[2px_2px_6px_-2px] shadow-[hsl(0,0%,80%)]">
            <img
              className="max-w-full h-[150px]  justify-self-center rounded"
              src="https://sanjayloncha.netlify.app/static/media/Domino.d59842af7286460603ea.JPG"
              alt=""
            />
            <p className="leading-[180%] text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque necessitatibus corrupti architecto
              perferendis cum veritatis nemo expedita magnam illum eligendi?
            </p>
            <div className="flex gap-2 font-medium text-[20px] flex-wrap">
              {" "}
              <h5 className="p-2 bg-[#3c4248] rounded text-white">Mongoose</h5>{" "}
              <h5 className="p-2 bg-[#3c4248] rounded text-white">Reactjs</h5>{" "}
              <h5 className="p-2 bg-[#3c4248] rounded text-white">Tailwind CSS</h5>
            </div>
            <div className="flex gap-4 mt-7 w-full justify-between items-center">
              <button className="h-12 w-[120px] bg-primaryColor text-white rounded shadow-sm  hover:bg-[hsl(0deg,87%,65%)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[hsl(0deg,87%,75%)]">
                Live
              </button>
              <button className="h-12 w-[120px] group  relative bg-transparent border-primaryColor border-2  overflow-hidden  rounded">
                <span className="absolute w-64 h-0  transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-primaryColor text-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease-in-out"></span>
                <span className="relative text-primaryColor transition-colors duration-300 group-hover:text-white ease-in-out">
                  {" "}
                  Github
                </span>
              </button>
            </div>
          </article>
          <article className="w-full  flex flex-col gap-4 max-w-[350px]  justify-evenly p-8 rounded-md bg-white   shadow-[2px_2px_6px_-2px] shadow-[hsl(0,0%,80%)]">
            <img
              className="max-w-full h-[150px]  justify-self-center rounded"
              src="https://sanjayloncha.netlify.app/static/media/Domino.d59842af7286460603ea.JPG"
              alt=""
            />
            <p className="leading-[180%] text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque necessitatibus corrupti architecto
              perferendis cum veritatis nemo expedita magnam illum eligendi?
            </p>
            <div className="flex gap-2 font-medium text-[20px] flex-wrap">
              {" "}
              <h5 className="p-2 bg-[#3c4248] rounded text-white">Mongoose</h5>{" "}
              <h5 className="p-2 bg-[#3c4248] rounded text-white">Reactjs</h5>{" "}
              <h5 className="p-2 bg-[#3c4248] rounded text-white">Tailwind CSS</h5>
            </div>
            <div className="flex gap-4 mt-7 w-full justify-between items-center">
              <button className="h-12 w-[120px] bg-primaryColor text-white rounded shadow-sm  hover:bg-[hsl(0deg,87%,65%)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[hsl(0deg,87%,75%)]">
                Live
              </button>
              <button className="h-12 w-[120px] group  relative bg-transparent border-primaryColor border-2  overflow-hidden  rounded">
                <span className="absolute w-64 h-0  transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-primaryColor text-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease-in-out"></span>
                <span className="relative text-primaryColor transition-colors duration-300 group-hover:text-white ease-in-out">
                  {" "}
                  Github
                </span>
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
