// Types

/** Utility to sort ascending.
 *
 * @param {any[]} list The list of the items to sort ascending
 * @returns {any[]} Returns the list of items sorted
 */
export const sortAscUtility = (list: any[]) => {
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
 * @param {any[]} list The list of the items to sort descending
 * @returns {any[]} Returns the list of items sorted
 */
export const sortDescUtility = (list: any[]) => {
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

/** Utilily for transform local storage from string to JSON format
 *
 * @param {string} key Key to get item
 * @returns Returns the parsed value
 */
export const getLocalStorage = (key: string) => {
  const storedString = localStorage.getItem(key);
  const stored = storedString ? JSON.parse(storedString) : undefined;

  return stored;
};
