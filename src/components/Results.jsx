import React from "react";
import { useWordsStore } from "../store/words";
import cn from "classnames";
import { Restart } from "../assets/icons/ResultsIcon";

const Results = () => {
  const { errors, corrects, inputs, actualState, restart } = useWordsStore();

  const handleClick = () => {
    restart();
  };

  return (
    <>
      <div
        className={cn({
          "text-3xl max-w-6xl leading-relaxed text-center bg-[#2c2e31] p-3 g-3 rounded-md mx-auto mt-32": true,
          "animate-fade-up animate-once animate-duration-800 animate-ease-out animate-normal animate-fill-both":
            actualState === "FINISHED",
          hidden: actualState !== "FINISHED",
        })}
      >
        <div className="flex justify-between mx-10">
          <div className="text-secondary">Errors: {errors}</div>
          <div className="text-secondary">Hits: {corrects}</div>
          <div className="text-secondary">Inputs: {inputs}</div>
        </div>
        <div>
          <button onClick={handleClick} className="px-4 py-0.5 rounded-md">
            <Restart props="w-6 h-6 fill-iconstext stroke-iconstext stroke-2 hover:stroke-iconstext-hover hover:fill-iconstext-hover" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Results;
