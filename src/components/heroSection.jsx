import { FiInstagram, FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi";
import { BsWhatsapp, BsShieldPlus } from "react-icons/bs";

const HeroSection = () => {
  return (
    <section className="flex justify-center items-center mt-[calc(80px+5rem)] w-full  pb-20 px-[6%]">
      <div className=" flex flex-col  justify-center items-center">
        <p className="text-lg font-medium">Hello my name is</p>
        <h1 className="text-[3.25rem] text-center leading-[130%] font-bold ">Azeez Umar Faruq</h1>
        <h3 className="text-2xl mt-7 font-bold">Frontend Developer</h3>
        <p className="text-lg font-medium mt-1 text-center">
          Passionate about building responsive and user-friendly web applications
        </p>
        <div className="flex gap-4 mt-8">
          <button className="h-12 w-[120px] bg-primaryColor text-white rounded">Resume</button>
          <button className="h-12 w-[120px] bg-transparent border-primaryColor border-2 rounded">Contact Me</button>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-bold text-center">Lets connect</h2>
          <div className="flex justify-center items-center gap-4 mt-4">
            <FiTwitter className="w-6 h-6 " />
            <FiInstagram className="w-6 h-6 " />
            <FiGithub className="w-6 h-6 " />
            <BsWhatsapp className="w-6 h-6 " />
            <FiLinkedin className="w-6 h-6 " />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
