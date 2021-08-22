// Amiibos hooks
import { useQuery } from "react-query";

// Services
import { fetchAmiiboCharacters, fetchAmiibos } from "./amiibos.service";
import { fetchAmiiboTypes } from "./amiibos.service";
// Types
import { Params } from "./amiibos.service.types";

/** Hook to get the amiibos information.
 *
 * @param {Params} params Params for filter the data
 * @returns {UseQueryResult} Returns a use query result with the amiibos information
 */
export const useFetchAmiibos = (params?: Params) => {
  return useQuery(["amiibos"], () => fetchAmiibos(params), {
    enabled: true,
  });
};

/** Hook to get the amiibo characters.
 *
 * @returns {UseQueryResult} Returns a use query result with the amiibo characters
 */
export const useFetchAmiiboCharacters = () => {
  return useQuery(["characters"], () => fetchAmiiboCharacters(), {
    enabled: true,
  });
};

/** Hook to get the amiibo types.
 *
 * @returns {UseQueryResult} Returns a use query result with the amiibo types
 */
export const useFetchAmiiboTypes = () => {
  return useQuery(["types"], () => fetchAmiiboTypes(), {
    enabled: true,
  });
};
