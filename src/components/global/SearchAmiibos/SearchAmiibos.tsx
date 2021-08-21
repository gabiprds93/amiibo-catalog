import { useState } from "react";
import { useHistory } from "react-router-dom";

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
  const [results, setResults] = useState<Amiibo[]>();
  const { setAmiibosFiltered } = useAmiibos();
  const { data: amiibos } = useFetchAmiibos();
  const { push } = useHistory();

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
    let amiiboResults: Amiibo[] | undefined;

    if (value) {
      amiiboResults = amiibos?.filter((amiibo) => {
        const lowerCaseName = amiibo.name.toLowerCase();
        const lowerCaseValue = value.toLowerCase();

        return lowerCaseName.includes(lowerCaseValue);
      });
    }

    setResults(amiiboResults);
    setShowResults(!!results?.length);
  };

  /** Function to close backdrop.
   *
   */
  const handleCloseBackdrop = () => {
    setShowResults(false);
  };

  /** Function to handle search.
   *
   */
  const handleSearch = () => {
    setAmiibosFiltered(results);
    push("/results");
    setShowResults(false);
  };

  return (
    <div className="SearchAmiibos">
      <SearchBar
        placeholder="Buscar amiibo"
        onChange={searchInputHandler}
        onSearch={handleSearch}
      >
        {showResults ? (
          <>
            {results?.slice(0, 4).map((amiibo, index) => {
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

            {results?.length ? (
              <div className="SearchAmiibos__search">
                <div
                  className="SearchAmiibos__search__link"
                  onClick={handleSearch}
                >
                  {`Buscar todos "${searchText}"`}
                </div>
              </div>
            ) : null}
          </>
        ) : null}
      </SearchBar>

      <Backdrop opened={showResults} onClick={handleCloseBackdrop} />
    </div>
  );
};

SearchAmiibos.defaultProps = {};

export default SearchAmiibos;
