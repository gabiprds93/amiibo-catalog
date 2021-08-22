import { useHistory } from "react-router-dom";

// Components
import Drawer from "../Drawer/Drawer";
// Helpers
import { getCategoriesHelper } from "./CategoriesDrawer.helpers";
// Contexts
import useTheme from "../../../contexts/theme/theme.hooks";
// Services
import { useFetchAmiibos } from "../../../services/amiibos/amiibos.service.hooks";
// Types
import { CategoriesDrawerProps as Props } from "./CategoriesDrawer.types";

import closeSVG from "../../../assets/images/times-solid.svg";
import closeWhiteSVG from "../../../assets/images/times-solid-white.svg";

const CategoriesDrawer: React.FC<Props> = (props) => {
  const { opened, onClose } = props;
  const { isDarkMode } = useTheme();
  const { data: amiibos } = useFetchAmiibos();
  const { push } = useHistory();

  const amiiboSeries = amiibos?.map((amiibo) => amiibo.amiiboSeries);
  const categories = getCategoriesHelper(amiiboSeries);

  /** Function to redirect to categories page.
   *
   * @param {string} category The category of the amiibo
   */
  const handleClickCategory = (category: string) => {
    push(`/categories/${category}`);
    onClose();
  };

  if (!opened) return null;

  return (
    <div className="CategoriesDrawer">
      <Drawer opened={opened} backdrop onClose={onClose}>
        <div className="CategoriesDrawer__header">
          <p className="CategoriesDrawer__header__title">Categorías</p>

          <picture className="CategoriesDrawer__header__icon" onClick={onClose}>
            <img
              src={isDarkMode ? closeWhiteSVG : closeSVG}
              alt="Icono cerrar"
            />
          </picture>
        </div>

        <ul className="CategoriesDrawer__list">
          {categories.map((category, index) => {
            return (
              <li
                key={index}
                className="CategoriesDrawer__list__item"
                onClick={() => handleClickCategory(category)}
              >
                {category}
              </li>
            );
          })}
        </ul>
      </Drawer>
    </div>
  );
};

CategoriesDrawer.defaultProps = {};

export default CategoriesDrawer;
