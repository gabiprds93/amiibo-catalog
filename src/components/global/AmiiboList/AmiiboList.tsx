// Components
import AmiiboItem from "../AmiiboItem/AmiiboItem";
// Services
import { useFetchAmiibos } from "../../../services/amiibos/amiibos.service.hooks";
// Types
import { AmiiboListProps as Props } from "./AmiiboList.types";

const AmiiboList: React.FC<Props> = (props) => {
  const { data: amiibos } = useFetchAmiibos();

  return (
    <div className="AmiiboList">
      <div className="AmiiboList__content">
        {amiibos?.map((amiibo, index) => {
          return <AmiiboItem key={index} item={amiibo} />;
        })}
      </div>
    </div>
  );
};

AmiiboList.defaultProps = {};

export default AmiiboList;
