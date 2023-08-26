import React from "react";
import { useGlobalContext } from "../Context";

const FirstName = () => {
  const { secondName } = useGlobalContext();
  const { id, name, type, placeholder } = secondName;
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
