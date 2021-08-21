// Interfaces and types from component AmiiboList

// Types
import { Amiibo } from "../../../types/amiibos.types";

// Component Props

/** Amiibo list props.
 *
 * @interface AmiiboListProps
 * @property {string} list The list of items
 */
export interface AmiiboListProps {
  list?: Amiibo[];
}
