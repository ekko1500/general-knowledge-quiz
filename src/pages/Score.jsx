import React, { useContext, useEffect, useState } from "react";

import starOutline from "../assets/images/star-outline.png";
import starFill from "../assets/images/star-fill.png";
import scoreImg from "../assets/images/score.png";
import buttonBg from "../assets/images/buttonbg.png";
import grayBg from "../assets/images/gray-bg.png";
import scoreBg from "../assets/images/score-bg.png";
import score2 from "../assets/images/score2.png";
// import scorBg from "../assets/images/"
// import scorBg from "../assets/images/"
import komi0Star from "../assets/images/komi-lose.png";
import komi1Star from "../assets/images/komi-1star.png";
import komi2Star from "../assets/images/komi-happy.png";
import komi3Star from "../assets/images/komi-win.png";
import PurpleImage from "../assets/images/button-purple.png";
import PurpleImage2 from "../assets/images/button-purple2.png";
import stars0 from "../assets/images/0stars.png";
import stars1 from "../assets/images/1stars.png";
import stars2 from "../assets/images/2stars.png";
import stars3 from "../assets/images/3stars.png";
import bgWhite from "../assets/images/bg-white.png";
import congrats from "../assets/images/congrats.png";
import history from "../assets/images/history.png";

import Button3 from "../components/Button3";

import { useNavigate } from "react-router-dom";
import { useScore } from "../hooks/useScore";

const keys = ["Play Again", "Leave"];

function Score() {
  const { score } = useScore();

  const [rightAns, setrightAns] = useState(
    JSON.parse(localStorage.getItem("rightAns"))
  );
  const [selectedAns, setSelectedAns] = useState(
    JSON.parse(localStorage.getItem("selectedAns"))
  );

  useEffect(() => {
    if (rightAns.length == 0) {
      console.log(rightAns);
      window.location.href = "/";
    }
  }, [rightAns]);

  useEffect(() => {
    console.log(selectedAns);
    console.log(rightAns);
  }, [rightAns, selectedAns]);

  console.log(score);
  const navigate = useNavigate();
  // const [scoreDisplay, setScoreDisplay] = useState(0);

  const onLeave = () => {
    navigate("/");
  };

  const onPlayAgain = () => {
    navigate("/quizs/1");
  };

  useEffect(() => {}, []);

  useEffect(() => {
    window.history.pushState(null, null, document.URL);
    window.addEventListener("popstate", function (event) {
      // window.location.href = "/";
    });
  }, []);

  if (rightAns.length == 0) {
    return <></>;
  }

  return (
    <div className=" gap-4">
      <div className=" w-full  flex flex-col items-center justify-start">
        <br />
        {/* <h1 className=" text-[2rem] font-bold text-white bg-[#7958AF] px-6">
        Congratulation!
      </h1> */}
        <img src={congrats} className=" w-[40%]" />

        <div className=" flex w-[30%] h-[30%] items-end justify-center ">
          {score > 2 ? (
            <img src={stars1} className=" h-full " />
          ) : score > 4 ? (
            <img src={stars2} className=" h-full " />
          ) : score > 9 ? (
            <img src={stars3} className=" h-full " />
          ) : (
            <img src={stars0} className=" h-full " />
          )}
        </div>
        <h1 className=" text-[1.5rem] font-bold text-[#7958AF] mt-1">
          Your Score
        </h1>

        <div className=" absolute z-[-1]   top-[17rem]  flex items-center justify-center">
          {/* this is score bg */}
          <img src={scoreBg} className=" w-[67rem]" />
        </div>

        <div className=" relative flex flex-col items-center justify-start">
          <img src={score2} className="  w-[50%]" />
          <h1 className=" absolute text-[2.9rem] font-bold text-white">
            {score} out of 10
          </h1>
        </div>
        <h1 className=" flex flex-col items-center justify-center  text-[4rem]  h-[5rem]  text-[#7958AF] font-bold">
          {score}0%
        </h1>

        <br />
        {/* button bar */}
        <div className=" flex  h- w-5/12 lg:w-1/3 gap-3  items-center justify-between ">
          {keys.map((key, index) => (
            // <div
            //   key={index}
            //   onClick={() => (key == "Leave" ? onLeave() : onPlayAgain())}
            //   className="flex relative text-[4rem]  cursor-pointer  w-[66rem] h-auto text-white   justify-center items-center "
            //   style={
            //     {
            //       // backgroundImage: `url(${PurpleImage})`,
            //       // backgroundRepeat: "no-repeat",
            //       // backgroundSize: "contain",
            //       // transition: "background-image 0.1s ease-in-out",
            //       // borderRadius: "10px",
            //       // border: "3px solid black",
            //       // textShadow: "2px 2px 0px black",
            //     }
            //   }
            //   onMouseOver={(e) => {
            //     // e.currentTarget.style.backgroundImage = `url(${PurpleImage2})`;
            //     // e.currentTarget.style.border = "3px solid black";
            //     // e.currentTarget.style.textShadow = "0px 0px 0px black";
            //   }}
            //   onMouseOut={(e) => {
            //     // e.currentTarget.style.backgroundImage = `url(${PurpleImage})`;
            //     // e.currentTarget.style.border = "3px solid black";
            //     // e.currentTarget.style.textShadow = "2px 2px 0px black";
            //   }}
            // >
            //   <img className=" absolute" src={PurpleImage} />
            //   <h1 className=" z-[1] text-[3rem] font-bold">{key}</h1>
            // </div>
            <div key={index} className=" w-[16rem] py-1">
              <Button3
                title={key}
                onFunction={() => (key == "Leave" ? onLeave() : onPlayAgain())}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex flex-col  items-center justify-start pt-[10rem] w-full h-[90rem] ">
        <img src={history} className=" w-[30%]" />
        <br />
        <div className="relative  flex flex-col w-full items-center justify-start">
          <img src={bgWhite} className=" w-[40%]" />
          <div className=" absolute w-1/3 h-full items-center justify-center p-5 py-[6rem] gap-3">
            <table className=" w-full">
              <tbody>
                {selectedAns.map((i, index) => (
                  <tr key={index} className=" h-[3rem]">
                    <th>
                      <h1 className=" text-[#7958AF] font-bold text-[1.5rem]">
                        Question No.{index + 1}
                      </h1>
                    </th>

                    <th>
                      <h1 className=" text-[#7958AF] font-bold text-[1.5rem]">
                        {" "}
                        {selectedAns[index] == rightAns[index]
                          ? "Right"
                          : "Wrong"}
                      </h1>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Score;
