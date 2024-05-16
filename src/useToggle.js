// custom hook

import { useState } from "react";

export const useToggle = (initialValue = false) => {
  // generic names for general use
  const [state, setState] = useState();

  const toggle = () => {
    setState((prev) => !prev);
  };

  // return a array
  return [state, toggle];
};
