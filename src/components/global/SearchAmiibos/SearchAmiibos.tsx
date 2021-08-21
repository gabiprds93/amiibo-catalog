import { useState } from "react";
import { Link } from "react-router-dom";

// Components
import SearchBar from "../SearchBar/SearchBar";
import Backdrop from "../Backdrop/Backdrop";
// Contexts
import useAmiibos from "../../../contexts/amiibos/amiibos.hooks";
// Services
import { useFetchAmiibos } from "../../../services/amiibos/amiibos.service.hooks";
// Types
import { SearchAmiibosProps as Props } from "./SearchAmiibos.types";
import { Amiibo } from "../../../types/amiibos.types";

const SearchAmiibos: React.FC<Props> = (props) => {
  const [searchText, setSearchText] = useState("");
  const [showResults, setShowResults] = useState(false);
  const { amiibosFiltered, setAmiibosFiltered } = useAmiibos();
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
    let results: Amiibo[] | undefined;

    if (value) {
      results = amiibos?.filter((amiibo) => {
        const lowerCaseName = amiibo.name.toLowerCase();
        const lowerCaseValue = value.toLowerCase();

        return lowerCaseName.includes(lowerCaseValue);
      });
    }

    setShowResults(!!results?.length);
    setAmiibosFiltered(results);
  };

  const onBackdropClicked = () => {
    setShowResults(false);
  };

  return (
    <div className="SearchAmiibos">
      <SearchBar placeholder="Buscar amiibo" onChange={searchInputHandler}>
        {showResults ? (
          <>
            {amiibosFiltered?.slice(0, 4).map((amiibo, index) => {
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

            {amiibosFiltered?.length ? (
              <div className="SearchAmiibos__search">
                <Link className="SearchAmiibos__search__link" to="/results">
                  {`Buscar todos "${searchText}"`}
                </Link>
              </div>
            ) : null}
          </>
        ) : null}
      </SearchBar>

      <Backdrop opened={showResults} onClick={onBackdropClicked} />
    </div>
  );
};

SearchAmiibos.defaultProps = {};

export default SearchAmiibos;
