import React, { createContext, useMemo, useState } from "react";

// Types
import { AmiibosProviderProps as Props } from "./amiibos.context.types";
import { AmiibosProviderValue } from "./amiibos.context.types";
import { Amiibo } from "../../types/amiibos.types";

// @ts-ignore
export const AmiibosContext = createContext<AmiibosProviderValue>();

const AmiibosProvider: React.FC<Props> = (props) => {
  const [amiibosFiltered, setAmiibosFiltered] = useState<Amiibo[]>();
  const [currentAmiiboList, setCurrentAmiiboList] = useState<Amiibo[]>();

  const value: AmiibosProviderValue = useMemo(() => {
    return {
      amiibosFiltered,
      setAmiibosFiltered,
      currentAmiiboList,
      setCurrentAmiiboList,
    };
  }, [amiibosFiltered, currentAmiiboList]);

  return (
    <AmiibosContext.Provider value={value}>
      {props.children}
    </AmiibosContext.Provider>
  );
};

export default AmiibosProvider;
