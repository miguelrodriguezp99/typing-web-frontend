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


function App() {


  const { setWords, actualState } = useWordsStore();

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

        <div>
          <Results />
        </div>

        <div className={`mt-20 animate-fade animate-once animate-duration-[800ms] animate-normal animate-fill-both ${actualState === "FINISHED" ? 'hidden' : ''}`}>
          <Timer />
          <WordsContainer>
            <RandomWords />
            <UserWords />
            <BlurEffect />
          </WordsContainer>
        </div>



        <Footer />
      </Wrapper>

      <Toaster richColors position="top-right" />
    </>
  );
}

const WordsContainer = ({ children }: { children: React.ReactNode }) => {

  return (
    <div className="relative text-2xl max-w-6xl leading-relaxed mx-auto break-keep max-h-[160px] overflow-y-hidden" >
      {children}
    </div>
  );
};

const Wrapper = ({ children }: { children: React.ReactNode }) => {

  const { setFocusedFalse, setFocusedTrue } = useWordsStore();

  const handleSetFocusedTrue = (e: React.MouseEvent) => {
    e.stopPropagation();
    setFocusedTrue();
  };

  return (
    <div id="wide-div" className="w-full bg-primary z-1" onClick={setFocusedFalse}>
      <section className="bg-primary min-h-screen tracking-wider font-mono md:px-10 sm:px-5 px-2 relative max-w-[1152px] mx-auto z-99" onClick={(e) => handleSetFocusedTrue(e)}>
        <div>{children}</div>
      </section>
    </div>
  );
};

export default App;
