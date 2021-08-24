// Interfaces and types from component FiltersDrawer

// Component Props

/** Filters drawer props.
 *
 * @interface FiltersDrawerProps
 * @property {boolean} opened If the drawer will open
 * @property {function} onClose Function that fires when the drawer was closed
 */
export interface FiltersDrawerProps {
  opened: boolean;
  onClose: () => void;
}
