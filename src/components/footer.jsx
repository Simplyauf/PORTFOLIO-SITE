import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

export const Footer = () => {
  return (
    <footer className="w-full px-[6%]  py-20 bg-[hsl(0,0%,96%)] flex flex-col justify-center gap-7 items-center ">
      <p className="text-lg">&copy; Azeezumarfaruk@gmail.com, {new Date().getFullYear()}. All rights reserved</p>
      <div className="flex items-center gap-4 sm:gap-6">
        <FiTwitter className="w-6 h-6 cursor-pointer hover:stroke-primaryColor transition-colors ease-in duration-200 border p-3 border-[#3d4449] hover:border-primaryColor  box-content rounded-[50%]" />
        <FiGithub className="w-6 h-6 cursor-pointer hover:stroke-primaryColor transition-colors ease-in duration-200 border p-3 border-[#3d4449] hover:border-primaryColor  box-content rounded-[50%]" />
        <FiLinkedin className="w-6 h-6 cursor-pointer hover:stroke-primaryColor transition-colors ease-in duration-200 border p-3 border-[#3d4449] hover:border-primaryColor box-content rounded-[50%]" />
      </div>
    </footer>
  );
};
