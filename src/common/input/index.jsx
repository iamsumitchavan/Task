import React from "react";
import "./input.css";

const Input = ({ label, name, type, register, required, errors, options }) => {
  console.log("error is ", errors?.deadline?.message);
  return (
    <div className="input-container">
      <label>{label}</label>
      {type == "text" && (
        <input {...register(name, { required })} className="input" />
      )}
      {type == "textarea" && (
        <textarea
          {...register(name, { required })}
          className="input textarea"
        />
      )}
      {type == "date" && (
        <input
          className="date"
          type="date"
          id="date"
          {...register(name, { required })}
        />
      )}
      {type == "select" && (
        <select {...register(name, { required })} className="input">
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default Input;
