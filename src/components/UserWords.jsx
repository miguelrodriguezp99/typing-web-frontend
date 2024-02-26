import { useEffect, useState } from "react";
import { useWordsStore } from "../store/words";
import Caret from "./Caret";
import cn from "classnames";
import useTranslate from "../hooks/useTranslate";

const UserWords = () => {
  const { typed, words } = useWordsStore();
  const typedCharacters = typed.split("");
  const { translateY } = useTranslate();

  return (
    <>
      <div className="max-h-[160px] overflow-y-hidden">
        <div
          className="absolute inset-0 text-primary "
          style={{
            transform: `translateY(${translateY}px)`,
            transition: "transform 0.3s linear",
          }}
        >
          {typedCharacters.map((char, index) => (
            <Character
              key={`${char}_${index}`}
              typed={char}
              expected={words[index] ? words[index] : " "}
            />
          ))}
          <Caret />
        </div>
      </div>
    </>
  );
};

const Character = ({ typed, expected }) => {
  const isCorrect = typed === expected;
  const isWhiteSpace = expected === " ";

  return (
    <span
      className={cn({
        "text-red-500": !isCorrect && !isWhiteSpace,
        "text-text": isCorrect && !isWhiteSpace,
        "bg-red-500/50": !isCorrect && isWhiteSpace,
      })}
    >
      {expected}
    </span>
  );
};

export default UserWords;
