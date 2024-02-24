import React, { useEffect } from 'react';
import Timer from './components/Timer';
import RandomWords from './components/RandomWords';
import UserWords from './components/UserWords';
import Header from './components/Header';
import useTyping from './hooks/useTyping';
import { useWordsStore } from './store/words';
import Results from './components/Results';
import Footer from './components/Footer';



function App() {

  const words = useWordsStore(state => state.words);
  const setWords = useWordsStore(state => state.setWords);
  const { typed, setTyped } = useTyping();

  useEffect(() => {
    setWords();
  }, [setWords]);

  return (

    <>
      <Wrapper>
        <Header setTyped={setTyped} />

        <div className='mt-20'>
          <Timer />
          <WordsContainer>
            <RandomWords words={words} />
            <UserWords typed={typed} expected={words} />
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

    <div className="relative text-2xl max-w-6xl leading-relaxed mx-auto break-keep">
      {children}
    </div>
  );
};

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return <body className='bg-primary text-slate-50 min-h-screen px-4 
  justify-center align-center tracking-wider font-mono
  '><div>{children}</div></body>;
}

export default App;
