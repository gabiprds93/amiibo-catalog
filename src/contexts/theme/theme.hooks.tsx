import { useContext } from "react";

// Contexts
import { ThemeContext } from "./theme.context";
// Types
import { ThemeProviderValue } from "./theme.context.types";

const useTheme = () => {
  const context = useContext<ThemeProviderValue>(ThemeContext);
  if (typeof context === "undefined") {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};

export default useTheme;
