import React, { useRef } from "react";
import Timer from "./Timer";
import RandomWords from "./RandomWords";
import UserWords from "./UserWords";
import BlurEffect from "./BlurEffect";
import { useWordsStore } from "../store/words";
import "./../styles/blur.css";

const TypeArea = () => {
  const { actualState } = useWordsStore();
  const inputRef = useRef(null);
  const handleDivClick = () => {
    if (inputRef?.current !== null) inputRef.current?.focus(); // Enfoca el campo de entrada para abrir el teclado
  };
  return (
    <>
      <div
        className={`animate-fade animate-once 
          max-h-[515px]  
          mt-[50px] sm:mt-[75px] md:mt-[100px] lg:mt-[125px] 
          animate-duration-[800ms] animate-normal 
          animate-fill-both ${actualState === "FINISHED" ? "hidden" : ""}`}
        onClick={handleDivClick}
      >
        <input type="text" className="absolute hidden" ref={inputRef} />
        <Timer />
        <WordsContainer>
          <RandomWords />
          <UserWords />
          <BlurEffect />
        </WordsContainer>
      </div>
    </>
  );
};

const WordsContainer = ({ children }) => {
  return (
    <div className="relative text-2xl max-w-6xl leading-relaxed mx-auto break-keep max-h-[160px] overflow-y-hidden">
      {children}
    </div>
  );
};

export default TypeArea;
