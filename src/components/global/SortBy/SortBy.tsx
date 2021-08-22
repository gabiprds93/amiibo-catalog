import { useState } from "react";

// Utils
import { sortAscUtility, sortDescUtility } from "../../../utils/common.util";
// Contexts
import useAmiibos from "../../../contexts/amiibos/amiibos.hooks";
// Types
import { SortByProps as Props, SortType } from "./SortBy.types";

const SortBy: React.FC<Props> = (props) => {
  const [sortType, setsortType] = useState<SortType>();
  const { currentAmiiboList, setCurrentAmiiboList } = useAmiibos();

  const amiiboList = currentAmiiboList ? [...currentAmiiboList] : [];
  const activeClass = "SortBy__button--active";
  const isAsc = sortType === "ASC";
  const isDesc = sortType === "DESC";

  /** Function to handle sort ascending.
   *
   */
  const handleSortAsc = () => {
    const sortAscList = sortAscUtility(amiiboList);

    setCurrentAmiiboList(sortAscList);
    setsortType("ASC");
  };

  /** Function to handle sort descending.
   *
   */
  const handleSortDesc = () => {
    const sortDescList = sortDescUtility(amiiboList);

    setCurrentAmiiboList(sortDescList);
    setsortType("DESC");
  };

  return (
    <div className="SortBy">
      <span className="SortBy__text">Ordenar por:</span>

      <input
        type="button"
        value="A - Z"
        onClick={handleSortAsc}
        className={`SortBy__button ${isAsc ? activeClass : ""}`}
      />

      <input
        type="button"
        value="Z - A"
        onClick={handleSortDesc}
        className={`SortBy__button ${isDesc ? activeClass : ""}`}
      />
    </div>
  );
};

SortBy.defaultProps = {};

export default SortBy;
