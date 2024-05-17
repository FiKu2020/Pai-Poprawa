import react from "react";
import { createContext, useContext, useState } from "react";
const gameContext = createContext();
export const gameProvider = useContext(gameContext);
export const [isGameRunning, setIsGameRunning] = useState(false);
