import React from "react";

interface Props {
  id: string;
  label?: string;
  onChange: (newVal: boolean) => void;
}

const Checkbox = (props: Props) => {
  const { id, label, onChange } = props;

  return (
    <div className="flex items-center">
      <input
        id={id}
        aria-describedby={id}
        type="checkbox"
        className="w-4 h-4 border rounded border-G-06"
        onChange={(e) => onChange(e.target.checked)}
      />
      {label && (
        <div className="ml-3 text-sm">
          <label htmlFor={id} className="text-gray-08">
            {label}
          </label>
        </div>
      )}
    </div>
  );
};

export default Checkbox;
