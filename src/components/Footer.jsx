import React from "react";
import Modal from "./Modal/Modal";

const Footer = () => {
  return (
    <>
      <div>
        <div className="absolute bottom-0 inset-x-0 text-center mb-2 ">
          <div className="w-[80%] flex align-center justify-center items-center  mx-auto gap-3 p-2 text-secondary">
            Soy el footer!
            <Modal />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
