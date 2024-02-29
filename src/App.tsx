import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import useTyping from "./hooks/useTyping";
import { useWordsStore } from "./store/words";
import Results from "./components/Results";
import Footer from "./components/Footer";
import { Toaster } from 'sonner';
import useMouseOut from "./hooks/useMouseOut";
import TypeArea from "./components/TypeArea";
import Options from "./components/Header/Options";


function App() {

  const { setFocusedTrue, setWords } = useWordsStore();

  const handleSetFocusedTrue = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setFocusedTrue();
  };


  //Handle mouse out of the window
  useMouseOut();

  //Start typing action
  useTyping();

  useEffect(() => {
    setWords();
  }, [setWords]);

  return (
    <>
      <section
        className="bg-primary
         tracking-wider font-mono
         md:px-10 sm:px-5 px-2 mx-auto 
         lg:max-w-[1310px] heigthcalc z-2"
        onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => handleSetFocusedTrue(e)}
      >
        <Options />
        <Results />
        <TypeArea />
      </section>
    </>
  );
}

export default App;
