import React, { createContext, useMemo, useState } from "react";
import { ContextDevTool } from "react-context-devtool";
import { useMediaQuery } from "react-responsive";

// Types
import { ThemeProviderProps as Props } from "./theme.context.types";
import { ThemeProviderValue } from "./theme.context.types";

// @ts-ignore
export const ThemeContext = createContext<ThemeProviderValue>();

const ThemeProvider: React.FC<Props> = (props) => {
  const systemPrefersDark = useMediaQuery(
    { query: "(prefers-color-scheme: dark)" },
    undefined,
    (prefersDark) => {
      setIsDarkMode(prefersDark);
    }
  );
  const [isDarkMode, setIsDarkMode] = useState(systemPrefersDark);

  const value: ThemeProviderValue = useMemo(() => {
    return {
      isDarkMode,
      setIsDarkMode,
    };
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={value}>
      <ContextDevTool context={ThemeContext} id="theme" displayName="Theme" />

      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
