import React from "react";
import Modal from "./Modal/Modal";

import { SOUND_MAP } from "./Sound/sound";
import { useSoundsStore } from "../store/sounds";

const Footer = () => {
  const { setCurrentSound } = useSoundsStore();

  return (
    <>
      <div>
        <div className="absolute bottom-0 inset-x-0 text-center mb-2 ">
          <div className="w-[80%] flex align-center justify-center items-center  mx-auto gap-3 p-2 text-secondary">
            Soy el footer!
            <Modal />
            <button onClick={() => setCurrentSound(SOUND_MAP["cherry"])}>
              cherry
            </button>
            <button onClick={() => setCurrentSound(SOUND_MAP["typewriter"])}>
              typewriter
            </button>
            <button onClick={() => setCurrentSound(SOUND_MAP["keyboard"])}>
              keyboard
            </button>
            <button onClick={() => setCurrentSound("")}>mute</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
