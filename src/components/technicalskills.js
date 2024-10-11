// import React, { useState } from "react";
// import code from "../assets/code.png"; // Ensure the path is correct
// import toga from "../assets/toga.png"; // Ensure the path is correct
// import csharp from "../assets/csharp.png";
// import cplus from "../assets/c++.png";
// import css from "../assets/css.png";
// import express from "../assets/express.png";
// import flutter from "../assets/flutter.png";
// import html from "../assets/html.png";
// import javascript from "../assets/javascript.png";
// import mongo from "../assets/mongo.png";
// import next from "../assets/next.png";
// import node from "../assets/node.png";
// import react from "../assets/react.png";
// import tailwind from "../assets/tailwind.png";

// const TechnicalSkills = () => {
//   const [showSkills, setShowSkills] = useState(false);

//   // Function to toggle between skills and education
//   const toggleView = () => {
//     setShowSkills(!showSkills);
//   };

//   return (
//     <div className="relative min-h-screen px-[50px] pb-[20px] flex flex-col justify-between">
//       <div className="relative flex  justify-between p-3 2xl:p-[60px]">
//         <h1 className="font-kaushan text-3xl content-center text-darkblue font-black sm:text-5xl lg:text-7xl 2xl:text-7xl ">
//           <span
//             className={`${showSkills ? "text-orange-500" : "text-darkorange"}`}
//             style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }} // Apply shadow to Skills
//           >
//             Skills
//           </span>{" "}
//           <span className="text-slash">/</span>{" "}
//           <span
//             className={`${!showSkills ? "text-orange-500" : "text-darkorange"}`}
//             style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }} // Apply shadow to Education
//           >
//             Education
//           </span>
//         </h1>

//         <div className="relative flex justify-center items-center ">
//           <div className="relative h-[70px] w-[70px] sm:h-[90px] sm:w-[90px] lg:h-[130px] lg:w-[130px]">
//             <img
//               src={code}
//               alt="Code"
//               className={`absolute h-[55px] w-[55px] sm:h-[90px] sm:w-[90px] lg:h-[130px] lg:w-[130px] mt-1 transition-transform duration-500 ease-in-out ${
//                 !showSkills ? "transform scale-100" : "transform scale-0"
//               }`}
//               style={{ top: 0, left: 0 }}
//             />
//             <img
//               src={toga}
//               alt="Toga"
//               className={`absolute h-[70px] w-[70px] sm:h-[90px] sm:w-[90px] lg:h-[130px] lg:w-[130px] transition-transform duration-500 ease-in-out ${
//                 showSkills ? "transform scale-100" : "transform scale-0"
//               }`}
//               style={{ top: 0, left: 0 }}
//             />
//           </div>
//         </div>
//       </div>

//       <div>
//         {showSkills ? (
//           <div className="flex justify-between px-[250px]">
//             <div className="flex flex-col gap-[30px]">
//               <div className="border p-8 rounded-md flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 duration-300">
//                 <p className="font-kaushan text-orange text-5xl font-semibold mb-4">
//                   2020-2024 / College
//                 </p>
//                 <p className="font-spacemono font-semibold text-xl">
//                   University of Saint Louis - Tuguegarao
//                 </p>
//                 <p className="font-normal text-lg">
//                   Bachelor of Science in Information Technology
//                 </p>
//               </div>

//               <div className="border p-8 rounded-md flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 duration-300">
//                 <p className="font-kaushan text-orange text-5xl font-semibold mb-4">
//                   2018-2020 / Senior High
//                 </p>
//                 <p className="font-spacemono font-semibold text-xl">
//                   Magsaysay Memorial High School
//                 </p>
//                 <p className="font-normal text-lg">
//                   Humanities and Social Sciences
//                 </p>
//               </div>
//             </div>

//             <div className="flex flex-col  gap-[30px]">
//               <div className="border p-8 rounded-md flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 duration-300">
//                 <p className="font-kaushan text-orange text-5xl font-semibold mb-4">
//                   2014-2018 / Junior High
//                 </p>
//                 <p className="font-spacemono font-semibold text-xl">
//                   Magsaysay Memorial High School
//                 </p>
//                 <p className="font-normal text-lg">Junior High School</p>
//               </div>

//               <div className="border p-8 rounded-md flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 duration-300">
//                 <p className="font-kaushan text-orange text-5xl font-semibold mb-4">
//                   2008-2014 / Elementary
//                 </p>
//                 <p className="font-spacemono font-semibold text-xl">
//                   Seventh Day Adventist Elementary School
//                 </p>
//                 <p className="font-normal text-lg">Elementary</p>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <div className="flex flex-col  px-[80px] gap-[50px]">
//             <div className="flex justify-between px-[150px]  items-center lg:px-1 md:p-0">
//               <div className="shadow-2xl p-5 px-7 rounded-md hover:shadow-xl transition-transform transform hover:scale-105 duration-300">
//                 <img
//                   src={react}
//                   alt="React"
//                   className="w-[130px] h-[150px]  mx-2"
//                 />
//               </div>
//               <div className="shadow-2xl p-5 rounded-md px-7 hover:shadow-xl transition-transform transform hover:scale-105 duration-300">
//                 <img
//                   src={csharp}
//                   alt="Csharp"
//                   className="w-[130px] h-[150px] mx-2"
//                 />
//               </div>
//               <div className="shadow-2xl p-5 rounded-md px-7 hover:shadow-xl transition-transform transform hover:scale-105 duration-300">
//                 <img
//                   src={cplus}
//                   alt="Cplus"
//                   className="w-[130px] h-[150px] mx-2"
//                 />
//               </div>
//               <div className="shadow-2xl p-5 rounded-md hover:shadow-xl transition-transform transform hover:scale-105 duration-300">
//                 <img
//                   src={html}
//                   alt="Html"
//                   className="w-[150px] h-[170px] mx-2"
//                 />
//               </div>
//               <div className="shadow-2xl p-5 rounded-md hover:shadow-xl transition-transform transform hover:scale-105 duration-300">
//                 <img src={css} alt="Css" className="w-[150px] h-[170px] mx-2" />
//               </div>
//               <div className="shadow-2xl p-5 rounded-md hover:shadow-xl transition-transform transform hover:scale-105 duration-300">
//                 <img
//                   src={flutter}
//                   alt="Flutter"
//                   className="w-[130px] h-[150px] mx-2"
//                 />
//               </div>
//             </div>

//             <div className="flex justify-between px-[150px] items-center lg:px-1  md:p-0">
//               <div className="shadow-2xl p-5 rounded-md hover:shadow-xl transition-transform transform hover:scale-105 duration-300">
//                 <img
//                   src={express}
//                   alt="Express"
//                   className="w-[150px] h-[140px] mx-2 "
//                 />
//               </div>
//               <div className="shadow-2xl p-5 rounded-md hover:shadow-xl transition-transform transform hover:scale-105 duration-300">
//                 <img
//                   src={javascript}
//                   alt="Javascript"
//                   className="w-[150px] h-[140px] mx-2"
//                 />
//               </div>
//               <div className="shadow-2xl p-5 rounded-md hover:shadow-xl transition-transform transform hover:scale-105 duration-300">
//                 <img
//                   src={mongo}
//                   alt="Mongo"
//                   className="w-[150px] h-[140px]  mx-2"
//                 />
//               </div>
//               <div className="shadow-2xl p-5 rounded-md hover:shadow-xl transition-transform transform hover:scale-105 duration-300">
//                 <img
//                   src={next}
//                   alt="Next"
//                   className="w-[150px] h-[140px] mx-2"
//                 />
//               </div>
//               <div className="shadow-2xl p-5 rounded-md hover:shadow-xl transition-transform transform hover:scale-105 duration-300">
//                 <img
//                   src={node}
//                   alt="Node"
//                   className="w-[150px] h-[140px] mx-2"
//                 />
//               </div>
//               <div className="shadow-2xl p-5 rounded-md hover:shadow-xl transition-transform transform hover:scale-105 duration-300">
//                 <img
//                   src={tailwind}
//                   alt="Tailwind"
//                   className="w-[150px] h-[140px]  mx-2"
//                 />
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       <div className="flex justify-end pr-[80px]">
//         <button
//           onClick={toggleView}
//           className="h-[50px] w-[200px] mt-3 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
//         >
//           {showSkills ? "Show Skills" : "Show Education"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TechnicalSkills;
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
    <div className="relative min-h-screen px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 pb-8 flex flex-col justify-between">
      <div className="relative flex justify-between items-center p-3 lg:p-8">
        <h1 className="font-kaushan text-3xl text-darkblue font-black sm:text-4xl lg:text-5xl 2xl:text-6xl">
          <span
            className={`${showSkills ? "text-orange-500" : "text-darkorange"}`}
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }}
          >
            Skills
          </span>{" "}
          <span className="text-slash">/</span>{" "}
          <span
            className={`${!showSkills ? "text-orange-500" : "text-darkorange"}`}
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }}
          >
            Education
          </span>
        </h1>

        <div className="relative flex justify-center items-center">
          <div className="relative h-14 w-14 sm:h-16 sm:w-16 lg:h-20 lg:w-20">
            <img
              src={code}
              alt="Code"
              className={`absolute h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 transition-transform duration-500 ease-in-out ${
                !showSkills ? "transform scale-100" : "transform scale-0"
              }`}
              style={{ top: 0, left: 0 }}
            />
            <img
              src={toga}
              alt="Toga"
              className={`absolute h-14 w-14 sm:h-16 sm:w-16 lg:h-20 lg:w-20 transition-transform duration-500 ease-in-out ${
                showSkills ? "transform scale-100" : "transform scale-0"
              }`}
              style={{ top: 0, left: 0 }}
            />
          </div>
        </div>
      </div>

      <div>
        {showSkills ? (
          <div className="flex flex-col lg:flex-row lg:justify-between gap-8 px-4 sm:px-10 md:px-20">
            <div className="flex flex-col gap-8">
              <div className="border p-4 sm:p-6 rounded-md flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 duration-300">
                <p className="font-kaushan text-orange text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">
                  2020-2024 / College
                </p>
                <p className="font-spacemono font-semibold text-base sm:text-lg">
                  University of Saint Louis - Tuguegarao
                </p>
                <p className="font-normal text-sm sm:text-md lg:text-lg">
                  Bachelor of Science in Information Technology
                </p>
              </div>

              <div className="border p-4 sm:p-6 rounded-md flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 duration-300">
                <p className="font-kaushan text-orange text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">
                  2018-2020 / Senior High
                </p>
                <p className="font-spacemono font-semibold text-base sm:text-lg">
                  Magsaysay Memorial High School
                </p>
                <p className="font-normal text-sm sm:text-md lg:text-lg">
                  Humanities and Social Sciences
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div className="border p-4 sm:p-6 rounded-md flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 duration-300">
                <p className="font-kaushan text-orange text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">
                  2014-2018 / Junior High
                </p>
                <p className="font-spacemono font-semibold text-base sm:text-lg">
                  Magsaysay Memorial High School
                </p>
                <p className="font-normal text-sm sm:text-md lg:text-lg">
                  Junior High School
                </p>
              </div>

              <div className="border p-4 sm:p-6 rounded-md flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 duration-300">
                <p className="font-kaushan text-orange text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">
                  2008-2014 / Elementary
                </p>
                <p className="font-spacemono font-semibold text-base sm:text-lg">
                  Seventh Day Adventist Elementary School
                </p>
                <p className="font-normal text-sm sm:text-md lg:text-lg">
                  Elementary
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-[80px]">
            {/* First Row of Skills */}
            <div className="flex flex-wrap gap-6 justify-center px-4 sm:px-6 lg:px-8">
              {/* Skill Card for React */}
              <div className=" content-center shadow-2xl p-4 sm:p-5 rounded-md hover:shadow-xl transition-transform transform hover:scale-105 duration-300">
                <img
                  src={react}
                  alt="React"
                  className="w-16 sm:w-24 lg:w-32 mx-auto"
                />
              </div>
              {/* Skill Card for C# */}
              <div className=" content-center shadow-2xl p-4 sm:p-5 rounded-md hover:shadow-xl transition-transform transform hover:scale-105 duration-300">
                <img
                  src={csharp}
                  alt="Csharp"
                  className="w-16 sm:w-24 lg:w-32 mx-auto"
                />
              </div>
              {/* Skill Card for C++ */}
              <div className=" content-center shadow-2xl p-4 sm:p-5 rounded-md hover:shadow-xl transition-transform transform hover:scale-105 duration-300">
                <img
                  src={cplus}
                  alt="Cplus"
                  className="w-16 sm:w-24 lg:w-32 mx-auto"
                />
              </div>
              {/* Skill Card for HTML */}
              <div className=" content-center shadow-2xl p-4 sm:p-5 rounded-md hover:shadow-xl transition-transform transform hover:scale-105 duration-300">
                <img
                  src={html}
                  alt="Html"
                  className="w-16 sm:w-24 lg:w-32 mx-auto"
                />
              </div>
              {/* Skill Card for CSS */}
              <div className=" content-center shadow-2xl p-4 sm:p-5 rounded-md hover:shadow-xl transition-transform transform hover:scale-105 duration-300">
                <img
                  src={css}
                  alt="Css"
                  className="w-16 sm:w-24 lg:w-32 mx-auto"
                />
              </div>
              {/* Skill Card for Flutter */}
              <div className=" content-center shadow-2xl p-4 sm:p-5 rounded-md hover:shadow-xl transition-transform transform hover:scale-105 duration-300">
                <img
                  src={flutter}
                  alt="Flutter"
                  className="w-16 sm:w-24 lg:w-32 mx-auto"
                />
              </div>
            </div>

    
            <div className="flex flex-wrap gap-6 justify-center px-4 sm:px-6 lg:px-8">
              {/* Skill Card for Express */}
              <div className=" content-center shadow-2xl p-4 sm:p-5 rounded-md hover:shadow-xl transition-transform transform hover:scale-105 duration-300">
                <img
                  src={express}
                  alt="Express"
                  className="w-16 sm:w-24 lg:w-32 mx-auto"
                />
              </div>
              {/* Skill Card for JavaScript */}
              <div className=" content-center shadow-2xl p-4 sm:p-5 rounded-md hover:shadow-xl transition-transform transform hover:scale-105 duration-300">
                <img
                  src={javascript}
                  alt="JavaScript"
                  className="w-16 sm:w-24 lg:w-32 mx-auto"
                />
              </div>
              {/* Skill Card for MongoDB */}
              <div className=" content-center shadow-2xl p-4 sm:p-5 rounded-md hover:shadow-xl transition-transform transform hover:scale-105 duration-300">
                <img
                  src={mongo}
                  alt="MongoDB"
                  className="w-16 sm:w-24 lg:w-32 mx-auto"
                />
              </div>
              {/* Skill Card for Next.js */}
              <div className=" content-center shadow-2xl p-4 sm:p-5 rounded-md hover:shadow-xl transition-transform transform hover:scale-105 duration-300">
                <img
                  src={next}
                  alt="Next.js"
                  className="w-16 sm:w-24 lg:w-32 mx-auto"
                />
              </div>
              {/* Skill Card for Node.js */}
              <div className=" content-center shadow-2xl p-4 sm:p-5 rounded-md hover:shadow-xl transition-transform transform hover:scale-105 duration-300">
                <img
                  src={node}
                  alt="Node.js"
                  className="w-16 sm:w-24 lg:w-32 mx-auto"
                />
              </div>
              {/* Skill Card for Tailwind CSS */}
              <div className=" content-center shadow-2xl p-4 sm:p-5 rounded-md hover:shadow-xl transition-transform transform hover:scale-105 duration-300">
                <img
                  src={tailwind}
                  alt="Tailwind CSS"
                  className="w-16 sm:w-24 lg:w-32 mx-auto"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-center sm:justify-end pr-4 sm:pr-6 lg:pr-10">
        <button
          onClick={toggleView}
          className="h-10 sm:h-12 w-40 sm:w-48 mt-3 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-110"
        >
          {showSkills ? "Show Skills" : "Show Education"}
        </button>
      </div>
    </div>
  );
};

export default TechnicalSkills;
