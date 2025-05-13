import React from "react";

const FormSelect = ({ label, name, list, defaultValue, size }) => {
  return (
    <div className="form-control flex flex-col gap-y-4">
      <label htmlFor={name} className="label">
        <span className="capitalize label-text">{label}</span>
      </label>
      <select
        name={name}
        id={name}
        className={`select select-bordered ${size}`}
        defaultValue={defaultValue}
      >
        {list.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormSelect;
