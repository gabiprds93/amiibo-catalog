// Components
import CategoriesMenu from "../../home/CategoriesMenu/CategoriesMenu";
import SearchAmiibos from "../SearchAmiibos/SearchAmiibos";
// Types
import { NavbarProps as Props } from "./Navbar.types";

import logoDesktop from "../../../assets/images/logo-amiibo-desktop.png";

const Navbar: React.FC<Props> = (props) => {
  return (
    <div className="Navbar">
      <div className="Navbar__wrapper">
        <picture className="Navbar__logo">
          <img src={logoDesktop} alt="Logo Amiibo" />
        </picture>

        <SearchAmiibos />

        <CategoriesMenu />
      </div>
    </div>
  );
};

Navbar.defaultProps = {};

export default Navbar;
