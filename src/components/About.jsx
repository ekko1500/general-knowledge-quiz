import React from "react";
import aboutBg from "../assets/images/about.png";
import Button3 from "./Button3";

function About({ setModal }) {
  return (
    <div
      className="absolute flex h-screen items-center justify-center z-30 w-full "
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.43)",
      }}
    >
      <div className=" w-[50%]  h-[22rem]">
        <div className=" w-full flex items-center justify-center relative">
          <img src={aboutBg} className=" w-full " />
          <div className=" w-full h-full p-[6rem] absolute items-center justify-center">
            <h1 className=" text-[2rem] font-bold text-[#7958AF]">
              This is about text.{" "}
            </h1>
          </div>
        </div>

        <div className=" w-full flex justify-end items-end">
          <div className="w-[15rem]">
            <Button3 title="Okay" onFunction={() => setModal(false)} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
