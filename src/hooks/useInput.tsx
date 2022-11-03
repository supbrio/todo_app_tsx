import { useState } from "react";

export const useInput = (definer: string) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [inputError, setInputError] = useState<string | null>(null);

  const inputChangeHandler = (value: string) => {
    console.log(value);
    if (value === "") {
      setInputError(`${definer} field cannot be empty!`);
      setInputValue("");
      return;
    }
    setInputValue(value);
    setInputError(null);
  };

  return {
    inputError,
    inputValue,
    inputChangeHandler,
    setInputValue,
    setInputError,
  };
};
