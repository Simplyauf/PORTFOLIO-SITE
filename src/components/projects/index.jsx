import { SingleProjectCard } from "./singleProjectCard";

export const Projects = () => {
  return (
    <section className="w-full px-[6%] mt-20 pt-20 skew-y-[-5deg] bg-[hsl(0,0%,96%)]">
      <div className="skew-y-[5deg]  w-full px-[2%] py-20 ">
        <h2 className="font-bold text-2xl ">My Projects</h2>
        <div className="flex flex-wrap">
          <SingleProjectCard />
        </div>
      </div>
    </section>
  );
};
