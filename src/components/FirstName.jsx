import React from "react";
import { useGlobalContext } from "../Context";

const FirstName = () => {
  const { firstName } = useGlobalContext();
  const { id, name, type, placeholder } = firstName;
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
