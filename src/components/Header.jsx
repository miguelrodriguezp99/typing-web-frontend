import React from "react";
import { useWordsStore } from "../store/words";

const Header = ({ setTyped }) => {
  const { setNumberOfWords, actualState } = useWordsStore();

  const handleWordsChange = (count) => {
    setNumberOfWords(count);
    setTyped("");
  };

  return (
    <div className="w-[70%] flex flex-col align-center justify-center mx-auto pt-5">
      <h1 className="text-4xl font bold lef-0 text-tertiary">
        Typemonkey - {actualState}
      </h1>

      <div className="flex mt-8 right w-[70%] mx-auto rounded-md bg-[#2c2e31] p-2">
        <div className="flex gap-3">
          <button onClick={(e) => handleWordsChange(15)}>15</button>
          <button onClick={(e) => handleWordsChange(30)}>30</button>
          <button onClick={(e) => handleWordsChange(60)}>60</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
