import { useEffect, useState } from "react";
import { isGuessCorrect } from "../../Context/GameContext";
const Attempts = (props) => {
  const [attemptsLeft, setAttemptsLeft] = useState();
  const remainingAttempts = useEffect((attemptsLeft) => {
    if (isGuessCorrect == false) {
      setAttemptsLeft(attemptsLeft - 1);
    }
  }, []);
};

export default Attempts;
