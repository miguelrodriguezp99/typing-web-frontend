import { create } from "zustand";
import { generate } from "random-words";
import { calculateErrors } from "../utils/helpers";

export const APP_STATE = {
  STOPPED: "STOPPED",
  RUNNING: "RUNNING",
  FINISHED: "FINISHED",
};

export const useWordsStore = create((set, get) => ({
  numberOfWords: 30,
  words: null,
  actualState: APP_STATE.STOPPED,
  time: 60,
  errors: 0,
  typed: "",
  isFocused: true,

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

  setErrors: (errors) => {
    set({ errors: errors });
  },

  //Concatenamos el typed content
  setTyped: (typed) => {
    set({ typed: get().typed + typed });
  },

  //Elimniamos ultimo elemento del typed content
  deleteTyped: () => {
    set({ typed: get().typed.slice(0, -1) });
  },

  //Restart typed content
  restartTyped: () => {
    set({ typed: "" });
  },

  incrementTypedValues: (typed, expected) => {
    console.log("UPDADINT CHVALS");
    const isCorrect = typed === expected;

    if (!isCorrect) {
      console.log("Error");
      set({ errors: get().errors + 1 });
    } else if (isCorrect) {
      console.log("Correct");
      set({ corrects: get().corrects + 1 });
    }
    set({ inputs: get().inputs + 1 });
  },

  restart: () => {
    set({ inputs: 0 });
    set({ corrects: 0 });
    set({ errors: 0 });
    get().restartTyped();
    get().setWords();
    get().stopState();
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
    get().setErrors(calculateErrors(get().typed, get().words));
    set({ actualState: APP_STATE.FINISHED });
  },

  setFocusedTrue: () => {
    set({ isFocused: true });
    console.log(get().isFocused);
  },

  setFocusedFalse: () => {
    set({ isFocused: false });
    console.log(get().isFocused);
  },
}));
