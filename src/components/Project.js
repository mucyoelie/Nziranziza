import React from "react"; 
const Project = ({ exp }) => {

  return <div
  className="bg-white p-6 duration-300 flex flex-col sm:flex-row sm:items-start "
>
  {/* Project Image (Left Side) */}
  <div className="sm:w-1/4 ml-[-3%] text-[#333333] text-lg mb-4 sm:mb-0 sm:pr-4 w-full h-[120px] bg-gray-300">
    <img
      src={exp.image}
      alt={exp.project ? `${exp.project} image` : "Project image"}
      className="w-full h-full min-w-[220.06px] mx-auto border rounded-[5px] border-[2px] border-grayCustom object-cover"
    />
  </div>

  {/* Details (Right Side) */}
  <div className="sm:w-3/4 pl-4">
    {/* Project Name */}
    <h3 className="text-xl font-bold text-grayCustom ml-10 font-raleway">
      {exp.project}
    </h3>

    {/* Description */}
    <p className="text-black mt-4 text-lg ml-10 font-raleway">
      {exp.description}
    </p>

    {/* Buttons */}
    <div className="mt-4 ml-10 flex flex-wrap gap-4 text-center">
      {exp.buttons.map((button, index) => (
        <button
          key={index}
          className="bg-gray-200 text-custom-blue flex items-center justify-center px-4 py-2 rounded-2xl w-[108px] h-[29px]
          hover:bg-custom-blue hover:text-white font-raleway"
        >
          {button}
        </button>
      ))}
    </div>
  </div>
</div>
}




const Projects = () => {
  const projects = [
     
    {
      project: "1000hills",
      image: "image3.png",
      description:
        "A mobile application offering virtual tours of Rwanda's cultural sites. It features interactive exhibits,historical reenactments, and payment options for site maintenance. The app is designed for accessibility across multiple devices,promoting cultural heritage through technology.",
      buttons: ["Next.js", "Next.js", "Next.js", "Next.js"],
    },
    {
      project: "1000hills",
      image: "image3.png",
      description:
        "A mobile application offering virtual tours of Rwanda's cultural sites. It features interactive exhibits,historical reenactments, and payment options for site maintenance. The app is designed for accessibility across multiple devices,promoting cultural heritage through technology.",
      buttons: ["Next.js", "Next.js", "Next.js", "Next.js"],
    },
    {
      project: "1000hills",
      name: "hills",
      image: "image3.png",
      description:
        "A mobile application offering virtual tours of Rwanda's cultural sites. It features interactive exhibits,historical reenactments, and payment options for site maintenance. The app is designed for accessibility across multiple devices,promoting cultural heritage through technology.",
      buttons: ["Next.js", "Next.js", "Next.js", "Next.js"],
    },
    {
      project: "1000hills",
      image: "image3.png",
      description:
        "A mobile application offering virtual tours of Rwanda's cultural sites. It features interactive exhibits,historical reenactments, and payment options for site maintenance. The app is designed for accessibility across multiple devices,promoting cultural heritage through technology.",
      buttons: ["Next.js", "Next.js", "Next.js", "Next.js"],
    },
  ];

  return (
    <section className="bg-white w-full overflow-x-hidden pb-[20%]">
      <div className="bg-white p-6 sm:p-10 text-left w-full sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[58%] mx-auto mt-20 rounded-lg xl:ml-[10%]">
        {/* Section Header */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-custom-blue mb-4 sm:mb-6 font-merriweather-sans">
          Project
        </h2>

        {/* Project List */}
        <div className="space-y-8">
          {projects.map((exp, index) => <Project key={index} exp={exp}></Project>)}
        </div>
      </div>
    </section>
  );
};

export default Projects;
