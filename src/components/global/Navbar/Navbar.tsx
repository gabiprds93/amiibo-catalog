import { Link } from "react-router-dom";

// Components
import CategoriesMenu from "../../home/CategoriesMenu/CategoriesMenu";
import SearchAmiibos from "../SearchAmiibos/SearchAmiibos";
// Types
import { NavbarProps as Props } from "./Navbar.types";

import logoDesktop from "../../../assets/images/logo-amiibo-desktop.png";
import heartSolidSVG from "../../../assets/images/heart-solid.svg";

const Navbar: React.FC<Props> = (props) => {
  return (
    <div className="Navbar">
      <div className="Navbar__content">
        <Link to="/" className="Navbar__logo">
          <picture className="Navbar__logo__icon">
            <img src={logoDesktop} alt="Logo Amiibo" />
          </picture>
        </Link>

        <SearchAmiibos />

        <Link to="/favorites" className="Navbar__favorites">
          <span className="Navbar__favorites__text">Favoritos</span>

          <picture className="Navbar__favorites__icon">
            <img src={heartSolidSVG} alt="Icono corazón solido" />
          </picture>
        </Link>

        <CategoriesMenu />
      </div>
    </div>
  );
};

Navbar.defaultProps = {};

export default Navbar;
