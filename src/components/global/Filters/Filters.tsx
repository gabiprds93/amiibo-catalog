// Components
import FilterList from "../FilterList/FilterList";
// Contexts
import useAmiibos from "../../../contexts/amiibos/amiibos.hooks";
import useFilters from "../../../contexts/filters/filters.hooks";
// Services
import { fetchAmiibos } from "../../../services/amiibos/amiibos.service";
// Types
import { FiltersProps as Props } from "./Filters.types";

const Filters: React.FC<Props> = (props) => {
  const { setCurrentAmiiboList } = useAmiibos();
  const { selectedFilter, setSelectedFilter, haveFilters } = useFilters();
  const { setHaveFilters } = useFilters();

  /** Function to handle when filters are clear.
   *
   */
  const handleClearFilter = async () => {
    const amiibosList = await fetchAmiibos();
    setCurrentAmiiboList(amiibosList);
    setHaveFilters(false);
    setSelectedFilter("");
  };

  return (
    <div className="Filters">
      <div className="Filters__content">
        <p className="Filters__title">Filtros</p>

        {haveFilters ? (
          <input
            type="button"
            value="Quitar filtro"
            onClick={handleClearFilter}
            className="Filters__button"
          />
        ) : null}

        <FilterList
          checkedValue={selectedFilter}
          setCheckedValue={setSelectedFilter}
          setHaveFilter={setHaveFilters}
        />
      </div>
    </div>
  );
};

Filters.defaultProps = {};

export default Filters;
