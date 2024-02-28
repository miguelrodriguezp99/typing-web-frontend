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
import Subheader from "./Subheader";

const Header = () => {
  const navigate = useNavigate();
  const { restart } = useWordsStore();

  const handleCrownClick = (e) => {
    e.preventDefault();
    console.log("crown");
    navigate("/chart");
  };

  return (
    // -------- Header -----------
    <div className="max-w-[1152px] flex flex-col align-center justify-center mx-auto pt-5 gap-2">
      <div className="flex flex-row gap-3 items-center">
        <KeyboardIcon props="fill-selected" />

        <h1
          className="text-4xl font bold lef-0 text-logo cursor-pointer"
          onClick={restart}
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
          <Profile props="fill-iconstext w-5 h-5" />
        </div>
      </div>

      {/* -------- Header Bottom -----------  */}
      <Subheader />
    </div>
  );
};

export default Header;
