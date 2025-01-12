import React from "react";
import {
  SiJavascript,
  SiReact,
  SiAngular,
  SiExpress,
  SiTypescript,
  SiPython,
  SiTailwindcss,
  SiPrisma,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";

const Skills = [
  { name: "JavaScript", icon: <SiJavascript className="bg-[#EED49F] text-lg text-white border border-[#EED49F] border-[1.27px] w-[19.03px] h-[16.5px]" /> },
  { name: "React", icon: <SiReact className="text-customBlue  text-lg" /> },
  { name: "Angular", icon: <SiAngular className="text-[#CAD3F5] text-sm w-[15.32px] bg-white h-[16.5px] p-[2px] border text-border-[#CAD3F5]" /> },
  { name: "Express", icon: <SiExpress className="text-gray-700 text-lg" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-white bg-[#8AADF4] border border-[#8AADF4] border-[1px] text-lg" /> },
  { name: "Python", icon: <SiPython className="text-blue-400 text-lg border border-[1px] " /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400 text-lg" /> },
  { name: "Prisma", icon: <SiPrisma className="text-gray-600 text-lg" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700 text-lg" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-lg bg-black" /> },
];

const Hero = () => {
  return (
    <div className="bg-white w-full overflow-x-hidden  mt-10">
      <section className="bg-white p-6 sm:p-10 text-left w-full sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[58%] mx-auto mt-20 rounded-lg xl:ml-[10%]">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-custom-blue mt-[5%] xl:mt-[2%] sm:mb-2 font-merriweather-sans">
          Daniel Nziranziza
        </h1>
        <h2 className="text-grayCustom py-0 text-xl font-raleway">Software Engineer</h2>
        {/* Paragraph and icons in a horizontal line */}
        <div className="flex flex-wrap items-center py-0">
          <p className="text-lg mr-4 xl:w-[656px] font-raleway">
            I have realized my strength lies in learning and hard work.
          </p>
          <div className="grid grid-cols-12 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-10 gap-2 xl:w-[456px]">
            {Skills.map((skill, index) => (
              <span key={index} className="xl:w-[456px] sm:w-[20%] lg:w-[456px] md:w-[456px] sm:flex-wrap sm:flex" >
                {skill.icon}
              </span>
            ))}
          </div> 
        </div>
      </section>
    </div>
  );
};

export default Hero;