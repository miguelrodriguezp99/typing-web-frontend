import React from "react";
import ThemeModal from "./Modal/ThemeModal";
import { Mail, Support, Code, Discord, X } from "../assets/icons/FooterIcons";
import Guide from "./Footer/Guide";
import SoundModal from "./Modal/SoundModal";

const Footer = () => {
  return (
    <>
      <div>
        <div className="text-center sticky">
          <div className="">
            <Guide />
          </div>

          <div className="max-w-[1152px] flex align-center justify-center items-center mx-auto gap-3 py-2 text-secondary ">
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
              <ThemeModal />

              <SoundModal />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
