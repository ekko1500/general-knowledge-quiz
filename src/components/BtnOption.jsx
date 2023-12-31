import React, { useState } from "react";
import PurpleImage from "../assets/images/btn-option.png";
import PurpleImage2 from "../assets/images/btn-option-hover.png";

function BtnOption({ title, onFunction, name }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onClick={() => onFunction()}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ position: "relative" }}
      className="flex   cursor-pointer w-[100%] text-[0.6rem] lg:text-[1.5rem]  h-[100%] text-white   justify-center  items-center "
    >
      <img
        className={`absolute ${isHovered ? "hovered" : ""}`}
        src={isHovered ? PurpleImage2 : PurpleImage}
        alt="Hover Image"
      />
      <div className="px-5 lg:px-10 z-10 flex w-full h-auto justify-between">
        <h1 className=" font-bold z-10 text-white ">{name}</h1>
        <div className=" flex w-full items-center justify-center">
          <h1 className=" font-bold z-10 text-white ">{title}</h1>
        </div>
      </div>
    </div>
  );
}

export default BtnOption;
