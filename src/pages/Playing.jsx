import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import modalBg from "../assets/images/modal.png";
import ButtonImage from "../components/ButtonImage";
import { Progress } from "@material-tailwind/react";
import CounterLarge from "../components/CounterLarge";
import ConfirmBox from "../components/ConfirmBox";
import Question from "../pages/Question";
import { useNavigate, useParams } from "react-router-dom";

function Playing() {
  const [progress, setProgress] = useState(0);
  const [showIntro, setShowIntro] = useState(true);
  const [showIntroCountDown, setShowIntroCountDown] = useState(false);
  const [countDownTime, setCountDownTime] = useState(0);
  const [start, setStart] = useState(false);
  const [back, setBack] = useState(false);
  const [complete3s, setComplete3s] = useState(false);
  const { category } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    let allowCategory = ["general", "computer", "iqtest"];
    if (!allowCategory.includes(category)) {
      // navigate("/");
      window.location.href = "/";
      console.log("noxxxxxxxxxx");
    }
  }, [category, navigate]);

  const onStart = () => {
    console.log("start");
    setStart(true);
    setShowIntro(false);
    startingCountDown();
  };
  const onBack = () => {
    window.location.href = "/";
  };

  const startingCountDown = () => {
    let time = 3;
    for (let i = 0; i < time; i++) {
      setTimeout(() => {
        setCountDownTime((prev) => prev + 1);
      }, 1000 * i + 500);
    }
  };

  useEffect(() => {
    if (complete3s) {
      setShowIntro(false);
      setStart(false);
    }
  }, [complete3s]);

  if (showIntro) {
    return (
      <>
        <ConfirmBox onStart={onStart} onBack={onBack} />
      </>
    );
  }

  if (start) {
    return (
      <>
        <CounterLarge setComplete3s={setComplete3s} />
      </>
    );
  }

  if (complete3s) {
    return (
      <>
        <Question />
      </>
    );
  }

  return <div></div>;
}

export default Playing;
