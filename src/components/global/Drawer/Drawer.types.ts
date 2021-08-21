// Interfaces and types from component Drawer

// Component Props

/** Drawer props.
 *
 * @interface DrawerProps
 * @property {boolean} opened If the drawer will open
 * @property {function} onClose Function that fires when the drawer was closed
 * @property {boolean} backdrop It the drawer have a backdrop or not
 */
export interface DrawerProps {
  opened: boolean;
  onClose: () => void;
  backdrop?: boolean;
}
