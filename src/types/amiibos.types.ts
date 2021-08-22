// Amiibo entity types and interface

/** Amiibo information.
 *
 * @interface Amiibo
 * @property {string} amiiboSeries The name of the amiibo series
 * @property {string} character The name of the character
 * @property {string} gameSeries The name of the game series
 * @property {string} image The image of the amiibo
 * @property {string} name The name of the amiibo
 * @property {string} type The type of the amiibo
 */
export interface Amiibo {
  amiiboSeries: string;
  character: string;
  gameSeries: string;
  image: string;
  name: string;
  type: string;
}

/** Key values information.
 *
 * @interface KeyValues
 * @property {string} key The key of the value
 * @property {string} name The name of the value
 */
export interface KeyValues {
  key: string;
  name: string;
}
