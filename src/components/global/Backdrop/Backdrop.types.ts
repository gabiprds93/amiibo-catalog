// Interfaces and types from component Backdrop

// Component Props

/** Backdrop props.
 *
 * @interface BackdropProps
 * @property {boolean} opened If the backdrop will open
 * @property {fucntion} onClick Function that fires when the backdrop is clicked
 * @property {boolean} blockScroll If scroll is blocked or not
 */
export interface BackdropProps {
  opened: boolean;
  onClick: () => void;
  blockScroll?: boolean;
}
