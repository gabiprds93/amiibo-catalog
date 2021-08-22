import { useEffect } from "react";
import Toggle from "react-toggle";

// Contexts
import useTheme from "../../../contexts/theme/theme.hooks";
// Types
import { DarkToggleProps as Props } from "./DarkToggle.types";

import moonSVG from "../../../assets/images/moon-solid.svg";
import sunSVG from "../../../assets/images/sun-solid.svg";

const DARK_CLASS = "dark";

const MoonIcon: React.FC = () => (
  <picture>
    <img src={moonSVG} alt="Icono luna" />
  </picture>
);

const SunIcon: React.FC = () => (
  <picture>
    <img src={sunSVG} alt="Icono sol" />
  </picture>
);

const DarkToggle: React.FC<Props> = (props) => {
  const { isDarkMode, setIsDarkMode } = useTheme();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add(DARK_CLASS);
    } else {
      document.documentElement.classList.remove(DARK_CLASS);
    }
  }, [isDarkMode]);

  return (
    <Toggle
      icons={{ checked: <SunIcon />, unchecked: <MoonIcon /> }}
      checked={isDarkMode}
      onChange={(event) => setIsDarkMode(event.target.checked)}
      aria-label="Dark mode"
      className="DarkToggle"
    />
  );
};

DarkToggle.defaultProps = {};

export default DarkToggle;
