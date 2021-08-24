import React, { createContext, useMemo, useState } from "react";
import { ContextDevTool } from "react-context-devtool";

// Types
import { FiltersProviderProps as Props } from "./filters.context.types";
import { FiltersProviderValue } from "./filters.context.types";

// @ts-ignore
export const FiltersContext = createContext<FiltersProviderValue>();

const FiltersProvider: React.FC<Props> = (props) => {
  const [selectedFilter, setSelectedFilter] = useState("");
  const [haveFilters, setHaveFilters] = useState(false);

  const value: FiltersProviderValue = useMemo(() => {
    return {
      selectedFilter,
      setSelectedFilter,
      haveFilters,
      setHaveFilters,
    };
  }, [haveFilters, selectedFilter]);

  return (
    <FiltersContext.Provider value={value}>
      <ContextDevTool
        context={FiltersContext}
        id="filters"
        displayName="Filters"
      />

      {props.children}
    </FiltersContext.Provider>
  );
};

export default FiltersProvider;
