export const AboutMe = () => {
  return (
    <section className="w-full px-[6%] mt-20 py-20  after relative before:absolute before:left-0 before:origin-top before:bg-inherit before:-skew-y-[4deg] skew-y-[4deg] before:w-full before:h-[160px] before:-z-10 before:-bottom-[80px] bg-[hsl(0,0%,96%)]">
      <div className="skew-y-[-4deg]  w-full px-[2%] pt-20 ">
        <h2 className="font-bold text-2xl ">About Me</h2>
        <p className="leading-[140%] mt-16">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ullam hic corporis ab recusandae aut at autem
          consequatur numquam cumque! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium placeat
          corrupti quae quod cum, expedita suscipit sed atque cumque voluptates. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Laborum esse eveniet minus dignissimos itaque molestiae cum autem laudantium est sunt.
        </p>
        <button className="h-12 mt-5 w-[120px] bg-primaryColor text-white rounded">Resume</button>
      </div>
    </section>
  );
};
