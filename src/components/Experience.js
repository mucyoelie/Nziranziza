import React from 'react';
const Experiences = ({exp}) =>{
  return <div  className="bg-white p-6 duration-300 flex flex-col sm:flex-row sm:items-start">
       {/* Duration (Left Side) */}
       <div className="sm:w-1/4 ml-[-3%] text-[#333333] text-lg mb-4 sm:mb-0 sm:pr-4 font-raleway">
                {exp.duration}
                </div>
                
              {/* Details (Right Side) */}
              <div className="sm:w-3/4 pl-4">
                {/* Role and Company */}
                <h3 className="text-xl font-bold text-grayCustom ml-10">
                  {exp.role} <span className="text-grayCustom font-raleway">{exp.company}</span>
                </h3>

                {/* Description */}
                <p className="text-black mt-4 text-lg ml-10 font-raleway">{exp.description}</p>
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

const Experience = () => {
  const experiences = [
    {
      role: 'Software Engineer',
      company: ',fabriq',
      duration: 'Mar 2024 - Present',
      description:
        "We are developing an innovation commenting system that leverages game design principles to enhances user engagement and reduce toxicity.Our focus is combining RPG character reputation systems + AI characters with detailed back stories to create a unique user experience.",
      buttons: ['Next.js', 'T3 Stack', 'Python', 'LLM'],
    },
    {
      role: 'Software Engineer',
      company: ',Fabriq',
      duration: 'Mar 2024 - Present',
      description:
        'We are developing an innovation commenting system that leverages game design principles to enhances user engagement and reduce toxicity.Our focus is combining RPG character reputation systems + AI characters with detailed back stories to create a unique user experience.',
      buttons: ['Next.js', 'T3 Stack', 'Python', 'LLM'],
    },
    {
      role: 'Software Engineer',
      company: ',Fabriq',
      duration: 'Mar 2024 - Present',
      description:
        'We are developing an innovation commenting system that leverages game design principles to enhances user engagement and reduce toxicity.Our focus is combining RPG character reputation systems + AI characters with detailed back stories to create a unique user experience.',
      buttons: ['Next.js', 'T3 Stack', 'Python', 'LLM'],
    },
    {
      role: 'Software Engineer',
      company: ',Fabriq',
      duration: 'Mar 2024 - Present',
      description:
        'We are developing an innovation commenting system that leverages game design principles to enhances user engagement and reduce toxicity.Our focus is combining RPG character reputation systems + AI characters with detailed back stories to create a unique user experience.',
      buttons: ['Next.js', 'T3 Stack', 'Python', 'LLM'],
    },
  ];

  return (
    <section className="bg-white w-full overflow-x-hidden xl:mt-[-10%]">
      <div className="bg-white p-6 sm:p-10 text-left w-full sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[58%] mx-auto mt-20 rounded-lg xl:ml-[10%]">
        {/* Section Header */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-custom-blue mb-4 sm:mb-6 font-merriweather-sans">
          Experience
        </h2>

        {/* Experience List */}
        <div className="space-y-8">
        {experiences.map((exp, index) => <Experiences key={index} exp={exp}></Experiences>)}
        </div>
      </div>
    </section>
  );
};

export default Experience;