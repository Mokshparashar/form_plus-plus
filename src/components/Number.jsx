import React from "react";
import { useGlobalContext } from "../Context";

const FirstName = () => {
  const { number } = useGlobalContext();
  const { id, name, type, placeholder } = number;
  return (
    <input
      type={type}
      name={name}
      id={name}
      key={id}
      placeholder={placeholder}
    />
  );
};

export default FirstName;
