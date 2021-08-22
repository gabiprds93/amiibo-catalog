import { ChangeEvent } from "react";

// Types
import { FilterItemProps as Props } from "./FilterItem.types";

const FilterItem: React.FC<Props> = (props) => {
  const { options, filterBy, filterType, checkedValue, onChange } = props;

  /** Function to handle change option.
   *
   * @param {ChangeEvent<HTMLInputElement>} event The change event of the input
   */
  const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    onChange(value, filterType);
  };

  return (
    <div className="FilterItem">
      <p className="FilterItem__filter-by">{filterBy}</p>

      <div className="FilterItem__content">
        {options.map((option) => {
          const { key, name } = option;

          return (
            <label key={key} className="FilterItem__content__label">
              <input
                type="radio"
                name="filters"
                value={name}
                checked={checkedValue === name}
                onChange={handleChange}
              />

              <span>{name}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
};

FilterItem.defaultProps = {};

export default FilterItem;
