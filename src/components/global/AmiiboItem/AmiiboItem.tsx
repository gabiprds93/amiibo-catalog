import { useEffect, useState } from "react";

// Contexts
import useFavorites from "../../../contexts/favorites/favorites.hooks";
// Types
import { AmiiboItemProps as Props } from "./AmiiboItem.types";
import { Amiibo } from "../../../types/amiibos.types";

import heartRegularSVG from "../../../assets/images/heart-regular.svg";
import heartSolidSVG from "../../../assets/images/heart-solid.svg";

const AmiiboItem: React.FC<Props> = (props) => {
  const { item } = props;
  const [isFavorite, setIsFavorite] = useState(false);
  const { favorites, setFavorites } = useFavorites();

  const { name, image, amiiboSeries } = item;
  const amiiboId = `${name}-${amiiboSeries}`;

  /**  Function to handle click of favorite pseudo button.
   *
   * @param {React.MouseEvent<HTMLDivElement, MouseEvent>} event Event that is triggered when there is a click
   */
  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    let favoriteAmiibos: Amiibo[] | undefined;

    if (isFavorite) {
      favoriteAmiibos = favorites?.filter((favorite) => {
        const favoriteId = `${favorite.name}-${favorite.amiiboSeries}`;

        return favoriteId !== amiiboId;
      });
    } else {
      favoriteAmiibos = favorites.length ? favorites.concat(item) : [item];
    }

    setFavorites(favoriteAmiibos);
    localStorage.setItem("amiibo-favorites", JSON.stringify(favoriteAmiibos));
  };

  useEffect(() => {
    const findFavorite = favorites?.find((favorite) => {
      const favoriteId = `${favorite.name}-${favorite.amiiboSeries}`;
      return favoriteId === amiiboId;
    });

    setIsFavorite(!!findFavorite);
  }, [amiiboId, favorites]);

  return (
    <div className="AmiiboItem">
      <picture className="AmiiboItem__icon" onClick={handleClick}>
        {isFavorite ? (
          <img src={heartSolidSVG} alt="Icono corazón regular" />
        ) : (
          <img src={heartRegularSVG} alt="Icono corazón solido" />
        )}
      </picture>

      <picture className="AmiiboItem__image">
        <img src={image} alt={`Amiibo ${name}`} />
      </picture>

      <p className="AmiiboItem__name">{name}</p>
    </div>
  );
};

AmiiboItem.defaultProps = {};

export default AmiiboItem;
