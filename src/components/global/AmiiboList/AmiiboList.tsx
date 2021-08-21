// Components
import AmiiboItem from "../AmiiboItem/AmiiboItem";
// Types
import { AmiiboListProps as Props } from "./AmiiboList.types";

const AmiiboList: React.FC<Props> = (props) => {
  const { list } = props;

  return (
    <div className="AmiiboList">
      <div className="AmiiboList__content">
        {list?.map((item, index) => {
          return <AmiiboItem key={index} item={item} />;
        })}
      </div>
    </div>
  );
};

AmiiboList.defaultProps = {};

export default AmiiboList;
