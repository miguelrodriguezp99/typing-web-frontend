import { create } from "zustand";
import typeSoft from "../assets/sound/typeSoft.wav";
import keyboard from "../assets/sound/keyboard.wav";
import cherryBlue from "../assets/sound/cherryBlue.wav";

const SOUND_MAP = {
  keyboard: keyboard,
  typewriter: typeSoft,
  cherry: cherryBlue,
};

export const useSoundsStore = create((set, get) => ({
  volume: 0.25,
  currentSound: SOUND_MAP["cherry"],

  setCurrentSound: (sound) => {
    set({ currentSound: sound });
  },

  setVolume: (volume) => {
    set({ volume: volume });
  },
}));
