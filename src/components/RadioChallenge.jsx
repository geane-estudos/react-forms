import React from "react";

const RadioChallenge = ({ pergunta, options, id, active, value, onChange }) => {
  // console.log(active);
  if (active === false) return null;
  return (
    <fieldset>
      <legend>{pergunta}</legend>
      {options.map((option) => (
        <label key={option} style={{ marginBottom: "1rem" }}>
          <input
            type="radio"
            id={id}
            checked={value === option}
            value={option}
            onChange={onChange}
          />
          {option}
        </label>
      ))}
    </fieldset>
  );
};

export default RadioChallenge;
