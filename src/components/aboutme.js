import React from "react";
import about from "../assets/about.png";
import background from "../assets/background.png";
import resume from "../assets/Lucero.pdf"; // Adjust the filename and path as needed

const AboutMe = () => {
  return (
    <div
      className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 sm:px-12 md:px-24 lg:px-48 xl:px-64"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="relative p-6 sm:p-10 max-w-full lg:max-w-2xl bg-white bg-opacity-70 rounded-lg">
          <div className="relative">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-kaushan text-darkorange font-semibold mb-5">
              About Me
            </h1>
            <p className="text-darkorange font-black text-lg sm:text-xl mb-5">
              Hello, Welcome!!
            </p>
            <p className="text-3xl sm:text-4xl lg:text-5xl font-black font-kaushan mb-3">
              I’m Charles Joshua Lucero
            </p>
            <p className="text-sm sm:text-base lg:text-lg mb-5 font-spacemono indent-8 text-justify">
              I am a web and mobile developer with a Bachelor’s in Informatio
              Technology from the University of Saint Louis - Tuguegarao. I
              specialize in modern technologies to create efficient,
              user-focused applications, combining both technical and business
              insights. As a proactive and fast learner, I continuously expand
              my skills to stay current in the evolving tech landscape.
              Passionate about collaborating and solving complex challenges, I
              look forward to connecting with fellow tech enthusiasts!
            </p>
          </div>

          <div className="flex items-center mt-4">
            <a href={resume} download>
              <button className="bg-blue-800 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out hover:bg-blue-700 font-spacemono">
                Download My Resume
              </button>
            </a>
          </div>
        </div>

        <div className="flex justify-center content-center mt-10 lg:mt-0 lg:ml-10">
          <img
            className="drop-shadow-2xl w-full h-72 sm:h-96 lg:h-auto lg:w-auto object-contain"
            src={about}
            alt="About"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
