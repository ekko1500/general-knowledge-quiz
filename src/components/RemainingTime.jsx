import { useEffect, useState } from "react";
import komiMoti from "../assets/images/komi-moti.png";
import { useNavigate } from "react-router-dom";
import Countdown from "react-countdown";
import { Score } from "@mui/icons-material";

function RemainingTime({ onFinished }) {
  const navigate = useNavigate();

  // Random component
  const Completionist = () => <span>You are good to go!</span>;

  // Renderer callback with condition
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      onFinished();
    } else {
      // Render a countdown
      return (
        <h1 className="font-bold">
          ကျန်ရှိချိန် - {hours}:{minutes}:{seconds}
        </h1>
      );
    }
  };
  return (
    <>
      <div>
        {/* <Countdown date={Date.now() + 6000} renderer={renderer} /> */}
      </div>
    </>
  );
}

export default RemainingTime;
