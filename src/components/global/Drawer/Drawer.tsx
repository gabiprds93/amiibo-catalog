// Componets
import Backdrop from "../Backdrop/Backdrop";
// Types
import { DrawerProps as Props } from "./Drawer.types";

const Drawer: React.FC<Props> = (props) => {
  const { opened, onClose, backdrop, children } = props;

  if (!opened) return null;

  return (
    <>
      {opened ? (
        <Backdrop opened={!!backdrop} onClick={onClose} blockScroll />
      ) : null}

      <div className="Drawer">
        <div className="Drawer__wrapper">{children}</div>
      </div>
    </>
  );
};

Drawer.defaultProps = {};

export default Drawer;
