// Components
import SortBy from "../SortBy/SortBy";
// Types
import { InfoBarProps as Props } from "./InfoBar.types";

const InfoBar: React.FC<Props> = (props) => {
  const { title } = props;

  return (
    <div className="InfoBar">
      <div className="InfoBar__grid">
        <h1 className="InfoBar__grid__title">{title}</h1>

        <SortBy />
      </div>
    </div>
  );
};

InfoBar.defaultProps = {};

export default InfoBar;
