import { useEffect, useState } from "react";

// Components
import FilterItem from "./FilterItem/FilterItem";
// Utils
import { sortAscUtility } from "../../../utils/common.util";
// Contexts
import useAmiibos from "../../../contexts/amiibos/amiibos.hooks";
// Services
import { useFetchAmiiboTypes } from "../../../services/amiibos/amiibos.service.hooks";
import { useFetchAmiiboCharacters } from "../../../services/amiibos/amiibos.service.hooks";
import { fetchAmiibos } from "../../../services/amiibos/amiibos.service";
// Types
import { KeyValues } from "../../../types/amiibos.types";
import { FiltersProps as Props } from "./Filters.types";

const Filters: React.FC<Props> = (props) => {
  const [amiiboTypes, setamiiboTypes] = useState<KeyValues[]>();
  const [amiiboCharacters, setamiiboCharacters] = useState<KeyValues[]>();
  const [haveFilter, setHaveFilter] = useState(false);
  const [checkedValue, setcheckedValue] = useState("");
  const { setCurrentAmiiboList } = useAmiibos();
  const { data: types } = useFetchAmiiboTypes();
  const { data: characters } = useFetchAmiiboCharacters();

  /** Function to handle change option.
   *
   * @param {string} value The value of the checked option
   * @param {string} filterType The type of the filter
   */
  const handleChangeOption = async (value: string, filterType: string) => {
    setcheckedValue(value);
    const amiibosResult = await fetchAmiibos({ [filterType]: value });
    setHaveFilter(true);
    setCurrentAmiiboList(amiibosResult);
  };

  /** Function to handle when filters are clear.
   *
   */
  const handleClearFilter = async () => {
    const amiibosList = await fetchAmiibos();
    setCurrentAmiiboList(amiibosList);
    setHaveFilter(false);
    setcheckedValue("");
  };

  useEffect(() => {
    if (types) {
      const sortedTypes = sortAscUtility(types);
      setamiiboTypes(sortedTypes);
    }
  }, [types]);

  useEffect(() => {
    if (characters) {
      const sortedCharacters = sortAscUtility(characters);
      setamiiboCharacters(sortedCharacters);
    }
  }, [characters]);

  return (
    <div className="Filters">
      <div className="Filters__content">
        <p className="Filters__title">Filtros</p>

        {haveFilter ? (
          <input
            type="button"
            value="Quitar filtro"
            onClick={handleClearFilter}
            className="Filters__button"
          />
        ) : null}

        <div>
          {amiiboTypes ? (
            <FilterItem
              options={amiiboTypes}
              filterBy="Tipo"
              filterType="type"
              checkedValue={checkedValue}
              onChange={handleChangeOption}
            />
          ) : null}

          {amiiboCharacters ? (
            <FilterItem
              options={amiiboCharacters}
              filterBy="Personaje"
              filterType="character"
              checkedValue={checkedValue}
              onChange={handleChangeOption}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

Filters.defaultProps = {};

export default Filters;
