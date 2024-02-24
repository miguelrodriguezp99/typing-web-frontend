import { create } from "zustand";
import { faker } from "@faker-js/faker";
import { generate } from "random-words";

export const APP_STATE = {
  STOPPED: "STOPPED",
  RUNNING: "RUNNING",
  FINISHED: "FINISHED",
};

export const useWordsStore = create((set, get) => ({
  numberOfWords: 30,
  words: null,
  actualState: APP_STATE.STOPPED,
  time: 30,
  inputs: 0,
  corrects: 0,
  errors: 0,

  setNumberOfWords: (count) => {
    set({ numberOfWords: count });
    get().setWords();
  },

  setWords: () => {
    set({ words: generate(get().numberOfWords).join(" ") });
  },

  setAppState: (state) => {
    set({ actualState: state });
  },

  setTime: (time) => {
    set({ time: time });
  },

  setInputs: (inputs) => {
    set({ inputs: inputs });
  },

  setCorrects: (corrects) => {
    set({ corrects: corrects });
  },

  incrementTypedValues: (typed, expected) => {
    const isCorrect = typed === expected;
    const isWhiteSpace = expected === " ";
    if (!isCorrect && !isWhiteSpace) {
      set({ errors: get().errors + 1 });
    } else {
      set({ corrects: get().corrects + 1 });
    }
    set({ inputs: get().inputs + 1 });
  },

  restart: () => {
    set({ inputs: 0 });
    set({ corrects: 0 });
    set({ errors: 0 });
    get().stopState();
    get().setWords();
  },

  /* ---- Estados ---- */
  stopState: () => {
    set({ actualState: APP_STATE.STOPPED });
    set({ time: get().time });
  },

  runState: () => {
    set({ actualState: APP_STATE.RUNNING });
  },

  finishedState: () => {
    set({ actualState: APP_STATE.FINISHED });
  },
}));
