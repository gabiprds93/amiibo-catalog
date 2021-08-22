import { useRef } from "react";
import { QueryClientProvider, QueryClient } from "react-query";

// Routes
import Routes from "../routes/Routes";
// Contexts
import AmiibosProvider from "../contexts/amiibos/amiibos.context";
import FavoritesProvider from "../contexts/favorites/favorites.context";
// Types
import { ProvidersProps as Props } from "./Providers.types";

const Providers: React.FC<Props> = (props) => {
  const queryClientRef = useRef<QueryClient>();

  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
        },
      },
    });
  }

  return (
    <QueryClientProvider client={queryClientRef.current}>
      <FavoritesProvider>
        <AmiibosProvider>
          <Routes />
        </AmiibosProvider>
      </FavoritesProvider>
    </QueryClientProvider>
  );
};

Providers.defaultProps = {};

export default Providers;
