import { useState } from "react";
import { Link } from "react-router-dom";

// Components
import SearchBar from "../SearchBar/SearchBar";
// Services
import { useFetchAmiibos } from "../../../services/amiibos/amiibos.service.hooks";
// Types
import { SearchAmiibosProps as Props } from "./SearchAmiibos.types";
import { Amiibo } from "../../../types/amiibos.types";

const SearchAmiibos: React.FC<Props> = (props) => {
  const [searchText, setSearchText] = useState("");
  const [amiibosFilter, setAmiibosFilter] = useState<Amiibo[]>();
  const { data: amiibos } = useFetchAmiibos();

  /** Function to handle search input.
   *
   * @param {string} value The value of the input
   */
  const searchInputHandler = (value: string) => {
    setSearchText(value);
    searchAmiibos(value);
  };

  /** Function to search amiibos by input value.
   *
   * @param {string} value The value of the input
   */
  const searchAmiibos = (value: string) => {
    const amiibosFilter = amiibos?.filter((amiibo) => {
      const lowerCaseName = amiibo.name.toLowerCase();
      const lowerCaseValue = value.toLowerCase();

      return lowerCaseName.includes(lowerCaseValue);
    });

    setAmiibosFilter(amiibosFilter);
  };

  return (
    <div className="SearchAmiibos">
      <SearchBar placeholder="Buscar amiibo" onChange={searchInputHandler}>
        {amiibosFilter?.slice(0, 4).map((amiibo, index) => {
          const { name, amiiboSeries, image } = amiibo;

          return (
            <div className="SearchAmiibos__item" key={index}>
              <picture className="SearchAmiibos__item__image">
                <img src={image} alt={`Amiibo ${name}`} />
              </picture>

              <span className="SearchAmiibos__item__info">{`${name} / ${amiiboSeries}`}</span>
            </div>
          );
        })}

        {amiibosFilter ? (
          <div className="SearchAmiibos__search">
            <Link className="SearchAmiibos__search__link" to="/results">
              {`Buscar todos "${searchText}"`}
            </Link>
          </div>
        ) : null}
      </SearchBar>
    </div>
  );
};

SearchAmiibos.defaultProps = {};

export default SearchAmiibos;
