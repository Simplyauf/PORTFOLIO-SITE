import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";

export const Footer = () => {
  return (
    <footer className="w-full px-[6%]  py-20 bg-[hsl(0,0%,96%)] flex flex-col justify-center gap-7 items-center ">
      <p className="text-lg">&copy; Azeezumarfaruk@gmail.com, {new Date().getFullYear()}. All rights reserved</p>
      <div className="flex items-center gap-4 sm:gap-6">
        <a target="_blank" rel="noreferrer" href="https://twitter.com/UmarFarukA13?t=mvWsP0OImHUckTdvQRz4Yw&s=09">
          <FiTwitter className="w-6 h-6 cursor-pointer hover:stroke-primaryColor transition-colors ease-in duration-200 border p-3 border-[#3d4449] hover:border-primaryColor  box-content rounded-[50%]" />
        </a>
        <a target="_blank" rel="noreferrer" href="https://github.com/Simplyauf">
          <FiGithub className="w-6 h-6 cursor-pointer hover:stroke-primaryColor transition-colors ease-in duration-200 border p-3 border-[#3d4449] hover:border-primaryColor  box-content rounded-[50%]" />
        </a>
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/azeezumarfaruk">
          <FiLinkedin className="w-6 h-6 cursor-pointer hover:stroke-primaryColor transition-colors ease-in duration-200 border p-3 border-[#3d4449] hover:border-primaryColor box-content rounded-[50%]" />
        </a>
        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/callmhe_auf/">
          <FiInstagram className="w-6 h-6 cursor-pointer hover:stroke-primaryColor transition-colors ease-in duration-200 border p-3 border-[#3d4449] hover:border-primaryColor box-content rounded-[50%]" />
        </a>
        <a target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send?phone=2348149660220">
          <BsWhatsapp className="w-6 h-6 cursor-pointer hover:fill-primaryColor transition-colors ease-in duration-200 border p-3 border-[#3d4449] hover:border-primaryColor box-content rounded-[50%]" />
        </a>
      </div>
    </footer>
  );
};
