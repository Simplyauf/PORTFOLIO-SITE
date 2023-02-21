import { DiJavascript1, DiMongodb, DiReact, DiNodejs, DiHtml5, DiCss3, DiGit } from "react-icons/di";
import { RxFramerLogo } from "react-icons/rx";
import { SiTailwindcss, SiRedux, SiExpress } from "react-icons/si";

export const Skills = () => {
  const tools = {
    javascript: <DiJavascript1 className="w-14 h-14 " />,
    MongoDb: <DiMongodb className="w-14 h-14 " />,
    React: <DiReact className="w-14 h-14 " />,
    HTML5: <DiHtml5 className="w-14 h-14 " />,
    NodeJs: <DiCss3 className="w-14 h-14 " />,
    "Redux toolkit": <SiRedux className="w-14 h-14 " />,
    "Tailwind CSS": <SiTailwindcss className="w-14 h-14 " />,
    "Framer motion": <RxFramerLogo className="w-14 h-14 " />,
    "Express js": <SiExpress className="w-14 h-14 " />,
    Git: <DiGit className="w-14 h-14 " />,
  };

  const ToolContainer = ({ children, toolName }) => {
    return (
      <div className="flex flex-col min-h-[140px] min-w-[99px] basis-[31%] max-w-[100px] border border-darkSecondaryColor rounded-sm p-3 items-center hover: justify-center gap-4 skillsIcon-container">
        {children}
        <h3 className="font-medium">{toolName}</h3>
      </div>
    );
  };

  return (
    <section className="w-full px-[6%] mt-20 py-20 skew-y-[-5deg]">
      <div className="skew-y-[5deg]  w-full ">
        <h2 className="font-bold text-2xl ">My Skills</h2>
        <div className="flex items-center justify-center gap-x-[3%] gap-y-[8px] flex-wrap mt-16">
          {Object.keys(tools).map((elem, index) => {
            return (
              <ToolContainer toolName={elem} key={index}>
                {tools[elem]}
              </ToolContainer>
            );
          })}
        </div>
      </div>
    </section>
  );
};
