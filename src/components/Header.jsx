import { useWordsStore } from "../store/words";
import {
  AtSign,
  Bell,
  Clock,
  Crown,
  Hashtag,
  Info,
  KeyboardIcon,
  KeyboardSecondIcon,
  LetterA,
  Mountain,
  Profile,
  Quote,
  Settings,
  Tool,
} from "../assets/icons/HeaderIcons";

const Header = ({ setTyped }) => {
  const { numberOfWords, setNumberOfWords, restart } = useWordsStore();

  const handleWordsChange = (count) => {
    setNumberOfWords(count);
    restart();
    setTyped("");
  };

  return (
    // -------- Header -----------
    <div className="max-w-[1152px] w-full flex flex-col align-center justify-center mx-auto pt-5 gap-2">
      <div className="flex flex-row gap-3">
        <KeyboardIcon props="fill-secondary " />
        <h1 className="text-4xl font bold lef-0 text-tertiary">Typemonkey</h1>
        <div className="flex align-center items-center mt-2 gap-6 ml-2  flex-1">
          <KeyboardSecondIcon props="fill-iconstext w-5 h-5" />
          <Crown props="fill-iconstext w-5 h-5" />
          <Info props="fill-iconstext w-5 h-5" />
          <Settings props="fill-iconstext w-5 h-5" />
        </div>
        <div className="flex flex-row align-center items-center mt-2 gap-6 ml-2">
          <Bell props="fill-iconstext w-6 h-6" />
          <Profile props="fill-iconstext w-5 h-5" />
        </div>
      </div>

      {/* -------- Header Bottom -----------  */}
      <div className="flex mt-8 right w-[70%] mx-auto rounded-md bg-[#2c2e31] p-2">
        <section className="flex  gap-4 tracking-tight">
          <div className="flex align-center items-center text-center gap-2 ml-3">
            <AtSign props="fill-iconstext w-4 h-4" />
            <p className="text-sm text-iconstext">punctuation</p>
          </div>
          <div className="flex align-center items-center text-center gap-2">
            <Hashtag props="fill-iconstext w-4 h-4" />
            <p className="text-sm text-iconstext ">numbers</p>
          </div>

          <div className="w-1 h-[22px] bg-primary rounded-md"></div>
        </section>

        {/* -------- Header Middle  -----------  */}

        <div className="flex flex-1 gap-4 tracking-tight">
          <div className="flex align-center items-center text-center gap-2 ml-3">
            <Clock props="fill-iconstext w-4 h-4" />
            <p className="text-sm text-iconstext">time</p>
          </div>

          <div className="flex align-center items-center text-center gap-2 ml-3">
            <LetterA props="fill-iconstext w-4 h-4" />
            <p className="text-sm text-iconstext">words</p>
          </div>

          <div className="flex align-center items-center text-center gap-2 ml-3">
            <Quote props="fill-iconstext w-4 h-4" />
            <p className="text-sm text-iconstext">quote</p>
          </div>

          <div className="flex align-center items-center text-center gap-2 ml-3">
            <Mountain props="fill-iconstext w-4 h-4" />
            <p className="text-sm text-iconstext">zen</p>
          </div>

          <div className="flex align-center items-center text-center gap-2 ml-3">
            <Tool props="fill-iconstext w-4 h-4" />
            <p className="text-sm text-iconstext">custom</p>
          </div>
        </div>

        {/* -------- Header Bottom Right || SELECTION OF WORDS -----------  */}
        <div className="flex gap-3 mr-3">
          <div className={`w-1 h-[22px] bg-primary rounded-md`}></div>
          <button
            onClick={() => handleWordsChange(15)}
            selected={numberOfWords === "15"}
          >
            <p
              className={`text-sm font-semibold ${
                numberOfWords === 15 ? "text-secondary" : "text-iconstext"
              }`}
            >
              15
            </p>
          </button>
          <button onClick={() => handleWordsChange(30)}>
            <p
              className={`text-sm font-semibold ${
                numberOfWords === 30 ? "text-secondary" : "text-iconstext"
              }`}
            >
              30
            </p>
          </button>
          <button onClick={() => handleWordsChange(60)}>
            <p
              className={`text-sm font-semibold ${
                numberOfWords === 60 ? "text-secondary" : "text-iconstext"
              }`}
            >
              60
            </p>
          </button>
          <button onClick={() => handleWordsChange(75)}>
            <p
              className={`text-sm font-semibold ${
                numberOfWords === 75 ? "text-secondary" : "text-iconstext"
              }`}
            >
              75
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
