import React from "react";
import { useGlobalContext } from "../Context";

const FirstName = () => {
  const { countryData } = useGlobalContext();
  const { id, name, tag, options } = countryData;

  return (
    <select name={name} id={name}>
      {Object.keys(options).map((key) => (
        <option key={options[key].id} value={options[key]}>
          {options[key]}
        </option>
      ))}
    </select>
  );
};

export default FirstName;
