import { motion } from "framer-motion";
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";
import { RiGithubFill } from "react-icons/ri";
import outdocs from "../../assets/outdocs.png";
import stackeasy from "../../assets/stackeasy.jpeg";
import project3_commentSection from "../../assets/comment_section.png";
import updatestack from "../../assets/updatestack-img.png";
import dera from "../../assets/dera-img.png";
import automateintel from "../../assets/automateintel.png";
import coinchord from "../../assets/coinchord.png";
import wssu from "../../assets/wssu.png";
import encryptusImg from "../../assets/ENCRYPTUS.png";
import dream2movieImg from "../../assets/DREAM2MOVIE.png";
import longtermhireImg from "../../assets/LONGTERMHIRE.png";
import equalityRecordsImg from "../../assets/equalityrecords.png";
import eventParkImg from "../../assets/eventpark.png";
import globalrupeeImg from "../../assets/globalrupee.jpeg";
import unimarketsImg from "../../assets/unimarkets.jpeg";
import taraImg from "../../assets/tara.jpeg";

const projectsData = [
  {
    title: "OutDocs",
    description:
      "An interactive intelligence engine that transforms meeting notes, articles, and research papers into source-grounded answers powered by RAG (Retrieval-Augmented Generation).",
    image: outdocs,
    liveLink: "https://outdocs.xyz/",
    techStack: ["LangChain v0.3", "Vector Embeddings", "RAG", "AI"],
  },
  {
    title: "StackEasy",
    description:
      "A comprehensive credit stacking platform to manage cards, limits, and benefits in one place, featuring AI-powered insights and real-time dashboard analytics.",
    image: stackeasy,
    liveLink: "https://www.stackeasy.ai/",
    techStack: ["Reactjs", "Node.js", "MX API", "AI Insights", "Tailwind CSS"],
  },
  {
    title: "Encryptus",
    description:
      "A fintech platform specialized in crypto on-ramps and off-ramps, integrated with Fireblocks for secure custody, Ethers.js for blockchain interactions, Sumsub for KYC/AML compliance, and built with a Nest.js backend.",
    image: encryptusImg,
    liveLink: "https://encryptus.io/",
    techStack: ["Nest.js", "Fireblocks", "Ethers.js", "Sumsub", "Typescript", "Tailwind CSS"],
    isFirst: true,
  },
  {
    title: "UniMarkets",
    description:
      "A prediction market aggregator unifying 12+ platforms including Polymarket, Kalshi, Limitless, and Jupiter into one trading experience, with wallet-based auth, account abstraction, and cross-chain support spanning EVM and Solana.",
    image: unimarketsImg,
    liveLink: "https://unimarkets.io/",
    techStack: ["Next.js", "NestJS", "MongoDB", "Polymarket CLOB", "Privy", "wagmi"],
  },
  {
    title: "Tara",
    description:
      "An AI HRMS and workforce automation platform with purpose-built AI agents for HR, finance, and project management, letting teams handle hiring, payroll, and task workflows through a chat-first interface.",
    image: taraImg,
    liveLink: "https://tara.nonceblox.com/",
    techStack: ["React", "TypeScript", "Express.js", "VoltAgent", "RAG"],
  },
  {
    title: "Dream2Movie",
    description:
      "An innovative AI-powered mobile app where users record their dreams in a diary and transform them into AI-generated videos. Built with React Native (Expo) and Express.js, deployed on both iOS and Android platforms.",
    image: dream2movieImg,
    liveLink: "https://play.google.com/store/apps/details?id=com.dream2movie.app&hl=en-US&ah=WylOCFSkDChW6yztnslHo121gxQ",
    techStack: ["React Native", "Expo", "Express.js", "Groq", "FastAPI"],
  },
  {
    title: "LongTermHire",
    description:
      "A comprehensive equipment rental management platform that streamlines the hiring process, integrating QuickBooks for seamless financial management and accounting.",
    image: longtermhireImg,
    liveLink: "https://www.longtermhire.com/login/",
    techStack: ["Reactjs", "Node.js", "Quickbooks API", "Express", "Tailwind CSS"],
  },
  {
    title: "Equality Records",
    description:
      "A music production management application featuring distinct portals for member.cheereq.com, manager.cheereq.com, client.cheereq.com, and admin.cheereq.com. Facilitates seamless project management and collaboration among artists, engineers, and writers.",
    image: equalityRecordsImg,
    liveLink: "https://cheereq.com/",
    techStack: ["Reactjs", "Node.js", "Tailwind CSS", "Express", "MySQL"],
  },
  {
    title: "EventPark",
    description:
      "A comprehensive event planning application designed for seamless event management and organization across Africa.",
    image: eventParkImg,
    liveLink: "https://www.linkedin.com/company/eventpark-ltd",
    techStack: ["Reactjs", "Vite", "Tailwind CSS", "Node.js"],
  },
  {
    title: "GlobalRupee Pay",
    description:
      "A modern remittance platform enabling fast, transparent, and compliant digital money transfers from the U.S. to India and beyond — featuring live exchange rates, zero transfer fees, and within-minutes delivery.",
    image: globalrupeeImg,
    liveLink: "https://globalrupeepay.com/",
    techStack: ["Reactjs", "Node.js", "Tailwind CSS", "Nium API"],
  },
  {
    title: "Dera",
    description:
      "A Web 3.0 platform for making interest-bearing payment currencies the standard, focusing on decentralized finance solutions.",
    image: dera,
    // liveLink: "https://derafi.io/",
    techStack: ["Next.js", "Tailwind", "Ghost CMS", "Ethers.js"],
  },
  {
    title: "AutomateIntel",
    description:
      "An AI-powered Omnichannel Marketing and Automation SaaS platform for businesses — automating outreach and customer engagement across AI voice calls (inbound & outbound), SMS flows, email campaigns, and source-grounded website chatbots, unified through a multi-channel workflow engine.",
    image: automateintel,
    liveLink: "https://voice.automateintel.ai/user/login",
    techStack: ["Reactjs", "React Context", "Hexo", "Tailwind CSS", "Twilio"],
  },
  {
    title: "Weritas",
    description:
      "A Web5-enabled institutional digital infrastructure platform that connects identity, intelligence, and programmable settlement into a unified system — enabling structured, scalable, and compliant participation across modern financial systems through its identity, intelligence, access, and settlement layers.",
    image: null,
    liveLink: "https://weritas.io/",
    techStack: ["Web5", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Winston Salem University Application",
    description: "A web application for managing and tracking the progress of students applications in a university ecosystem.",
    image: wssu,
    liveLink: "https://dashboard.winstonsalemteach.com/user/login",
    techStack: ["Reactjs", "Tailwind CSS"],
  },
  {
    title: "Coinchord",
    description:
      "Make Tax payment with valid SIN number,stripe payment gateway,crypto payment,Request for refunds and other custom support integrated with Hubspot CRM, Live Chat, Admin portals and Super Admins.",
    image: coinchord,
    techStack: ["Reactjs", "Hubspot CRM", "Stripe Payment Gateway", "React Context", "Tailwind CSS"],
  },
  {
    title: "Updatestack",
    description:
      "A multiportal web application for automating and sharing updates between stakeholders, investors, and companies.",
    image: updatestack,
    liveLink: "https://updatestack-01.netlify.app",
    techStack: ["Reactjs", "Hexo", "Tailwind CSS","Nodejs","Plaid"],
  },
  {
    title: "Legiteem8",
    description:
      "A vintage T-shirt verification platform and marketplace that combines community and expert authentication with computer vision, minting each verified item as an NFT to guarantee provenance. Built an expert authentication network and grew a community of 30,000 users.",
    image: "/legiteem8-banner.webp",
    techStack: ["Swift", "Kotlin", "Node", "Smart Contract", "Moralis", "Computer Vision"],
  },
];

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
          {projectsData.map((project, index) => (
            <motion.article
              key={index}
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.93 }}
              transition={{ ease: "easeInOut" }}
              className="w-full cursor-pointer max-w-[350px] xl: 2xl:max-w-[400px]  3xl:max-w-[450px] flex flex-col   rounded-md bg-white   shadow-[2px_2px_6px_-2px] shadow-[hsl(0,0%,80%)]"
            >
              {project.image ? (
                <img
                  className="object-cover 2xl:min-h-[300px] max-w-full w-auto h-auto min-h-[262.5px] justify-self-center rounded rounded-b-none"
                  src={project.image}
                  alt={project.title}
                />
              ) : (
                <div className="min-h-[262.5px] 2xl:min-h-[300px] bg-gray-100 flex items-center justify-center rounded rounded-b-none">
                  <span className="text-gray-400 font-semibold text-lg">{project.title}</span>
                </div>
              )}

              <div className="justify-evenly p-8  flex grow flex-col gap-4 ">
                <h3 className="font-bold text-lg">{project.title}</h3>
                <p className="leading-[150%] text-left">{project.description}</p>
                <div className="flex gap-2 font-medium text-[20px] flex-wrap">
                  {project.techStack.map((tech, i) => (
                    <h5 key={i} className="p-1 font-medium text-sm bg-[#3c4248] rounded text-white">
                      {tech}
                    </h5>
                  ))}
                </div>
                <div className="flex gap-4 mt-7 w-full justify-between items-center">
                  {project.liveLink && (
                    <a target="_blank" rel="noreferrer" href={project.liveLink}>
                      <button className="h-12 w-[120px] bg-primaryColor text-white flex justify-center items-center gap-4 rounded shadow-sm  hover:bg-[hsl(0deg,87%,65%)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[hsl(0deg,87%,75%)]">
                        <span>Live</span>
                        <HiOutlineArrowTopRightOnSquare className="w-5 h-5 stroke-white" />
                      </button>
                    </a>
                  )}
                  {project.githubLink && (
                    <a target="_blank" rel="noreferrer" href={project.githubLink}>
                      <button className="h-12 w-[120px] group  relative bg-transparent border-primaryColor border-2 flex items-center justify-center gap-4 overflow-hidden  rounded">
                        <span className="absolute w-64 h-0  transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-primaryColor text-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease-in-out"></span>
                        <span className="relative text-primaryColor transition-colors duration-300 group-hover:text-white ease-in-out">
                          Code
                        </span>
                        <RiGithubFill className="w-5 h-5 fill-primaryColor relative transition-colors duration-300 group-hover:fill-white ease-in-out" />
                      </button>
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
