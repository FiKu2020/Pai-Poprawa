import { useState, useContext, useEffect } from "react";
const Timer = (props) => {
  const [isClockRunning, setIsClockRunning] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const resetTimer = () => {
    setCurrentTime(0);
    isClockRunning(false);
  };
  useEffect(() => {
    const getMinutes = (currentTime) => {
      minutes = Math.floor(currentTime / 60);
    };
  });
  return;
};
export default Timer;
