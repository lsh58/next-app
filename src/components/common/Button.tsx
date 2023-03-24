import React from "react";

interface Props {
  type?: "button" | "submit" | "reset";
  classes?: string;
  onClick?: () => void;
  children?: string;
}

function ButtonComponent(props: Props) {
  const { type = "button", classes = "", onClick, children } = props;

  return (
    <button
      type={type}
      className={`btn px-4 py-2 bg-cams-blue-04 border-0 transition duration-300 text-white hover:bg-[#1F90FF] rounded-xl ${classes}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default ButtonComponent;
