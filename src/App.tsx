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


function App() {


  const { setWords, actualState } = useWordsStore();

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
    <div className="relative text-2xl max-w-6xl leading-relaxed mx-auto break-keep max-h-[160px] overflow-y-hidden">
      {children}
    </div>
  );
};

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="bg-primary min-h-screen tracking-wider font-mono md:px-10 sm:px-5 px-2 relative">
      <div>{children}</div>
    </section>
  );
};

export default App;
