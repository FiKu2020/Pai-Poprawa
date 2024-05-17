import { useState, createContext, useContext } from "react";
const keyboardContext = createContext();
export const keyboardProvider = useContext(keyboardContext)
