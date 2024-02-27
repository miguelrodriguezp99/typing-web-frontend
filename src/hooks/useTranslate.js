import { useEffect, useState } from "react";
import { useWordsStore } from "../store/words";

const BASE_WIDTH = 1152; // Ancho base del contenedor para 82 letras
const BASE_OFFSET = 82; // Número base de letras por fila
// Número base de letras por fila

const useTranslate = (divRef) => {
  const [translateY, setTranslateY] = useState(0);
  const { typed, numberOfWords, actualState, words } = useWordsStore();

  const [offset, setOffset] = useState(BASE_OFFSET);
  const [maxIndex, setMaxIndex] = useState(offset * 2); // Inicialmente para dos filas

  /* width del box */
  const [width, setWidth] = useState(0);

  //Inicializamos el width con el tamaño de la pantalla incial cuando se abre la app
  useEffect(() => {
    setWidth(divRef?.current?.offsetWidth);
    const newOffset = Math.floor(
      (divRef?.current?.offsetWidth / BASE_WIDTH) * BASE_OFFSET
    );
    setOffset(newOffset);
    let newMaxIndex = offset * 2;
    setMaxIndex(newMaxIndex);
  }, [divRef, offset]);

  useEffect(() => {
    // Función para actualizar el estado con el nuevo ancho de la ventana

    const handleResize = () => {
      if (divRef?.current?.offsetWidth) {
        setWidth(divRef?.current?.offsetWidth);
        const newOffset = Math.floor(
          (divRef?.current?.offsetWidth / BASE_WIDTH) * BASE_OFFSET
        );
        setOffset(newOffset);

        const newMaxIndex = newOffset * 2;
        setMaxIndex(newMaxIndex);
        console.log(divRef?.current?.offsetWidth);
        console.log(maxIndex);
        console.log(newOffset);
      }
    };
    // Agregar el manejador de eventos 'resize' al objeto window
    window.addEventListener("resize", handleResize);

    // Función de limpieza para remover el manejador de eventos
    return () => window.removeEventListener("resize", handleResize);
  }, [width, divRef, maxIndex]);

  useEffect(() => {
    if (numberOfWords < 60) return;
    //Translado solo si quedan mas de dos lineas de diferencia con el bottom
    if (typed.length >= maxIndex && words.length - maxIndex >= 166) {
      setMaxIndex(maxIndex + offset);
      setTranslateY(translateY - 40);
    }
    console.log("Escrito: " + typed.length);
    console.log("MaxIndex: " + maxIndex);
    console.log("Offset: " + offset);
  }, [numberOfWords, typed.length, translateY, maxIndex, offset, words]);

  //Reiniciar el trasnlate
  useEffect(() => {
    if (actualState === "STOPPED" || actualState === "FINISHED") {
      setTranslateY(0);
      const newOffset = Math.floor(
        (divRef?.current?.offsetWidth / BASE_WIDTH) * BASE_OFFSET
      );
      setMaxIndex(newOffset * 2);
    }
  }, [numberOfWords, actualState, divRef]);

  return { translateY, maxIndex, offset, width };
};

export default useTranslate;
