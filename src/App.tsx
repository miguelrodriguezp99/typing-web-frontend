import React, { useEffect } from "react";
import Timer from "./components/Timer";
import RandomWords from "./components/RandomWords";
import UserWords from "./components/UserWords";
import Header from "./components/Header";
import useTyping from "./hooks/useTyping";
import { useWordsStore } from "./store/words";
import Results from "./components/Results";
import Footer from "./components/Footer";
import { Toaster } from 'sonner';
import BlurEffect from "./components/BlurEffect";
import useMouseOut from "./hooks/useMouseOut";
import TypeArea from "./components/TypeArea";


function App() {


  const { setWords } = useWordsStore();

  //Handle mouse out of the window
  useMouseOut();

  //Start typing action
  useTyping();

  useEffect(() => {
    setWords();
  }, [setWords]);

  return (
    <>
      <Wrapper>
        <Header />
        <Results />
        <TypeArea />
        <Footer />
      </Wrapper>

      <Toaster richColors position="top-right" />
    </>
  );
}



const Wrapper = ({ children }: { children: React.ReactNode }) => {

  const { setFocusedFalse, setFocusedTrue } = useWordsStore();

  const handleSetFocusedTrue = (e: React.MouseEvent) => {
    e.stopPropagation();
    setFocusedTrue();
  };

  const handleSetFocusedFalse = (e: React.MouseEvent) => {
    e.stopPropagation();
    setFocusedFalse();

  };

  return (
    <div id="wide-div" className="w-full bg-primary" onClick={(e) => handleSetFocusedFalse(e)}>
      <section className="bg-primary min-h-screen tracking-wider font-mono
       md:px-10 sm:px-5 px-2 relative mx-auto 
       lg:max-w-[1310px]" onClick={(e) => handleSetFocusedTrue(e)}>
        <div>{children}</div>
      </section>
    </div>
  );
};

export default App;
