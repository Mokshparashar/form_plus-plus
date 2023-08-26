import React from "react";
import { useGlobalContext } from "../Context";

const FirstName = () => {
  const { email } = useGlobalContext();
  const { id, name, type, placeholder } = email;
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
