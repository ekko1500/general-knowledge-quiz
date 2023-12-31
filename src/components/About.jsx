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
            <h1 className=" text-[1.4rem] font-bold text-[#7958AF]">
              Welcome to our quiz game! Explore categories like General
              Knowledge, Critical Thinking, and Hardware. Enjoy a quick and
              engaging quiz experience. Gear up, the challenge awaits! Are you
              ready to become the ultimate quiz champion? Let the games begin!
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
