// Categories drawer helper functions and data

/** Helper to get categories.
 *
 * @param {string[]} amiiboSeries Array of the amiiboSeries
 * @returns {string[]} Returns the array of the categories
 */
export const getCategoriesHelper = (amiiboSeries?: string[]) => {
  let series: string[] = [];

  amiiboSeries?.forEach((category) => {
    if (!series?.includes(category)) {
      series.push(category);
    }
  });

  return series;
};
