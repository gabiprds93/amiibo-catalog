import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

// Components
import CategoriesMenu from "../CategoriesMenu/CategoriesMenu";
import SearchAmiibos from "../SearchAmiibos/SearchAmiibos";
// Types
import { NavbarProps as Props } from "./Navbar.types";
// Configs
import CONSTANTS from "../../../configs/constants";

import logoDesktop from "../../../assets/images/logo-amiibo-desktop.png";
import logoMobile from "../../../assets/images/logo-amiibo-mobile.png";
import heartSolidSVG from "../../../assets/images/heart-solid.svg";

const { BREAKPOINTS } = CONSTANTS;

const Navbar: React.FC<Props> = (props) => {
  const isTablet = useMediaQuery({
    query: `(min-width: ${BREAKPOINTS.tablet + 1}px)`,
  });

  return (
    <div className="Navbar">
      <div className="Navbar__content">
        <Link to="/" className="Navbar__logo">
          <picture className="Navbar__logo__icon">
            <img src={isTablet ? logoDesktop : logoMobile} alt="Logo Amiibo" />
          </picture>
        </Link>

        <SearchAmiibos />

        <div className="Navbar__right">
          <Link to="/favorites" className="Navbar__favorites">
            <span className="Navbar__favorites__text">Favoritos</span>

            <picture className="Navbar__favorites__icon">
              <img src={heartSolidSVG} alt="Icono corazón solido" />
            </picture>
          </Link>

          <CategoriesMenu />
        </div>
      </div>
    </div>
  );
};

Navbar.defaultProps = {};

export default Navbar;
