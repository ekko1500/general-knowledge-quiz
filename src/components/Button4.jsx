import React, { useState } from "react";
import PurpleImage from "../assets/images/btn-white-purple.png";
import PurpleImage2 from "../assets/images/btn-white-purple-hover.png";

const Button4 = ({ title, onFunction }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onClick={() => onFunction()}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ position: "relative" }}
      className="flex cursor-pointer w-[100%]   h-[100%]    justify-center items-center "
    >
      <img
        className={`absolute ${isHovered ? "hovered" : ""}`}
        src={isHovered ? PurpleImage2 : PurpleImage}
        alt="Hover Image"
      />
      <h1 className=" font-bold z-10  text-[#7958AF] text-[1.2rem] lg:text-[2rem]">
        {title}
      </h1>
    </div>
  );
};

export default Button4;
