import { useCallback, useEffect, useState } from "react";
import "./Modal.css";
import { useSoundsStore } from "../../store/sounds";
import { SOUND_MAP, getSoundName } from "../Sound/sound";

export default function SoundModal() {
  const [modal, setModal] = useState(false);
  const [actualNameSong, setActualNameSong] = useState("cherry");
  const { currentSong, setCurrentSound } = useSoundsStore();

  useEffect(() => {
    const sound = localStorage.getItem("sound");
    if (sound) {
      setCurrentSound(sound);
    } else {
      setCurrentSound(SOUND_MAP["cherry"]);
    }
  }, [setCurrentSound]);

  const toggleModal = useCallback(() => {
    setModal(!modal);
  }, [modal]);

  const switchSound = useCallback(
    (sound) => {
      return () => {
        setCurrentSound(sound);
        setActualNameSong(getSoundName(sound));
        toggleModal();
        localStorage.setItem("sound", sound);
      };
    },
    [setCurrentSound, toggleModal, setActualNameSong]
  );

  return (
    <>
      <button onClick={toggleModal} className="p-3">
        <div className="flex flex-row gap-1 justify-center text-center items-center group">
          <p className="text-iconstext group-hover:text-secondary-hover">
            {actualNameSong}
          </p>
        </div>
      </button>

      {modal && (
        <div className="w-full h-full top-0 left-0 right-0 bottom-0 fixed">
          <div
            onClick={toggleModal}
            className="bg-[#313131b3] opacity-75 w-full h-full top-0 left-0 right-0 bottom-0 fixed"
          ></div>
          <div className="modal-content bg-primary cursor-pointer rounded-xl text-secondary">
            <h2 className="mb-5">Select your sound!</h2>
            <div className="flex flex-col">
              <button
                onClick={switchSound(SOUND_MAP["cherry"])}
                className="text-iconstext hover:text-secondary-hover"
              >
                cherry
              </button>
              <button
                onClick={switchSound(SOUND_MAP["typewriter"])}
                className="text-iconstext hover:text-secondary-hover"
              >
                typewriter
              </button>
              <button
                onClick={switchSound(SOUND_MAP["keyboard"])}
                className="text-iconstext hover:text-secondary-hover"
              >
                keyboard
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
