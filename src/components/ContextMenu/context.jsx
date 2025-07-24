// src/context/MyContext.js
import { createContext, useState } from "react";
import { Cart } from "../../pages/Cart/cart";
import { App } from "../../App";
import { Filtermenu } from "../Filtermenu/filtermenu";

// Step 1: Create the context
export const MyContext = createContext();

// Step 2: Create a provider
export const MyProvider = () => {
  const [value, setValue] = useState([]);

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {<App/>}
    </MyContext.Provider>
  );
};
