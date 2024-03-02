import React, { useEffect, useState } from "react";
import useTyping from "./../../hooks/useTyping";
import { useWordsStore } from "./../../store/words";
import Results from "./../../components/Results";
import useMouseOut from "./../../hooks/useMouseOut";
import TypeArea from "./../../components/TypeArea";
import Options from "./../../components/Header/Options";
import MobileOptions from "../../components/Header/MobileOptions";
import useMobileOptions from "../../hooks/useMobileOptions";

function App() {
  const { setWords } = useWordsStore();

  //Handle mouse out of the window
  useMouseOut();

  //Start typing action
  useTyping();

  useEffect(() => {
    setWords();
  }, [setWords]);

  const { isMobile } = useMobileOptions();

  return (
    <>
      <BlurWrapper>
        {isMobile ? <MobileOptions /> : <Options />}

        <Results />
        <TypeArea />
      </BlurWrapper>
    </>
  );
}

export const BlurWrapper = ({ children }) => {
  const { setFocusedTrue } = useWordsStore();

  const handleSetFocusedTrue = (e) => {
    e.stopPropagation();
    setFocusedTrue();
  };

  return (
    <section
      className="bg-primary tracking-wider font-mono md:px-10 
      sm:px-5 px-2 mx-auto lg:max-w-[1310px] h-[calc(100vh-236px)] sm:h-[calc(100vh-192px)]"
      onClick={(e) => handleSetFocusedTrue(e)}
    >
      {children}
    </section>
  );
};

export default App;
