import { useEffect } from "react";

// Components
import AmiiboList from "../../global/AmiiboList/AmiiboList";
import Navbar from "../../global/Navbar/Navbar";
import InfoBar from "../../global/InfoBar/InfoBar";
import DarkToggle from "../../global/DarkToggle/DarkToggle";
// Contexts
import useAmiibos from "../../../contexts/amiibos/amiibos.hooks";
// Types
import { ResultsProps as Props } from "./Results.types";

const Results: React.FC<Props> = (props) => {
  const { amiibosFiltered } = useAmiibos();
  const { currentAmiiboList, setCurrentAmiiboList } = useAmiibos();

  useEffect(() => {
    if (amiibosFiltered) setCurrentAmiiboList(amiibosFiltered);
  }, [amiibosFiltered, setCurrentAmiiboList]);

  return (
    <div className="Results">
      <header className="Results__header">
        <Navbar />
      </header>

      <main className="Results__main">
        <div className="Home__dark-toggle">
          <DarkToggle />
        </div>

        <InfoBar title="Resultados" />

        <AmiiboList list={currentAmiiboList} />
      </main>

      <footer className="Results__footer" />
    </div>
  );
};

Results.defaultProps = {};

export default Results;
