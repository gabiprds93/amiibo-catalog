// Components
import Drawer from "../Drawer/Drawer";
import FilterList from "../FilterList/FilterList";
import Button from "../Button/Button";
// Contexts
import useTheme from "../../../contexts/theme/theme.hooks";
import useFilters from "../../../contexts/filters/filters.hooks";
import useAmiibos from "../../../contexts/amiibos/amiibos.hooks";
// Services
import { fetchAmiibos } from "../../../services/amiibos/amiibos.service";
// Types
import { FiltersDrawerProps as Props } from "./FiltersDrawer.types";

import closeSVG from "../../../assets/images/times-solid.svg";
import closeWhiteSVG from "../../../assets/images/times-solid-white.svg";

const FiltersDrawer: React.FC<Props> = (props) => {
  const { opened, onClose } = props;
  const { isDarkMode } = useTheme();
  const { selectedFilter, setSelectedFilter, haveFilters } = useFilters();
  const { setHaveFilters } = useFilters();
  const { setCurrentAmiiboList } = useAmiibos();

  /** Function to handle when filters are clear.
   *
   */
  const handleClearFilter = async () => {
    const amiibosList = await fetchAmiibos();
    setCurrentAmiiboList(amiibosList);
    setHaveFilters(false);
    setSelectedFilter("");
    onClose();
  };

  return (
    <div className="FiltersDrawer">
      <Drawer opened={opened} backdrop onClose={onClose}>
        <div className="FiltersDrawer__header">
          <p className="FiltersDrawer__header__title">Filtros</p>

          <picture className="FiltersDrawer__header__icon" onClick={onClose}>
            <img
              src={isDarkMode ? closeWhiteSVG : closeSVG}
              alt="Icono cerrar"
            />
          </picture>
        </div>

        <div className="FiltersDrawer__body">
          {haveFilters ? (
            <Button
              type="button"
              value="Quitar filtro"
              onClick={handleClearFilter}
            />
          ) : null}

          <FilterList
            checkedValue={selectedFilter}
            setCheckedValue={setSelectedFilter}
            setHaveFilter={setHaveFilters}
          />
        </div>
      </Drawer>
    </div>
  );
};

FiltersDrawer.defaultProps = {};

export default FiltersDrawer;
