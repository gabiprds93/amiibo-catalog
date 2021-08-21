import { useHistory } from "react-router-dom";

// Components
import Drawer from "../Drawer/Drawer";
// Helpers
import { getCategoriesHelper } from "./CategoriesDrawer.helpers";
// Services
import { useFetchAmiibos } from "../../../services/amiibos/amiibos.service.hooks";
// Types
import { CategoriesDrawerProps as Props } from "./CategoriesDrawer.types";

const CategoriesDrawer: React.FC<Props> = (props) => {
  const { opened, onClose } = props;
  const { data: amiibos } = useFetchAmiibos();
  const { push } = useHistory();

  const amiiboSeries = amiibos?.map((amiibo) => amiibo.amiiboSeries);
  const categories = getCategoriesHelper(amiiboSeries);

   /** Function to rediret to categories page.
   *
   * @param {string} category The category of the amiibo
   */
  const handleClickCategory = (category: string) => {
    push(`/categories/${category}`);
  };

  if (!opened) return null;

  return (
    <div className="CategoriesDrawer">
      <Drawer opened={opened} backdrop onClose={onClose}>
        <p className="CategoriesDrawer__title">Categorías</p>

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
