// Interfaces and types from context Favorites
import { Dispatch, ReactNode, SetStateAction } from "react";

// Types
import { Amiibo } from "../../types/amiibos.types";

// Provider Props
export interface FavoritesProviderProps {
  children: ReactNode;
}

// Provider value

/** Favorites provider value.
 *
 * @interface AmiibosProviderValue
 * @property {Amiibo[]} favorites The array of favorite amiibos
 * @property {Dispatch<SetStateAction<Amiibo[]>>} setFavorites For change state of the favorites
 */
export interface FavoritesProviderValue {
  favorites: Amiibo[];
  setFavorites: Dispatch<SetStateAction<Amiibo[]>>;
}
