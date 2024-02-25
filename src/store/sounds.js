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
  muted: false,

  setCurrentSound: (sound) => {
    set({ currentSound: sound });
  },

  setVolume: (volume) => {
    set({ volume: volume });
  },

  toggleMute: () => {
    set({ muted: !get().muted });

    if (get().muted) {
      get().volume = 0;
    } else {
      get().volume = 0.25;
    }

    console.log(get().muted);
    console.log(get().volume);
    console.log(get().currentSound);
  },
}));
