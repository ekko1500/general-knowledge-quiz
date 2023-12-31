import { useState, useEffect, useRef } from "react";

const useCountdown = (initialSeconds, onCountdownComplete) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const startCountdown = () => {
    setIsRunning(true);
  };

  const pauseCountdown = () => {
    setIsRunning(false);
  };

  const resetCountdown = () => {
    setIsRunning(false);
    setSeconds(initialSeconds);
  };

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds === 1) {
            clearInterval(intervalRef.current);
            setIsRunning(false);
            onCountdownComplete && onCountdownComplete();
            return 0;
          }
          return prevSeconds - 1;
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning, onCountdownComplete]);

  return {
    seconds,
    isRunning,
    startCountdown,
    pauseCountdown,
    resetCountdown,
  };
};

export default useCountdown;
