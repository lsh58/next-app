import React from "react";

interface Props {
  id: string;
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange: (newVal: boolean) => void;
}

const Checkbox = (props: Props) => {
  const { id, label, checked = false, disabled = false, onChange } = props;

  return (
    <div className="flex items-center">
      <input
        id={id}
        aria-describedby={id}
        checked={checked}
        disabled={disabled}
        type="checkbox"
        className="w-5 h-5 border-2 rounded appearance-none border-G-06 checkbox-checked checkbox-disabled"
        onChange={(e) => onChange(e.target.checked)}
      />
      {label && (
        <div className="ml-2 text-sm">
          <label htmlFor={id} className="text-gray-08">
            {label}
          </label>
        </div>
      )}
      <style jsx>{`
        .checkbox-checked {
          @apply checked:border-0 checked:bg-cams-blue-04 checked:bg-50% checked:bg-no-repeat checked:bg-center checked:bg-[url('/images/icon/ico_check_white.svg')];
        }
        .checkbox-disabled {
          @apply disabled:bg-G-02 disabled:border-G-03 checked:disabled:bg-cams-blue-03;
        }
      `}</style>
    </div>
  );
};

export default Checkbox;
