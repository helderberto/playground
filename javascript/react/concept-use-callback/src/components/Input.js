import React, { useContext, useRef, useEffect } from "react";

import FormContext from "./FormContext";

const Input = ({ name }) => {
  const inputRef = useRef();
  const { registerField } = useContext(FormContext);

  useEffect(() => {
    if (inputRef.current) {
      registerField({
        name,
        ref: inputRef.current,
      });
    }
  }, [name, registerField]);

  return <input name={name} ref={inputRef} />;
};

export default Input;
