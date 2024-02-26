import React, { useEffect } from "react";
import Timer from "./components/Timer";
import RandomWords from "./components/RandomWords";
import UserWords from "./components/UserWords";
import Header from "./components/Header";
import useTyping from "./hooks/useTyping";
import { useWordsStore } from "./store/words";
import Results from "./components/Results";
import Footer from "./components/Footer";

function App() {

  const setWords = useWordsStore((state) => state.setWords);


  //Start typing action
  useTyping();

  useEffect(() => {
    setWords();
  }, [setWords]);

  return (
    <>
      <Wrapper>
        <Header />

        <div className="mt-20">
          <Timer />
          <WordsContainer>
            <RandomWords />
            <UserWords />
          </WordsContainer>
        </div>

        <Results />

        <Footer />
      </Wrapper>
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
    <body className="bg-primary min-h-screen tracking-wider font-mono md:px-10 sm:px-5 px-2">
      <div>{children}</div>
    </body>
  );
};

export default App;
