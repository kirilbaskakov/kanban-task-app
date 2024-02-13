import React from "react";

const Select = ({ options, selected, setSelected }) => {
  return (
    <select onChange={(e) => setSelected(e.target.value)} value={selected}>
      {options.map((option) => (
        <option value={option.value} key={option.id}>
          {option.value}
        </option>
      ))}
    </select>
  );
};

export default Select;
