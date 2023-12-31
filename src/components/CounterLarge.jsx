import React, { useEffect, useState } from "react";
import komiMoti from "../assets/images/komi-moti.png";
import { useNavigate } from "react-router-dom";

function CounterLarge({ setComplete3s }) {
  const navigate = useNavigate();
  const [count, setCount] = useState(3);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      console.log(count);
      if (count == 1) {
        clearInterval(countdownInterval);
        setComplete3s(true);
      }
      if (count > 0) {
        setCount(count - 1);
      }
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [count]);
  return (
    <div className=" h-screen flex items-center justify-center text-[#7958AF] font-bold">
      {count < 2 ? (
        <>
          <h1 className=" text-[11rem] lg:text-[22rem]">GO!!</h1>
        </>
      ) : (
        <>
          <h1 className=" text-[22rem]">{count - 1}</h1>
        </>
      )}
      {/* <img src={komiMoti} className=" absolute bottom-0 left-5 h-[11rem]" /> */}
    </div>
  );
}

export default CounterLarge;
