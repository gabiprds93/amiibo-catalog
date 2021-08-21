// Amiibos services
import axios from "axios";

// Types
import { Params } from "./amiibos.service.types";
import { Amiibo } from "../../types/amiibos.types";

const baseURL = "https://www.amiiboapi.com/api/amiibo/";

/** Function to fetch the amiibos data.
 *
 * @param {Params} params Params for filter the data
 * @returns {Promise<Amiibo[]>} Returns a promise with the amiibos data
 */
export const fetchAmiibos = async (
  params?: Params
): Promise<Amiibo[] | undefined> => {
  try {
    const { data } = await axios.get(baseURL, { params });

    return data.amiibo;
  } catch (error) {
    throw new Error(error.message);
  }
};
