/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useRef, useState } from "react";
import { isKeyboardCodeAllowed } from "../utils/helpers";
import { useWordsStore } from "../store/words";

const useTyping = () => {
  const [typed, setTyped] = useState("");
  const [cursor, setCursor] = useState(0);
  const totalInputs = useRef(0);
  const { actualState, runState, words, finishedState } = useWordsStore();

  const hasFinished = cursor >= words?.length;

  const keyDownHandler = useCallback(({ key, code }) => {
    if (!isKeyboardCodeAllowed(code)) return;

    switch (key) {
      case "Backspace":
        setTyped((prev) => prev.slice(0, -1));
        setCursor((prev) => prev - 1);
        totalInputs.current -= 1;
        break;
      default:
        setTyped((prev) => prev + key);
        setCursor((cursor) => cursor + 1);
        totalInputs.current += 1;
        break;
    }
  });

  /* Si terminamos de escribir entonces paramos */
  useEffect(() => {
    if (hasFinished) {
      finishedState();
    }
  }, [hasFinished, runState]);

  /* cambiamos el cursor para que al darle a reiniciar no empiece el contador de nuevo sin escribir */
  useEffect(() => {
    if (actualState === "FINISHED") {
      setCursor(0);
    }

    if (actualState === "STOPPED") {
      setTyped("");
      setCursor(0);
      totalInputs.current = 0;
    }
  }, [actualState]);

  /* Si escribimos ponemos en marcha el estado */
  useEffect(() => {
    if (cursor >= 1 && actualState === "STOPPED") {
      runState();
    }
  }, [cursor, actualState, runState]);

  /* Quitamos y ponemos el event listener */
  useEffect(() => {
    if (actualState === "FINISHED") {
      window.removeEventListener("keydown", keyDownHandler);
    } else {
      window.addEventListener("keydown", keyDownHandler);
    }
    return () => {
      window.removeEventListener("keydown", keyDownHandler);
    };
  }, [keyDownHandler, actualState]);

  return { typed, setTyped };
};

export default useTyping;
