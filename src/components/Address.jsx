import React from "react";
import { useGlobalContext } from "../Context";

const FirstName = () => {
  const { address } = useGlobalContext();
  const { id, name, type, placeholder } = address;
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
