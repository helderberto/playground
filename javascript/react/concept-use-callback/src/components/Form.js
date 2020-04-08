import React, { useState, useCallback } from "react";

import FormContext from "./FormContext";

const Form = ({ children }) => {
  const [inputs, setInputs] = useState([]);

  const registerField = useCallback((name, ref) => {
    setInputs((oldInputs) => [...oldInputs, { name, ref }]);
  }, []);

  return (
    <form>
      <FormContext.Provider value={{ registerField }}>
        {children}
      </FormContext.Provider>
    </form>
  );
};

export default Form;
