import React from "react";

const About = () => {
  return (
    <div className="bg-white w-full overflow-x-hidden mt-10">
      <section className="bg-white p-6 sm:p-10 text-left w-full sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[58%] mx-auto mt-20 rounded-lg xl:ml-[10%]">
        <div className="w-full">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-custom-blue mb-4 sm:mb-6 font-merriweather-sans">
            About me
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-[18px] text-black mb-4 
          sm:mb-6 leading-relaxed xl:w-full xl:h-[559px] font-raleway
          ">
            Hi, I'm Daniel Nziranziza, a Senior Full Stack Developer based in Kigali, Rwanda.
            I'm passionate about building innovative web and mobile applications that solve real-world
            problems and enhance user experience.
            <br />
            <br />
            With a strong background in modern frameworks like React, Angular, and Node.js, I specialize
            in turning ideas into functional, scalable solutions. Over the years, I've worked on diverse
            projects, from e-commerce platforms and CRM systems to education tools and cultural exploration
            apps. My work combines technical expertise, creative design, and a deep understanding of user
            needs.
            <br />
            <br />
            I believe in continuous learning and collaboration. Whether I'm leading a development team,
            refactoring complex codebases, or crafting pixel-perfect interfaces, I approach every challenge
            with a dedication and problem-solving mindset.
            <br />
            <br />
            When I'm not coding, I enjoy contributing to open-source projects, exploring new technologies,
            and sharing my journey with the tech community. Let's build something amazing together!
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;