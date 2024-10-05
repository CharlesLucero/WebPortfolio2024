import React, { useState } from "react";
import code from "../assets/code.png"; // Ensure the path is correct
import toga from "../assets/toga.png"; // Ensure the path is correct
import csharp from "../assets/csharp.png";
import cplus from "../assets/c++.png";
import css from "../assets/css.png";
import express from "../assets/express.png";
import flutter from "../assets/flutter.png";
import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import mongo from "../assets/mongo.png";
import next from "../assets/next.png";
import node from "../assets/node.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";

const TechnicalSkills = () => {
  const [showSkills, setShowSkills] = useState(false);

  // Function to toggle between skills and education
  const toggleView = () => {
    setShowSkills(!showSkills);
  };

  return (
    <div className="relative min-h-screen">
      <div className="relative flex justify-between pt-16 pl-64 pr-64">
        {/* Dynamically change color for 'Skills' and 'Education' */}
        <h1 className="font-kaushan text-7xl relative z-10 content-center text-darkblue font-extrabold">
          <span className={showSkills ? "text-orange-500" : "text-darkorange"}>
            Skills
          </span>{" "}
          <span className="text-slash">/</span>{" "}
          <span className={!showSkills ? "text-orange-500" : "text-darkorange"}>
            Education
          </span>
        </h1>

        {/* Shadow text for the heading */}
        <h1
          className="font-extrabold pt-28 pl-64 absolute top-0 left-0 text-7xl font-kaushan opacity-40 blur-sm"
          style={{ color: "rgba(0, 0, 0, 0.9)" }}
        >
          Skills / Education
        </h1>

        {/* Display images with animations */}
        <div className="flex items-center gap-[5px]">
          <img
            src={code}
            alt="Code"
            className={`w-[150px] h-[100px] transition-transform duration-500 ease-in-out ${
              !showSkills ? "transform scale-100" : "transform scale-0"
            }`}
          />
          <img
            src={toga}
            alt="Toga"
            className={`w-[200px] h-[200px] transition-transform duration-500 ease-in-out${
              showSkills ? "transform scale-100" : "transform scale-0"
            }`}
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center  ">
        {showSkills ? (
          <div className="h-[550px] w-[80%] rounded-lg border-2 flex justify-between border-light">
            <div className="flex flex-col p-5 justify-between">
              <div className="rounded-lg border-2 w-[720px] h-[250px] flex flex-col items-center justify-center border-light   p-2 text-center hover:bg-light hover:opacity-90 transition-all duration-300">
                <p className="font-kaushan text-orange text-5xl font-semibold mb-4">
                  2020-2024 / College
                </p>
                <p className="font-spacemono font-semibold text-xl">
                  University of Saint Louis - Tuguegarao
                </p>
                <p className="font-normal text-lg">
                  Bachelor of Science in Information Technology
                </p>
              </div>

              <div className="rounded-lg border-2 w-[720px] h-[250px] flex flex-col items-center justify-center border-light   p-2 text-center hover:bg-light hover:opacity-90 transition-all duration-300">
                <p className="font-kaushan text-orange text-5xl font-semibold mb-4">
                  2018-2020 / Senior High
                </p>
                <p className="font-spacemono font-semibold text-xl">
                  Magsaysay Memorial High School
                </p>
                <p className="font-normal text-lg">
                  Humanities and Social Sciences
                </p>
              </div>
            </div>

            <div className="flex flex-col p-5 justify-between">
              <div className="rounded-lg border-2 w-[720px] h-[250px] flex flex-col items-center justify-center border-light   p-2 text-center hover:bg-light hover:opacity-90 transition-all duration-300">
                <p className="font-kaushan text-orange text-5xl font-semibold mb-4">
                  2014-2018 / Junior High
                </p>
                <p className="font-spacemono font-semibold text-xl">
                  Magsaysay Memorial High School
                </p>
                <p className="font-normal text-lg">Junior High School</p>
              </div>

              <div className="rounded-lg border-2 w-[720px] h-[250px] flex flex-col items-center justify-center border-light   p-2 text-center hover:bg-light hover:opacity-90 transition-all duration-300">
                <p className="font-kaushan text-orange text-5xl font-semibold mb-4">
                  2008-2014 / Elementary
                </p>
                <p className="font-spacemono font-semibold text-xl">
                  Seventh Day Adventist Elementary School
                </p>
                <p className="font-normal text-lg">Elementary</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="h-[550px] w-[80%] rounded-lg border-2 border-orange">
            <div className="flex mb-2 justify-between p-2">
              <img
                src={react}
                alt="React"
                className="w-[240px] h-[250px] border-2 border-orange rounded-[5px] transition-opacity duration-300 hover:opacity-100 hover:bg-orange"
              />
              <img
                src={csharp}
                alt="Csharp"
                className="w-[240px] h-[250px] border-2 border-orange rounded-[5px] transition-opacity duration-300 hover:opacity-100 hover:bg-orange"
              />
              <img
                src={cplus}
                alt="Cplus"
                className="w-[240px] h-[250px] border-2 border-orange rounded-[5px] transition-opacity duration-300 hover:opacity-100 hover:bg-orange"
              />
              <img
                src={html}
                alt="Html"
                className="w-[240px] h-[250px] border-2 border-orange rounded-[5px] transition-opacity duration-300 hover:opacity-100 hover:bg-orange"
              />
              <img
                src={css}
                alt="Css"
                className="w-[240px] h-[250px] border-2 border-orange rounded-[5px] transition-opacity duration-300 hover:opacity-100 hover:bg-orange"
              />
              <img
                src={flutter}
                alt="Flutter"
                className="w-[240px] h-[250px] border-2 border-orange rounded-[5px] transition-opacity duration-300 hover:opacity-100 hover:bg-orange"
              />
            </div>
            <div className="flex justify-between p-2">
              <img
                src={express}
                alt="Express"
                className="w-[240px] h-[250px] border-2 border-orange rounded-[5px] transition-opacity duration-300 hover:opacity-100 hover:bg-orange"
              />

              <img
                src={javascript}
                alt="Javascript"
                className="w-[240px] h-[250px] border-2 border-orange rounded-[5px] transition-opacity duration-300 hover:opacity-100 hover:bg-orange"
              />
              <img
                src={mongo}
                alt="Mongo"
                className="w-[240px] h-[250px] border-2 border-orange rounded-[5px] transition-opacity duration-300 hover:opacity-100 hover:bg-orange"
              />
              <img
                src={next}
                alt="Next"
                className="w-[240px] h-[250px] border-2 border-orange rounded-[5px] transition-opacity duration-300 hover:opacity-100 hover:bg-orange"
              />
              <img
                src={node}
                alt="Node"
                className="w-[240px] h-[250px] border-2 border-orange rounded-[5px] transition-opacity duration-300 hover:opacity-100 hover:bg-orange"
              />
              <img
                src={tailwind}
                alt="Tailwind"
                className="w-[240px] h-[250px] border-2 border-orange rounded-[5px] transition-opacity duration-300 hover:opacity-100 hover:bg-orange"
              />
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-end pr-[185px]">
        <button
          onClick={toggleView}
          className="h-[50px] w-[200px] mt-3 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
        >
          {showSkills ? "Show Skills" : "Show Education"}
        </button>
      </div>
    </div>
  );
};

export default TechnicalSkills;
