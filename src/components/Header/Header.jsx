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
import { Link } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const { restart, setFocusedTrue } = useWordsStore();

  const handleHeaderClick = (e) => {
    e.stopPropagation();
  };

  return (
    // -------- Header -----------
    <div
      className="max-w-[1152px] flex flex-col align-center 
      tracking-wider
      justify-center pt-5 gap-2 
      px-5 sm:px-5 md:px-10 lg:px-10 mx-auto
      lg:max-w-[1240px] "
      onClick={(e) => handleHeaderClick(e)}
    >
      <div className="flex flex-row gap-3 items-center">
        <Link to="/">
          <KeyboardIcon props="fill-selected" />
        </Link>

        <h1
          className="text-4xl font bold left-0 text-logo cursor-pointer hidden sm:block"
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
          <Link to="/scores">
            <Crown props="fill-iconstext w-5 h-5" />
          </Link>
          <Info props="fill-iconstext w-5 h-5" />
          <Settings props="fill-iconstext w-5 h-5" />
        </div>
        <div className="flex flex-row align-center items-center mt-2 gap-6 ml-2">
          <NotificationModal />

          <Link to="login">
            <Profile props="fill-iconstext w-5 h-5 transition-all duration-300 hover:fill-iconstext-hover cursor-pointer" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
