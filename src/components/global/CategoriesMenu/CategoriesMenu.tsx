import { useState } from "react";

// Component
import CategoriesDrawer from "../CategoriesDrawer/CategoriesDrawer";
// Types
import { CategoriesMenuProps as Props } from "./CategoriesMenu.types";

import barsSVG from "../../../assets/images/bars-solid.svg";

const CategoriesMenu: React.FC<Props> = (props) => {
  const [drawerOpened, setDrawerOpened] = useState(false);

  /** Function to handle categories side drawer
   *
   */
  const drawerHandler = () => {
    setDrawerOpened((prev) => !prev);
  };

  return (
    <div className="CategoriesMenu">
      <div onClick={drawerHandler} className="CategoriesMenu__wrapper">
        <span className="CategoriesMenu__text">Categorías</span>

        <div className="CategoriesMenu__icon">
          <img src={barsSVG} alt="Menú de barras" />
        </div>
      </div>

      <CategoriesDrawer opened={drawerOpened} onClose={drawerHandler} />
    </div>
  );
};

CategoriesMenu.defaultProps = {};

export default CategoriesMenu;
