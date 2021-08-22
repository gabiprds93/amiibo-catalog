import { useContext } from "react";

// Context
import { FavoritesContext } from "./favorites.context";
// Types
import { FavoritesProviderValue } from "./favorites.context.types";

const useFavorites = () => {
  const context = useContext<FavoritesProviderValue>(FavoritesContext);

  if (typeof context === "undefined") {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }

  return context;
};

export default useFavorites;
