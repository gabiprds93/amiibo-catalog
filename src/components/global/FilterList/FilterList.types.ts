// Interfaces and types from component FilterList
import { SetStateAction } from "react";

// Component Props

/** Filter list props.
 *
 * @interface FilterListProps
 * @property {boolean} checkedValue The checked value of filters
 * @property {function} setCheckedValue Function to change checkedValue state
 * @property {function} setHaveFilter Function to change haveFilter state
 */
export interface FilterListProps {
  checkedValue: string;
  setCheckedValue: (value: SetStateAction<string>) => void;
  setHaveFilter: (value: SetStateAction<boolean>) => void;
}
