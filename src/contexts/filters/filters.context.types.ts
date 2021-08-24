// Interfaces and types from context Filters
import { Dispatch, ReactNode, SetStateAction } from "react";

// Provider Props
export interface FiltersProviderProps {
  children: ReactNode;
}

// Provider value

/** Filters provider value.
 *
 * @interface FiltersProviderValue
 * @property {string} selectedFilter The selected filter
 * @property {Dispatch<SetStateAction<string>>} setSelectedFilter For change state of the selectedFilter
 * @property {boolean} haveFilters If have filters or not
 * @property {Dispatch<SetStateAction<boolean>>} setHaveFilters For change state of the haveFilters
 */
export interface FiltersProviderValue {
  selectedFilter: string;
  setSelectedFilter: Dispatch<SetStateAction<string>>;
  haveFilters: boolean;
  setHaveFilters: Dispatch<SetStateAction<boolean>>;
}
