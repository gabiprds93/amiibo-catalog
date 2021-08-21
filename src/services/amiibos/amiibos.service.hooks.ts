// Amiibos hooks
import { useQuery } from "react-query";

// Services
import { fetchAmiibos } from "./amiibos.service";
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
