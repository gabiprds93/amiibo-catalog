// Interfaces and types from component FilterItem

// Types
import { KeyValues } from "../../../../types/amiibos.types";

// Component Props

/** Key values information.
 *
 * @interface export interface FilterItemProps {
 * @property {KeyValues[]} options The options of the filter item
 * @property {string} filterBy The filter by of the filter item
 * @property {string} filterType The filter type of the filter item
 * @property {string} checkedValue The checked value of the filter item
 * @property {function} onChange Function that fires when option change
 */
export interface FilterItemProps {
  options: KeyValues[];
  filterBy: string;
  filterType: string;
  checkedValue: string;
  onChange: (value: string, filterType: string) => void;
}
