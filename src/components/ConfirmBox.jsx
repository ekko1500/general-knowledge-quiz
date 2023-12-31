import React from "react";
import clock from "../assets/images/clock.png";
import ButtonImage from "./ButtonImage";
import Button3 from "./Button3";
import aboutBg from "../assets/images/about.png";

function ConfirmBox({ onStart, onBack }) {
  return (
    <div className=" flex w-screen h-screen items-center justify-center">
      <div className="w-[95%] lg:w-[50%] flex flex-col items-center  h-[22rem]">
        <div className=" w-full flex items-center justify-center relative">
          <img src={aboutBg} className=" w-full " />
          <div className=" w-full h-full p-[3rem] lg:p-[7rem] absolute items-center justify-center">
            <h1 className=" text-[0.8rem] lg:text-[2rem] font-bold text-[#7958AF] text-center">
              မေခွန်း ၁ ခု ကို စက္ကန့် ၂၀ အတွင်း ဖြေဆို ရပါမည်။ အချိန်ကုန်လျှင်
              မေးခွန်း ကျော်ပြီး နောက်တစ်ပုဒ် ပေါ်လာမည် ဖြစ်သည်။
            </h1>
          </div>
        </div>
        <br />
        <br />
        <div className=" w-11/12 lg:w-full flex justify-between items-center">
          <div className="w-[10rem] lg:w-[15rem]">
            <Button3 title="Back" onFunction={() => onBack()} />
          </div>
          <div className=" w-[10rem] lg:w-[15rem]">
            <Button3 title="Start" onFunction={() => onStart()} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmBox;
