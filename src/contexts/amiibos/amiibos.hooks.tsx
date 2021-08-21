import { useContext } from "react";

// Contexts
import { AmiibosContext } from "./amiibos.context";
// Types
import { AmiibosProviderValue } from "./amiibos.context.types";

const useAmiibos = () => {
  const context = useContext<AmiibosProviderValue>(AmiibosContext);

  if (typeof context === "undefined") {
    throw new Error("useAmiibos must be used within a AmiibosProvider");
  }

  return context;
};

export default useAmiibos;
