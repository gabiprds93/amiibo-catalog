import { useContext } from "react";

// Contexts
import { FiltersContext } from "./filters.context";
// Types
import { FiltersProviderValue } from "./filters.context.types";

const useFilters = () => {
  const context = useContext<FiltersProviderValue>(FiltersContext);
  if (typeof context === "undefined") {
    throw new Error("useFilters must be used within a FiltersProvider");
  }
  return context;
};

export default useFilters;
