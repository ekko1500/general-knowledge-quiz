import React, { useState } from "react";
import PurpleImage from "../assets/images/button-purple.png";
import PurpleImage2 from "../assets/images/button-purple2.png";

const Button3 = ({ title, onFunction, name }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onClick={() => onFunction()}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ position: "relative" }}
      className="flex   cursor-pointer w-[100%]   h-[100%] text-white   justify-center  items-center "
    >
      <img
        className={`absolute ${isHovered ? "hovered" : ""}`}
        src={isHovered ? PurpleImage2 : PurpleImage}
        alt="Hover Image"
      />
      <div className=" px-10 z-10 flex w-full justify-between">
        <h1 className=" font-bold z-10 text-white text-[2rem]">{name}</h1>
        <div className=" flex w-full items-center justify-center">
          <h1 className=" font-bold z-10 text-white text-[1.5rem]">{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default Button3;
