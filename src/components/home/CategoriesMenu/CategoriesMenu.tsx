// Types
import { CategoriesMenuProps as Props } from "./CategoriesMenu.types";

import barsSVG from "../../../assets/images/bars-solid.svg";

const CategoriesMenu: React.FC<Props> = (props) => {
  return (
    <div className="CategoriesMenu">
      <span className="CategoriesMenu__text">Categorias</span>

      <div className="CategoriesMenu__icon">
        <img src={barsSVG} alt="Menú de barras" />
      </div>
    </div>
  );
};

CategoriesMenu.defaultProps = {};

export default CategoriesMenu;
