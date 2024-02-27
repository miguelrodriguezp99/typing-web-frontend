import { useWordsStore } from "../store/words";
import useTranslate from "../hooks/useTranslate";
import { useRef } from "react";
import "./blur.css";

const RandomWords = () => {
  const { words, isFocused } = useWordsStore();
  const ref = useRef(null);
  const { translateY } = useTranslate(ref);

  return (
    <>
      <div className=" overflow-y-hidden max-h-[150px]">
        <div
          className={`text-[#4a4c50] transition-all delay-75 ${
            !isFocused ? "blured" : ""
          } `}
          ref={ref}
          style={{
            transform: `translateY(${translateY}px)`,
            transition: "transform 0.3s linear",
          }}
        >
          {words}
        </div>
      </div>
    </>
  );
};

export default RandomWords;
