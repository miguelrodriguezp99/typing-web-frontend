import { Cursor } from "../assets/icons/ResultsIcon";
import { useWordsStore } from "../store/words";

const BlurEffect = () => {
  const { isFocused, setFocusedTrue } = useWordsStore();

  const handleSetFocusedTrue = (e) => {
    e.stopPropagation();
    setFocusedTrue();
  };
  return (
    <>
      <div
        id="blur-effect"
        className={`absolute inset-0 text-primary transition-all duration-300 delay-150 ${
          !isFocused ? "" : "hidden "
        }  z-50`}
        onClick={(e) => handleSetFocusedTrue(e)}
      >
        <div className="inset-0 text-primary opacity-85 grid items-center ">
          <div
            className={`text-[#ddd] flex items-center 
          justify-center text-center mt-10 text-[18px] gap-2
          ${!isFocused ? "appear" : ""}`}
          >
            <Cursor props="w-5 h-5 fill-[#ddd]" />
            Click here or start typing to focus
          </div>
        </div>
      </div>
    </>
  );
};

export default BlurEffect;
