import { useEffect, useRef, useState } from "react";
import { useWordsStore } from "../store/words";

const BASE_WIDTH = 1152; // Ancho base del contenedor para 82 letras
const BASE_OFFSET = 82; // Número base de letras por fila

const useTranslate = (divRef) => {
  const [translateY, setTranslateY] = useState(0);
  const { typed, numberOfWords, actualState, words } = useWordsStore();
  const [maxIndex, setMaxIndex] = useState(164); // Inicialmente para dos filas
  const [offset, setOffset] = useState(BASE_OFFSET);

  /* width del box */
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Función para actualizar el estado con el nuevo ancho de la ventana

    const handleResize = () => {
      if (divRef?.current?.offsetWidth) {
        setWidth(divRef?.current?.offsetWidth);
        const newOffset = Math.floor((width / BASE_WIDTH) * BASE_OFFSET);
        setOffset(newOffset);

        const newMaxIndex = newOffset * 2;
        setMaxIndex(newMaxIndex);
      }
    };
    // Agregar el manejador de eventos 'resize' al objeto window
    window.addEventListener("resize", handleResize);

    // Función de limpieza para remover el manejador de eventos
    return () => window.removeEventListener("resize", handleResize);
  }, [width, divRef]);

  useEffect(() => {
    //translado el texto

    if (numberOfWords < 60) return;
    //Translado solo si quedan mas de dos lineas de diferencia con el bottom
    if (typed.length >= maxIndex && words.length - maxIndex >= 164) {
      setMaxIndex(maxIndex + offset);
      setTranslateY(translateY - 40);
    }
  }, [numberOfWords, typed.length, translateY, maxIndex, offset, words]);

  //Reiniciar el trasnlate
  useEffect(() => {
    if (actualState === "STOPPED" || actualState === "FINISHED") {
      setTranslateY(0);
      setMaxIndex(162);
    }
  }, [numberOfWords, actualState]);

  return { translateY, maxIndex, offset, width };
};

export default useTranslate;
