// Types
import { BackdropProps as Props } from "./Backdrop.types";

const Backdrop: React.FC<Props> = (props) => {
  const { opened, onClick } = props;

  if (!opened) return null;

  return <div className="Backdrop" onClick={onClick} />;
};

Backdrop.defaultProps = {};

export default Backdrop;
