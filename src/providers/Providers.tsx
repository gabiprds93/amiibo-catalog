import { useRef } from "react";
import { QueryClientProvider, QueryClient } from "react-query";

// Routes
import Routes from "../routes/Routes";
// Types
import { ProvidersProps as Props } from "./Providers.types";

const Providers: React.FC<Props> = (props) => {
  const queryClientRef = useRef<QueryClient>();

  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: true,
        },
      },
    });
  }

  return (
    <QueryClientProvider client={queryClientRef.current}>
      <Routes />
    </QueryClientProvider>
  );
};

Providers.defaultProps = {};

export default Providers;
