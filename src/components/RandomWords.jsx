import { useWordsStore } from "../store/words";
import useTranslate from "../hooks/useTranslate";

const RandomWords = () => {
  const { words } = useWordsStore();
  const { translateY } = useTranslate();

  return (
    <>
      <div className=" overflow-y-hidden max-h-[150px]">
        <div
          className="text-[#4a4c50]"
          style={{
            transform: `translateY(${translateY}px)`,
            transition: "transform 0.3s linear",
          }}
        >
          {words}
        </div>
      </div>
    </>
  );
};

export default RandomWords;
