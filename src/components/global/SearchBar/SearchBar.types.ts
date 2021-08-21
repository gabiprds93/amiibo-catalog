// Interfaces and types from component SearchBar

// Component Props

/** Search bar props.
 *
 * @interface SearchBarProps
 * @property {string} placeholder The placeholder of the input
 * @property {fucntion} onChange Function that fires when the input text changes
 */
export interface SearchBarProps {
  placeholder: string;
  onChange: (value: string) => void;
}
