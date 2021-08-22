// Interfaces and types from context Theme
import { Dispatch, SetStateAction } from "react";

// Provider Props
export interface ThemeProviderProps {
  children: React.ReactNode;
}

// Provider value

/** Theme provider value.
 *
 * @interface ThemeProviderValue
 * @property {boolean} isDarkMode If the dar modo is on
 * @property {Dispatch<SetStateAction<boolean>>} setIsDarkMode For change state of the isDarkMode
 */
export interface ThemeProviderValue {
  isDarkMode: boolean;
  setIsDarkMode: Dispatch<SetStateAction<boolean>>;
}
