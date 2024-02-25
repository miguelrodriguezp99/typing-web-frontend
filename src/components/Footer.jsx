import React from "react";
import Modal from "./Modal/Modal";

import { SOUND_MAP } from "./Sound/sound";
import { useSoundsStore } from "../store/sounds";
import { Mail, Support, Code, Discord, X } from "../assets/icons/FooterIcons";
import Guide from "./Footer/Guide";

const Footer = () => {
  const { setCurrentSound } = useSoundsStore();

  return (
    <>
      <div>
        <div className="absolute bottom-0 inset-x-0 text-center ">
          <div className="">
            <Guide />
          </div>

          <div className="max-w-[1152px] flex align-center justify-center items-center mx-auto gap-3 p-2 text-secondary relative">
            <div className="flex flex-1 align-center items-center mt-2 gap-4 text-[12px] font-semibold text-center flex-wrap">
              <div className="flex flex-row gap-1 ">
                <Mail props="fill-iconstext w-4 h-4" />
                <p className="text-iconstext">Contact</p>
              </div>
              <div className="flex flex-row gap-1">
                <Support props="fill-iconstext w-4 h-4" />
                <p className="text-iconstext">Support</p>
              </div>
              <div className="flex flex-row gap-1">
                <Code props="fill-iconstext w-4 h-4" />
                <p className="text-iconstext">Github</p>
              </div>
              <div className="flex flex-row gap-1">
                <Discord props="fill-iconstext w-4 h-4" />
                <p className="text-iconstext">Discord</p>
              </div>
              <div className="flex flex-row gap-1">
                <X props="fill-iconstext w-3.5 h-3.5 mt-0.1" />
                <p className="text-iconstext">Twitter</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mt-2 right-0">
              <Modal />
              <button
                onClick={() => setCurrentSound(SOUND_MAP["cherry"])}
                className="text-iconstext hover:text-secondary-hover"
              >
                cherry
              </button>
              <button
                onClick={() => setCurrentSound(SOUND_MAP["typewriter"])}
                className="text-iconstext hover:text-secondary-hover"
              >
                typewriter
              </button>
              <button
                onClick={() => setCurrentSound(SOUND_MAP["keyboard"])}
                className="text-iconstext hover:text-secondary-hover"
              >
                keyboard
              </button>
              <button
                onClick={() => setCurrentSound("")}
                className="text-iconstext hover:text-secondary-hover"
              >
                mute
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
