"use client";

import { createContext } from "react";
import { prefix } from "./config";

export const ConfigContext = createContext();

function ConfigProvider({ children }) {
  return (
    <ConfigContext.Provider value={{ prefix }}>
      {children}
    </ConfigContext.Provider>
  );
}

export default ConfigProvider;
