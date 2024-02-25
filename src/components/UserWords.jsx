import { useEffect } from "react";
import { useWordsStore } from "../store/words";
import Caret from "./Caret";
import cn from "classnames";

const UserWords = ({ typed, expected }) => {
  const typedCharacters = typed.split("");

  return (
    <>
      <div className="absolute inset-0 text-primary ">
        {typedCharacters.map((char, index) => (
          <Character
            key={`${char}_${index}`}
            typed={char}
            expected={expected[index]}
          />
        ))}
        <Caret />
      </div>
    </>
  );
};

const Character = ({ typed, expected }) => {
  const { incrementTypedValues } = useWordsStore();
  const isCorrect = typed === expected;
  const isWhiteSpace = expected === " ";

  // Increment corrects and errors
  useEffect(() => {
    incrementTypedValues(typed, expected);
  }, [typed, expected, incrementTypedValues]);

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
