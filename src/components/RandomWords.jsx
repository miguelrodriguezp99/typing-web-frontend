import { useWordsStore } from "../store/words";
import useTranslate from "../hooks/useTranslate";
import { useRef } from "react";

const RandomWords = () => {
  const { words } = useWordsStore();
  const ref = useRef(null);
  const { translateY } = useTranslate(ref);

  return (
    <>
      <div className=" overflow-y-hidden max-h-[150px]">
        <div
          className="text-[#4a4c50]"
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
