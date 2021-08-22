import { useEffect } from "react";

// Components
import AmiiboList from "../../global/AmiiboList/AmiiboList";
import InfoBar from "../../global/InfoBar/InfoBar";
import Navbar from "../../global/Navbar/Navbar";
// Contexts
import useFavorites from "../../../contexts/favorites/favorites.hooks";
import useAmiibos from "../../../contexts/amiibos/amiibos.hooks";
// Types
import { FavoritesProps as Props } from "./Favorites.types";

const Favorites: React.FC<Props> = (props) => {
  const { favorites } = useFavorites();
  const { currentAmiiboList, setCurrentAmiiboList } = useAmiibos();

  useEffect(() => {
    if (favorites) setCurrentAmiiboList(favorites);
  }, [favorites, setCurrentAmiiboList]);

  return (
    <div className="Favorites">
      <header className="Favorites__header">
        <Navbar />
      </header>

      <main className="Favorites__main">
        <InfoBar title="Favoritos" />
        <AmiiboList list={currentAmiiboList} />
      </main>

      <footer className="Favorites__footer" />
    </div>
  );
};

Favorites.defaultProps = {};

export default Favorites;
