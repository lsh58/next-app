import React from "react";

interface Props {
  label?: string;
  type: "email" | "password";
  name: string;
  placeholder: string;
  value: string;
  onChange: (newVal: string) => void;
}

const Input = (props: Props) => {
  const { label, type, name, placeholder, value, onChange } = props;

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={name}
          className="block mb-2 text-sm font-bold text-G-10"
        >
          {label}
        </label>
      )}
      {/* 자동완성 방지 */}
      <input className="hidden" aria-hidden="true" />
      <input
        type={type}
        name={name}
        className="!bg-transparent w-full h-[48px] text-[14px] px-4 rounded-lg border focus:border-G-09 border-G-05 placeholder:text-gray-04 outline-0"
        placeholder={placeholder}
        autoComplete={type === "password" ? "one-time-code" : "off"}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default Input;
