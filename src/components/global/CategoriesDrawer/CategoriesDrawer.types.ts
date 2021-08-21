// Interfaces and types from component CategoriesDrawer

// Component Props

/** Categories drawer props.
 *
 * @interface CategoriesDrawerProps
 * @property {boolean} opened If the drawer will open
 * @property {function} onClose Function that fires when the drawer was closed
 */
export interface CategoriesDrawerProps {
  opened: boolean;
  onClose: () => void;
}
