import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaCheese } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

export const Footer = () => {
  let footerStyle = {
    positon: "relative",
    margin: "23vh 0px 0px 0px",
  };
  let font = {
    color: "#53b3cb",
  };
  return (
    <footer
      className="bg-dark sticky-bottom text-light py-3 "
      style={footerStyle}
    >
      <div>
        {/* <p className="text-center">
            Copyright &copy; Ankur
            </p> */}
      </div>

      <div className="text-center">
        <p>
          Made with <FaCheese /> and <FaHeart />
        </p>
      </div>
      <div className="text-center">
        <p>
          For code, visit github repo{" "}
          <a href="https://github.com/ankur12-1610/Todo-react/">
            <FaGithub color="#53b3cb" />
          </a>
        </p>
      </div>
      <div className="text-center">
        <p>
          Copyright &copy;{" "}
          <a href="https://itsankur.tech/" style={font}>
            Ankur
          </a>
        </p>
      </div>
    </footer>
  );
};
