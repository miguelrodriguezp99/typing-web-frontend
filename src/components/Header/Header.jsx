import { useWordsStore } from "../../store/words";
import {
  Crown,
  Info,
  KeyboardIcon,
  KeyboardSecondIcon,
  Profile,
  Settings,
} from "../../assets/icons/HeaderIcons";
import NotificationModal from "../Modal/NotificationModal";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const { restart, setFocusedTrue } = useWordsStore();

  const handleHeaderClick = (e) => {
    e.stopPropagation();
  };

  const handleCrownClick = (e) => {
    e.preventDefault();
    navigate("/chart");
  };

  return (
    // -------- Header -----------
    <div
      className="max-w-[1152px] flex flex-col align-center 
      tracking-wider
      justify-center pt-5 gap-2 md:px-10 sm:px-5 lg:px-10 mx-auto
      lg:max-w-[1240px] "
      onClick={(e) => handleHeaderClick(e)}
    >
      <div className="flex flex-row gap-3 items-center">
        <KeyboardIcon props="fill-selected" />

        <h1
          className="text-4xl font bold left-0 text-logo cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            restart();
            navigate("/");
            setFocusedTrue();
          }}
        >
          Typemonkey
        </h1>
        <div className="flex align-center items-center mt-2 gap-6 ml-2 flex-1 ">
          <div onClick={restart}>
            <KeyboardSecondIcon props="fill-iconstext w-5 h-5 transition-all duration-300 hover:fill-iconstext-hover cursor-pointer" />
          </div>
          <div onClick={(e) => handleCrownClick(e)}>
            <Crown props="fill-iconstext w-5 h-5" />
          </div>
          <Info props="fill-iconstext w-5 h-5" />
          <Settings props="fill-iconstext w-5 h-5" />
        </div>
        <div className="flex flex-row align-center items-center mt-2 gap-6 ml-2">
          <NotificationModal />
          <button
            onClick={() => {
              navigate("/login");
            }}
          >
            <Profile props="fill-iconstext w-5 h-5 transition-all duration-300 hover:fill-iconstext-hover cursor-pointer" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
