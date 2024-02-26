import { useEffect, useState } from "react";
import { useWordsStore } from "../store/words";

const useTranslate = () => {
  const [translateY, setTranslateY] = useState(0);
  const { typed, numberOfWords, actualState, words } = useWordsStore();
  const [max_index, setMax_index] = useState(164);
  const offset = 82;

  useEffect(() => {
    //translado el texto
    if (numberOfWords < 60) return;
    //Translado solo si quedan mas de dos lineas de diferencia con el bottom
    if (typed.length >= max_index && words.length - max_index >= 164) {
      setMax_index(max_index + offset);
      setTranslateY(translateY - 40);
    }
  }, [numberOfWords, typed.length, translateY, max_index, offset, words]);

  //Reiniciar el trasnlate
  useEffect(() => {
    if (actualState === "STOPPED" || actualState === "FINISHED") {
      setTranslateY(0);
      setMax_index(162);
    }
  }, [numberOfWords, actualState]);

  return { translateY };
};

export default useTranslate;
