import React from "react";
import GuideKeys from "./GuideKeys";

const Guide = () => {
  return (
    <>
      <div className="flex mx-auto items-center justify-center gap-3 text-[12px] text-iconstext">
        <GuideKeys text="tab" /> + <GuideKeys text="enter" /> - restart test
      </div>

      <div className="flex mx-auto items-center justify-center gap-3 text-[12px] text-iconstext mt-2">
        <GuideKeys text="esc" /> or <GuideKeys text="ctrl" /> +{" "}
        <GuideKeys text="shift" /> + <GuideKeys text="p" /> - command line
      </div>
    </>
  );
};

export default Guide;
