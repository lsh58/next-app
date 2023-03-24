import React from "react";

interface Props {
  rounded?: "full" | "xl";
  onClick?: () => void;
  children?: string;
}

function ButtonComponent(props: Props) {
  const { rounded = "xl", onClick, children } = props;

  return (
    <button
      className={`btn px-4 py-2 bg-[#51A9FE] border-0 transition duration-300 text-white hover:bg-[#1F90FF] rounded-${rounded}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default ButtonComponent;
