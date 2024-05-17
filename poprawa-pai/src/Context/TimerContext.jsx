import { useState, createContext, useContext } from "react";
const timerContext = createContext();
export const timerProvider = useContext(timerContext);
