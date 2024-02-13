import React, { useState } from "react";
import iconCross from "../../assets/icon-cross.svg";

const MultiInput = ({
  buttonName,
  onChangeInput,
  onAddInput,
  onDeleteInput,
  defaultValue = [],
}) => {
  const [inputs, setInputs] = useState(defaultValue);

  const clickHandler = (e) => {
    e.preventDefault();
    const newInput = { value: "", id: new Date().getTime() };
    setInputs([...inputs, newInput]);
    onAddInput(newInput.id, newInput.value);
  };

  const deleteInput = (id) => {
    setInputs(inputs.filter((input) => input.id != id));
    onDeleteInput(id);
  };

  const changeInput = (id, value) => {
    setInputs(inputs.map((input) => (input.id != id ? input : { id, value })));
    onChangeInput(id, value);
  };

  return (
    <div className="multi-input">
      {inputs.map((input) => (
        <div className="line" key={input.id}>
          <input
            type="text"
            value={input.value}
            onChange={(e) => changeInput(input.id, e.target.value)}
          />
          <img
            className="icon"
            onClick={() => deleteInput(input.id)}
            src={iconCross}
          />
        </div>
      ))}
      <button onClick={clickHandler}>{buttonName}</button>
    </div>
  );
};

export default MultiInput;
