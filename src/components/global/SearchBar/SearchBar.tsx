import { ChangeEvent } from "react";

// Types
import { SearchBarProps as Props } from "./SearchBar.types";

import searchSVG from "../../../assets/images/search-solid.svg";

const SearchBar: React.FC<Props> = (props) => {
  const { placeholder, onChange, children } = props;

  /** Function to handle chage of the input.
   *
   * @param {ChangeEvent<HTMLInputElement>} event Benefits wallet configuration and parameters to be passed to apply in shopping cart
   */
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    onChange(value);
  };

  return (
    <div className="SearchBar">
      <input type="text" placeholder={placeholder} onChange={handleChange} />

      <div className="SearchBar__icon">
        <img src={searchSVG} alt="Icono para buscar" />
      </div>

      <div className="SearchBar__results">{children}</div>
    </div>
  );
};

SearchBar.defaultProps = {};

export default SearchBar;
