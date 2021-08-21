import { ChangeEvent, KeyboardEvent, useState } from "react";

// Types
import { SearchBarProps as Props } from "./SearchBar.types";

import searchSVG from "../../../assets/images/search-solid.svg";

const SearchBar: React.FC<Props> = (props) => {
  const { placeholder, onChange, onSearch, children } = props;
  const [value, setValue] = useState("");

  /** Function to handle chage of the input.
   *
   * @param {ChangeEvent<HTMLInputElement>} event Benefits wallet configuration and parameters to be passed to apply in shopping cart
   */
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    onChange(value);
    setValue(value);
  };

  /** Function to handle chage of the input.
   *
   * @param {ChangeEvent<HTMLInputElement>} event Benefits wallet configuration and parameters to be passed to apply in shopping cart
   */
  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && value) {
      onSearch();
    }
  };

  return (
    <div className="SearchBar">
      <input
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />

      <div className="SearchBar__link" onClick={onSearch}>
        <div className="SearchBar__link__icon">
          <img src={searchSVG} alt="Icono para buscar" />
        </div>
      </div>

      <div className="SearchBar__results">{children}</div>
    </div>
  );
};

SearchBar.defaultProps = {};

export default SearchBar;
