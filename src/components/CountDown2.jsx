import { Progress } from "@material-tailwind/react";
import React, { useState, useEffect } from "react";
import { useScore } from "../hooks/useScore";
import useCountdown from "../hooks/useCountdown";

const Countdown2 = ({ onComplete }) => {
  const { score, setScore } = useScore();

  const { seconds, isRunning, startCountdown, pauseCountdown, resetCountdown } =
    useCountdown(60);

  useEffect(() => {
    // Start the countdown when the component mounts
    startCountdown();

    // Optionally, you can return a cleanup function to stop the countdown when the component unmounts
    return () => {
      pauseCountdown();
      resetCountdown();
    };
  }, []);

  return (
    <div className="flex flex-col w-11/12   items-center justify-between mt-4 ">
      <div className=" flex justify-between w-full">
        <div className=" flex justify-center items-center text-[#7958AF] bg-white px-10 h-full text-[2rem] p-3">
          {/* <img src={remainingTime} className=" h-[7rem]" /> */}
          {/* <RemainingTime onFinished={onNext} />
           */}
          <div className=" flex flex-col ">
            <p className=" font-bold">Countdown: {seconds} s</p>
          </div>
        </div>

        <h1 className="p-3 text-[2rem] text-[#7958AF] right-5 font-bold  bg-white  px-10  ">
          Score : {score}
        </h1>
      </div>
      <br />
      <Progress
        className=" w-full h-4 my-2 "
        value={(seconds / 60) * 100}
        coloxr="indigo"
      />
    </div>
  );
};

export default Countdown2;
