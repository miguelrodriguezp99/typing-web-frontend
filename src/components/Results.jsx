import React from "react";
import { useWordsStore } from "../store/words";
import cn from "classnames";
import {
  Ad,
  Danger,
  History,
  Next,
  Replay,
  Restart,
  Screenshot,
} from "../assets/icons/ResultsIcon";
//import "../styles/Results.css";

const Results = () => {
  const { errors, actualState, restart, typed } = useWordsStore();

  const handleClick = () => {
    restart();
  };

  return (
    <>
      <section
        className={cn({
          "max-w-[1152px] align-center justify-center mx-auto mt-10": true,
          "animate-fade animate-once animate-duration-[800ms] animate-normal animate-fill-both":
            actualState === "FINISHED",
          hidden: actualState !== "FINISHED",
        })}
      >
        <div className="flex">
          <div className="bg-primary flex flex-col p-1">
            <div className="">
              <div className="text-3xl text-iconstext">wpm</div>
              <div className="text-6xl text-secondary">129</div>
            </div>
            <div className="">
              <div className="text-3xl text-iconstext">acc</div>
              <div className="text-6xl text-secondary">100%</div>
            </div>
          </div>
          <div className="w-full bg-[#312f2f] ml-3">
            <div className=""></div>
          </div>
        </div>

        <div className="bg-primary flex justify-between p-1 text-xl mt-3">
          <div className="">
            <div className="text-iconstext">test type</div>
            <div className="text-secondary">words 10 english</div>
          </div>
          <div>
            <div className="text-iconstext">other</div>
            <div className="text-secondary">repeated</div>
          </div>
          <div>
            <div className="text-iconstext">raw</div>
            <div className="text-secondary text-3xl">129</div>
          </div>
          <div>
            <div className="text-iconstext">characters</div>
            <div className="text-secondary text-3xl">
              {typed.length - errors}/{errors}/0/0
            </div>
          </div>
          <div>
            <div className="text-iconstext">consistency</div>
            <div className="text-secondary text-3xl">84%</div>
          </div>
          <div>
            <div className="text-iconstext">time</div>
            <div className="text-secondary text-3xl">5s</div>
          </div>
        </div>

        <div className="bg-primary flex mt-6">
          <div className="flex mx-auto gap-20 p-1">
            <button>
              <Next props="w-[24px] h-[24px] fill-iconstext" />
            </button>
            <button onClick={handleClick}>
              <Restart props="w-[20px] h-[20px] fill-iconstext stroke-iconstext stroke-10 hover:stroke-iconstext-hover hover:fill-iconstext-hover" />
            </button>
            <button>
              <Danger props="w-[24px] h-[24px] fill-iconstext bg-primary " />
            </button>
            <button>
              <History props="w-[24px] h-[24px] fill-iconstext" />
            </button>
            <button>
              <Replay props="w-[20px] h-[20px] fill-iconstext" />
            </button>
            <button>
              <Screenshot props="w-[20px] h-[20px] fill-iconstext" />
            </button>
          </div>
        </div>
        <div className="mx-auto text-center bg-primary text-iconstext mt-5">
          Login in to save your information
        </div>
        <div className="flex items-center mx-auto bg-tertiary w-[700px] h-[90px] align-center justify-center mt-5">
          <Ad props="w-[56px] h-[56px] fill-iconstext" />
        </div>
      </section>
    </>
  );
};

export default Results;
