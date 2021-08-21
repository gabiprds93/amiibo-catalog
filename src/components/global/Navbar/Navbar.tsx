// Components
import SearchBar from "../SearchBar/SearchBar";
import CategoriesMenu from "../../home/CategoriesMenu/CategoriesMenu";
// Types
import { NavbarProps as Props } from "./Navbar.types";

import logoDesktop from "../../../assets/images/logo-amiibo-desktop.png";

const Navbar: React.FC<Props> = (props) => {
  return (
    <div className="Navbar">
      <div className="Navbar__wrapper">
        <div className="Navbar__logo">
          <img src={logoDesktop} alt="Logo Amiibo" />
        </div>

        <SearchBar />

        <CategoriesMenu />
      </div>
    </div>
  );
};

Navbar.defaultProps = {};

export default Navbar;
