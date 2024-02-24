import React, { useCallback, useEffect, useState } from "react";
import "./Modal.css";
export default function Modal() {
  const [modal, setModal] = useState(false);
  const [oldTheme, setOldTheme] = useState("dark");

  const toggleModal = useCallback(() => {
    setModal(!modal);
  }, [modal]);

  const switchTheme = useCallback(
    (theme) => {
      return () => {
        const root = document.documentElement;
        root.classList.remove(oldTheme);
        root.classList.add(theme);
        setOldTheme(theme);
        toggleModal();
      };
    },
    [oldTheme, toggleModal]
  );

  // const mouseEnter = useCallback((theme) => {
  //   return () => {
  //     console.log("hi!");
  //   };
  // }, []);

  const mouseEnter = (theme) => {
    console.log("hi!");
    const root = document.documentElement;
    root.classList.remove(oldTheme);
    root.classList.add(theme);
  };

  const mouseLeave = (theme) => {
    console.log("bye!");
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
        Open
      </button>

      {modal && (
        <div className="w-full h-full top-0 left-0 right-0 bottom-0 fixed">
          <div
            onClick={toggleModal}
            className="bg-[#313131b3] opacity-75 w-full h-full top-0 left-0 right-0 bottom-0 fixed"
          >
            a
          </div>
          <div className="modal-content bg-primary cursor-pointer rounded-xl text-secondary">
            <h2 className="mb-5">Select your theme!</h2>
            <div className="flex flex-col">
              <button
                onClick={switchTheme("dark")}
                onMouseEnter={() => mouseEnter("dark")}
                onMouseLeave={() => mouseLeave("dark")}
              >
                Dark
              </button>
              <button
                onClick={switchTheme("light")}
                onMouseEnter={() => mouseEnter("light")}
                onMouseLeave={() => mouseLeave("light")}
              >
                Light
              </button>
              <button
                onClick={switchTheme("vscode")}
                onMouseEnter={() => mouseEnter("vscode")}
                onMouseLeave={() => mouseLeave("vscode")}
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
