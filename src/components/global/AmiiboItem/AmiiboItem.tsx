// Types
import { AmiiboItemProps as Props } from "./AmiiboItem.types";

const AmiiboItem: React.FC<Props> = (props) => {
  const { item } = props;

  const { name, image } = item;

  return (
    <div className="AmiiboItem">
      <div className="AmiiboItem__image">
        <img src={image} alt={`Amiibo ${name}`} />
      </div>

      <p className="AmiiboItem__name">{name}</p>
    </div>
  );
};

AmiiboItem.defaultProps = {};

export default AmiiboItem;
