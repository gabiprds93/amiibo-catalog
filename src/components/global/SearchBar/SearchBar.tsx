// Types
import { SearchBarProps as Props } from "./SearchBar.types";

import searchSVG from "../../../assets/images/search-solid.svg";

const SearchBar: React.FC<Props> = (props) => {
  return (
    <div className="SearchBar">
      <input type="text" placeholder="Buscar amiibo" />

      <div className="SearchBar__icon">
        <img src={searchSVG} alt="Icono para buscar" />
      </div>
    </div>
  );
};

SearchBar.defaultProps = {};

export default SearchBar;
