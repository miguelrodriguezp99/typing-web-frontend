import { useEffect, useState } from "react";
import { useWordsStore } from "../store/words";

const useMouseOut = () => {
  const [mouseOut, setMouseOut] = useState(false);
  const { setFocusedFalse, setFocusedTrue } = useWordsStore();

  useEffect(() => {
    // Función para manejar el evento de perder el foco
    const handleBlur = () => {
      setMouseOut(true);
    };

    // Función para manejar el evento de ganar el foco
    const handleFocus = () => {
      //setMouseOut(false);
    };

    // Agregar event listeners al montar
    window.addEventListener("blur", handleBlur);
    window.addEventListener("focus", handleFocus);

    // Limpiar event listeners al desmontar
    return () => {
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("focus", handleFocus);
    };
  }, []);

  //Cada vez que cambie el mouseOut se actualiza el estado de isFocused
  useEffect(() => {
    if (mouseOut) {
      setFocusedFalse();
    } else {
      setFocusedTrue();
    }
  }, [mouseOut, setFocusedFalse, setFocusedTrue]);

  return mouseOut;
};

export default useMouseOut;
