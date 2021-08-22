// Amiibos services
import axios from "axios";

// Types
import { Params } from "./amiibos.service.types";
import { Amiibo, KeyValues } from "../../types/amiibos.types";

const baseURL = "https://www.amiiboapi.com/api";

/** Function to fetch the amiibos data.
 *
 * @param {Params} params Params for filter the data
 * @returns {Promise<Amiibo[]>} Returns a promise with the amiibos data
 */
export const fetchAmiibos = async (
  params?: Params
): Promise<Amiibo[] | undefined> => {
  try {
    const { data } = await axios.get(`${baseURL}/amiibo/`, { params });

    return data.amiibo;
  } catch (error) {
    throw new Error(error.message);
  }
};

/** Function to fetch the amiibos characters.
 *
 * @returns {Promise<KeyValues[]>} Returns a promise with the amiibos characters
 */
export const fetchAmiiboCharacters = async (): Promise<
  KeyValues[] | undefined
> => {
  try {
    const { data } = await axios.get(`${baseURL}/character/`);

    return data.amiibo;
  } catch (error) {
    throw new Error(error.message);
  }
};

/** Function to fetch the amiibos types.
 *
 * @returns {Promise<KeyValues[]>} Returns a promise with the key values of the amiibo types
 */
export const fetchAmiiboTypes = async (): Promise<KeyValues[] | undefined> => {
  try {
    const { data } = await axios.get(`${baseURL}/type/`);

    return data.amiibo;
  } catch (error) {
    throw new Error(error.message);
  }
};
