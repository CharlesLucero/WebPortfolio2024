import computer from "./assets/computer.jpg";
import main from "./assets/main.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faFacebook,
  faViber,
} from "@fortawesome/free-brands-svg-icons"; // Import from brands
import AboutMe from "./components/aboutme";
// import TechnicalSkills from "./components/technicalskills";
import Hello from "./components/hello";

import GrowButton from "./components/button";
import TodoList from "./components/todo";
import CardList from "./components/cardList";
import Calculator from "./components/calculator";
import CounterApp from "./components/counter";
import TechnicalSkills from "./components/technicalskills";

function App() {
  return (
    <div>
      <div className="relative h-screen">
        <div
          className="absolute inset-0 h-full w-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${computer})`,
          }}
        ></div>

        <div className="absolute inset-0 h-full w-full bg-orange opacity-95"></div>

        <div className="relative flex items-center justify-center h-full flex-col px-4 sm:px-12 md:px-24 lg:px-48 xl:px-96 ">
          <div
            className="rounded-full mb-5"
            style={{
              backgroundImage: `url(${main})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "200px", // Default for smaller screens
              height: "200px",
            }}
          ></div>

          <span className=" animate-jiggle relative inline-block text-3xl sm:text-5xl mb-5 md:text-5xl lg:text-5xl xl:text-6xl font-kaushan text-white before:content-['-'] after:content-['-'] before:px-2 after:px-2 transform -rotate-6 font-bold">
            Charles Joshua Lucero
          </span>

          <span className="mt-4 mb-4 text-white font-semibold  font-spacemono text-sm sm:text-lg md:text-lg">
            Web Developer / Mobile Developer
          </span>

          <ul className="flex space-x-4 mt-4">
            <li className="flex items-center">
              <a
                href="https://www.linkedin.com/in/charles-joshua-lucero-3095bb2a6/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="w-8 h-8 text-white animate-bounce"
                  style={{ animationDelay: "0.1s" }} // Custom delay
                />
              </a>
            </li>
            <li className="flex items-center ">
              <a
                href="https://www.instagram.com/charls_lucero?igsh=MTcxdDFueHp3MGU1NQ=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="w-8 h-8 text-white animate-bounce"
                  style={{ animationDelay: "0.2s" }} // Custom delay
                />
              </a>
            </li>
            <li className="flex items-center">
              <a
                href="https://www.facebook.com/charlesjoshua.lucero.9/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="w-8 h-8 text-white animate-bounce"
                  style={{ animationDelay: "0.3s" }} // Custom delay
                />
              </a>
            </li>
            <li className="flex items-center">
              <a
                href="viber://add?number=639287188176"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faViber}
                  className="w-8 h-8 text-white animate-bounce"
                  style={{ animationDelay: "0.4s" }} // Custom delay
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <AboutMe />
      </div>
      <div>
        <TechnicalSkills />
      </div>
    </div>
  );
}

export default App;
