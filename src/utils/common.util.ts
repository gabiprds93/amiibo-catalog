// Types
import { Amiibo } from "../types/amiibos.types";

/** Utility to sort ascending.
 *
 * @param {Amiibo[]} list The list of the amiibos to sort ascending
 * @returns {Amiibo[]} Returns the list of amiibos sorted
 */
export const sortAscUtility = (list: Amiibo[]) => {
  list.sort((item, nextItem) => {
    if (item.name > nextItem.name) {
      return 1;
    }

    if (item.name < nextItem.name) {
      return -1;
    }

    return 0;
  });

  return list;
};

/** Utility to sort descending.
 *
 * @param {Amiibo[]} list The list of the amiibos to sort descending
 * @returns {Amiibo[]} Returns the list of amiibos sorted
 */
export const sortDescUtility = (list: Amiibo[]) => {
  list.sort((item, nextItem) => {
    if (item.name < nextItem.name) {
      return 1;
    }

    if (item.name > nextItem.name) {
      return -1;
    }

    return 0;
  });

  return list;
};
