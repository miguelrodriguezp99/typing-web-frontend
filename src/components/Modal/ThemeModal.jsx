import React, { useCallback, useEffect, useState } from "react";
import "./Modal.css";
import { Palette } from "../../assets/icons/FooterIcons";
export default function ThemeModal() {
  const [modal, setModal] = useState(false);
  const [oldTheme, setOldTheme] = useState("dark");
  const [currentTheme, setCurrentTheme] = useState("dark");

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      setCurrentTheme(theme);
    } else {
      setCurrentTheme("dark");
    }
  }, []);

  const toggleModal = useCallback(() => {
    setModal(!modal);
  }, [modal]);

  // Initial theme
  useEffect(() => {
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.add("light");
  }, []);

  const switchTheme = useCallback(
    (theme) => {
      return () => {
        const root = document.documentElement;
        root.classList.remove(oldTheme);
        root.classList.add(theme);
        localStorage.setItem("theme", theme);
        setOldTheme(theme);
        setCurrentTheme(theme);
        toggleModal();
      };
    },
    [oldTheme, toggleModal]
  );

  const mouseEnter = (theme) => {
    const root = document.documentElement;
    root.classList.remove(oldTheme);
    root.classList.add(theme);
  };

  const mouseLeave = (theme) => {
    const root = document.documentElement;
    root.classList.remove(theme);
    root.classList.add(oldTheme);
  };

  // const mouseLeave = useCallback((theme) => {
  //   return () => {
  //     console.log("bye!");
  //   };
  // }, []);

  return (
    <>
      <button onClick={toggleModal} className="p-3">
        <div className="flex flex-row gap-1 justify-center text-center items-center group">
          <Palette props="w-5 h-5 fill-iconstext group-hover:fill-secondary-hover" />
          <p className="text-iconstext group-hover:text-secondary-hover">
            {currentTheme}
          </p>
        </div>
      </button>

      {modal && (
        <div
          className="w-full h-full top-0 left-0 right-0 bottom-0 fixed
        animate-fade-up animate-once animate-duration-300 animate-ease-out animate-normal animate-fill-both"
        >
          <div
            onClick={toggleModal}
            className="bg-[#313131b3] opacity-75 w-full h-full top-0 left-0 right-0 bottom-0 fixed"
          ></div>
          <div className="modal-content bg-primary cursor-pointer rounded-xl text-secondary">
            <h2 className="mb-5">Select your theme!</h2>
            <div className="flex flex-col">
              <button
                onClick={switchTheme("dark")}
                onMouseEnter={() => mouseEnter("dark")}
                onMouseLeave={() => mouseLeave("dark")}
                className="text-iconstext hover:text-secondary-hover"
              >
                dark
              </button>
              <button
                onClick={switchTheme("light")}
                onMouseEnter={() => mouseEnter("light")}
                onMouseLeave={() => mouseLeave("light")}
                className="text-iconstext hover:text-secondary-hover"
              >
                light
              </button>
              <button
                onClick={switchTheme("vscode")}
                onMouseEnter={() => mouseEnter("vscode")}
                onMouseLeave={() => mouseLeave("vscode")}
                className="text-iconstext hover:text-secondary-hover"
              >
                vscode
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}