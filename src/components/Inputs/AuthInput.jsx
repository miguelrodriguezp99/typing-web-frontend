import React from "react";

const AuthInput = ({ placeholder, type }) => {
  return (
    <input
      className="rounded-md bg-tertiary p-1 placeholder:text-iconstext border-iconstext px-2 text-text"
      placeholder={placeholder}
      type={type}
    />
  );
};

export default AuthInput;
