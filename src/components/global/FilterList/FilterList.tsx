import { useEffect, useState } from "react";

// Components
import FilterItem from "../Filters/FilterItem/FilterItem";
// Utils
import { sortAscUtility } from "../../../utils/common.util";
// Contexts
import useAmiibos from "../../../contexts/amiibos/amiibos.hooks";
// Services
import { useFetchAmiiboCharacters } from "../../../services/amiibos/amiibos.service.hooks";
import { useFetchAmiiboTypes } from "../../../services/amiibos/amiibos.service.hooks";
import { fetchAmiibos } from "../../../services/amiibos/amiibos.service";
// Types
import { FilterListProps as Props } from "./FilterList.types";
import { KeyValues } from "../../../types/amiibos.types";

const FilterList: React.FC<Props> = (props) => {
  const { checkedValue, setCheckedValue, setHaveFilter } = props;
  const [amiiboTypes, setAmiiboTypes] = useState<KeyValues[]>();
  const [amiiboCharacters, setAmiiboCharacters] = useState<KeyValues[]>();
  const { setCurrentAmiiboList } = useAmiibos();
  const { data: types } = useFetchAmiiboTypes();
  const { data: characters } = useFetchAmiiboCharacters();

  /** Function to handle change option.
   *
   * @param {string} value The value of the checked option
   * @param {string} filterType The type of the filter
   */
  const handleChangeOption = async (value: string, filterType: string) => {
    setCheckedValue(value);
    const amiibosResult = await fetchAmiibos({ [filterType]: value });
    setHaveFilter(true);
    setCurrentAmiiboList(amiibosResult);
  };

  useEffect(() => {
    if (types) {
      const sortedTypes = sortAscUtility(types);
      setAmiiboTypes(sortedTypes);
    }
  }, [types]);

  useEffect(() => {
    if (characters) {
      const sortedCharacters = sortAscUtility(characters);
      setAmiiboCharacters(sortedCharacters);
    }
  }, [characters]);

  return (
    <div className="FilterList">
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
  );
};

FilterList.defaultProps = {};

export default FilterList;
