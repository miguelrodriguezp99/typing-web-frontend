import { useWordsStore } from "../store/words";
import Caret from "./Caret";
import cn from "classnames";

const UserWords = () => {
  const { typed, words: expected } = useWordsStore();

  const typedCharacters = typed.split("");

  return (
    <>
      <div className="absolute inset-0 text-primary max-h-[160px] overflow-hidden">
        {typedCharacters.map((char, index) => (
          <Character
            key={`${char}_${index}`}
            typed={char}
            expected={expected[index] ? expected[index] : " "}
          />
        ))}
        <Caret />
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
