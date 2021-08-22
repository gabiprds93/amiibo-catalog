// Interfaces and types from context Amiibos
import { Dispatch, ReactNode } from "react";

// Types
import { Amiibo } from "../../types/amiibos.types";

// Provider Props
export interface AmiibosProviderProps {
  children: ReactNode;
}

// Provider value

/** Amiibos provider value.
 *
 * @interface AmiibosProviderValue
 * @property {Amiibo[]} amiibosFiltered The array of amiibos filtered
 * @property {Dispatch<React.SetStateAction<Amiibo[]>>} setAmiibosFiltered For change state of the amiibosFiltered
 * @property {Amiibo[]} currentAmiiboList The array of current list of amiibos filtered
 * @property {Dispatch<React.SetStateAction<Amiibo[]>>} setCurrentAmiiboList For change state of the currentAmiiboList
 */
export interface AmiibosProviderValue {
  amiibosFiltered: Amiibo[] | undefined;
  setAmiibosFiltered: Dispatch<React.SetStateAction<Amiibo[] | undefined>>;
  currentAmiiboList: Amiibo[] | undefined;
  setCurrentAmiiboList: Dispatch<React.SetStateAction<Amiibo[] | undefined>>;
}
