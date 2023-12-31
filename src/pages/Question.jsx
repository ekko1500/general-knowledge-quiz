import BackArrow from "../assets/images/back-arrow.png";
import buttonBg1 from "../assets/images/buttonbg.png";
import buttonBg from "../assets/images/optionbg.png";
import optionGreen from "../assets/images/option-green.png";
import optionRed from "../assets/images/option-red.png";
import optionHover from "../assets/images/option-hover.png";
import rightArrow from "../assets/images/right-arrow.png";
import remainingTime from "../assets/images/remaining.gif";
import btnBg from "../assets/images/btn-white-purple.png";

import komiRight from "../assets/images/komi-right.png";
import komiWrong from "../assets/images/komi-wrong.png";
import komiThink from "../assets/images/komi-think.png";
import timeupImg from "../assets/images/timeup.png";
import timeupImg2 from "../assets/images/timeup2.png";
import questionBoard from "../assets/images/question-board.png";
import { useEffect, useState } from "react";
import ButtonImage from "../components/ButtonImage";
import { useNavigate, useParams } from "react-router-dom";
import generalData from "../../utils/general.json";
import computerData from "../../utils/computer.json";
import iqtestData from "../../utils/iqtest.json";
import { useScore } from "../hooks/useScore";
import RemainingTime from "../components/RemainingTime";
import RemainingTime2 from "../components/RemainingTime2";
import { Progress } from "@material-tailwind/react";
import Countdown2 from "../components/CountDown2";
import Button3 from "../components/Button3";
import Button4 from "../components/Button4";
import { stringify } from "postcss";
import useCountdown from "../hooks/useCountdown";
import BtnOption from "../components/BtnOption";
import Image from "react-bootstrap/Image";

let noOfQuestion = 20;
function generateUniqueRandomArray(category) {
  const uniqueRandomArray = [];
  let j = 50;
  if (category == "general") {
    j = 116;
  } else if (category == "computer") {
    j = 91;
  } else {
    j = 42;
  }

  while (uniqueRandomArray.length < noOfQuestion) {
    const randomNumber = Math.floor(Math.random() * j);

    if (!uniqueRandomArray.includes(randomNumber)) {
      uniqueRandomArray.push(randomNumber);
    }
  }

  return uniqueRandomArray;
}

function Question() {
  const { score, setScore } = useScore();
  const { category } = useParams();

  const navigate = useNavigate();

  const [correct, setCorrect] = useState(false);

  const [currentId, setCurrentId] = useState(0);
  const [idArray, setIdArray] = useState(generateUniqueRandomArray(category));
  // console.log(idArray);
  const [data, setData] = useState();
  const [timeup, setTimeup] = useState(false);

  const [selectedAns, setselectedAns] = useState([]);
  const [rightAns, setRightAns] = useState([]);

  const [initialSeconds, setInitialSeconds] = useState(20);

  const [jsonData, setJsonData] = useState(
    category == "general"
      ? generalData
      : category == "computer"
      ? computerData
      : iqtestData
  );
  // const [seconds, setSeconds] = useState(5);
  // const [score, setScore] = useState(0);

  const handleCountdownComplete = () => {
    console.log("Countdown complete!");
    onNext("...");
  };

  // const { seconds, isRunning, startCountdown, pauseCountdown, resetCountdown } =
  //   useCountdown(60, handleCountdownComplete);

  // useEffect(() => {
  //   // Start the countdown when the component mounts
  //   startCountdown();

  //   // Optionally, you can return a cleanup function to stop the countdown when the component unmounts
  //   return () => {
  //     pauseCountdown();
  //     resetCountdown();
  //   };
  // }, []);

  const onBack = () => {
    const res = confirm("You will loose the progress. Are you sure ?");
    if (res) {
      window.location.href = "/";
    }
  };

  const onNext = (_selectedAns) => {
    // push both array
    console.log(_selectedAns);

    if (_selectedAns == jsonData[idArray[currentId]].rightAns) {
      setScore(score + 1);
    }

    if (_selectedAns !== "...") {
      setselectedAns(() => [...selectedAns, _selectedAns]);
    } else {
      setTimeup(true);
      setselectedAns(() => [...selectedAns, "..."]);
    }

    setRightAns((prev) => [...prev, jsonData[idArray[currentId]].rightAns]);

    if (currentId === noOfQuestion - 1) {
      // alert("Congratulation! You have completed the test");
      localStorage.setItem(
        "rightAns",
        JSON.stringify([...rightAns, jsonData[idArray[currentId]].rightAns])
      );
      localStorage.setItem(
        "selectedAns",
        JSON.stringify([...selectedAns, _selectedAns])
      );
      navigate("/score");
    }

    if (_selectedAns === "...") {
      // Use a setTimeout inside the onNext function
      setTimeout(() => {
        setCurrentId((prevId) => prevId + 1);
        console.log("time up and add id");
        setTimeup(false);
      }, 1000);
    } else {
      setCurrentId((prevId) => prevId + 1);
      console.log("select option and add i");
      setTimeup(false);
    }

    resetCountdown();
  };

  useEffect(() => {
    console.log("currentid change.");
  }, []);

  /* ----------------------------- handle back key ---------------------------- */
  useEffect(() => {
    window.history.pushState(null, null, document.URL);
    window.addEventListener("popstate", function (event) {
      window.location.href = "/";
    });
  }, []);

  useEffect(() => {
    console.log(rightAns);
    console.log(selectedAns);
  }, [rightAns, selectedAns]);

  const { seconds, isRunning, startCountdown, pauseCountdown, resetCountdown } =
    useCountdown(initialSeconds, handleCountdownComplete);

  useEffect(() => {
    // Start the countdown when the component mounts
    startCountdown();

    // Optionally, you can return a cleanup function to stop the countdown when the component unmounts
    return () => {
      pauseCountdown();
      resetCountdown();
    };
  }, [currentId]);

  if (timeup) {
    return (
      <div className=" h-screen flex flex-col items-center  justify-center ">
        <div className=" flex flex-col items-center justify-end h-[30rem] lg:h-[43rem] w-[90%] lg:w-1/2 bg-white">
          <div className=" h-[95%] lg:h-[50%] flex items-end">
            {/* <h1 className=" text-[6rem] font-bold text-[#7958AF]">
              Time Up !!!
            </h1> */}

            <img src={timeupImg2} className="h-[60%] w-auto" />
          </div>
          <img src={timeupImg} className="h-[70%] w-auto" />
        </div>
      </div>
    );
  }

  return (
    <div className=" h-screen flex flex-col items-center  ">
      {/* score and time top */}
      <div className="flex flex-col w-11/12   items-center justify-start mt-4 ">
        <div className=" flex justify-between w-full text-[0.7rem] lg:text-[2rem] h-[1.5rem] lg:h-[5rem]">
          <div className=" flex w-[10rem] lg:w-[22rem]  justify-center items-center text-[#7958AF] bg-white px-3 lg:px-10 h-full p-3 lg:p-3">
            {/* <img src={remainingTime} className=" h-[7rem]" /> */}
            {/* <RemainingTime onFinished={onNext} />
             */}
            <div className=" flex flex-col w-full items-center">
              <p className=" font-bold">Countdown: {seconds} s</p>
            </div>
          </div>
          <div className=" flex w-[10rem] lg:w-[22rem]  justify-center items-center text-[#7958AF] bg-white px-3 lg:px-10 h-full p-0 lg:p-3">
            <div className=" flex flex-col w-full items-center">
              <p className="font-bold ">Score : {score}</p>
            </div>
          </div>
        </div>
        <br />
        <Progress
          className=" w-full h-2 lg:h-4 my-0 lg:my-2 "
          value={(seconds / initialSeconds) * 100}
          coloxr="indigo"
        />
      </div>
      <div className=" flex w-full  flex-col items-center justify-center">
        {/* showing question and answer */}
        {/* For dispalying question */}
        <div className="flex relative h-[7rem] md:h-[14.5rem]  lg:h-[23rem] items-start justify-center   text-center w-[19rem] md:w-[44rem] lg:w-5/6 mt-[1rem] my-[2rem]  text-[#7958AF] z-[-3]   ">
          <Image
            fluid
            className=" absolute h-full w-full object-contain z-[-1]"
            src={questionBoard}
          />
          <h1 className=" absolute flex items-center justify-center text-[1rem] lg:text-[2rem]  text-white my-0 lg:my-3 w-[5rem] h-[1.7rem] lg:h-[4rem] font-bold">
            {currentId + 1}
          </h1>
          <div className="flex flex-col h-full items-center justify-center md:w-[55rem] lg:w-[55rem] ">
            <h1 className=" text-[0.8rem] lg:text-[2rem]     font-bold">
              Q : {jsonData[idArray[currentId]].question}
            </h1>
          </div>
        </div>

        <div className="flex w-[100%] text-center  items-center justify-center  mb-5">
          {/* <h1 className=" text-[4rem] w-full text-start py-3">Ans : </h1> */}

          <div className="  grid grid-cols-2 gap-[1rem] lg:gap-[5rem] p-2 w-[75%] lg:w-[40%]  items-center justify-center  ">
            <>
              {jsonData[idArray[currentId]]?.options?.map((i, index) => (
                <div
                  key={index}
                  className=" flex items-center justify-center lg:w-full h-[3rem] md:h-[5rem] lg:h-[6rem]  m-0 md:m-2 lg:m-0"
                >
                  <BtnOption
                    onFunction={() => onNext(i)}
                    title={i}
                    name={
                      index == 0
                        ? "A."
                        : index == 1
                        ? "B."
                        : index == 2
                        ? "C."
                        : "D."
                    }
                  />
                </div>
              ))}
            </>
          </div>
        </div>
      </div>
      <br />
      <div className="  fixed w-[8rem] md:w-[12rem] lg:w-[20rem] left-2 lg:left-10 bottom-6 lg:bottom-10 ">
        {/* komi image */}
        {/* {checked ? (
          correct ? (
            <img src={komiRight} className=" mr-9 h-[15rem] " />
          ) : (
            <img src={komiWrong} className=" h-[15rem] " />
          )
        ) : (
          <img src={komiThink} className=" left-[2rem] h-[15rem] " />
        )} */}

        <Button4 onFunction={onBack} title={"Leave"} />
      </div>
    </div>
  );
}

export default Question;
