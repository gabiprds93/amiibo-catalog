// Components
import AmiiboList from "../../global/AmiiboList/AmiiboList";
import Navbar from "../../global/Navbar/Navbar";
// Contexts
import useAmiibos from "../../../contexts/amiibos/amiibos.hooks";
// Types
import { ResultsProps as Props } from "./Results.types";

const Results: React.FC<Props> = (props) => {
  const { amiibosFiltered } = useAmiibos();

  return (
    <div className="Results">
      <header className="Results__header">
        <Navbar />
      </header>

      <main className="Results__main">
        <AmiiboList list={amiibosFiltered} />
      </main>

      <footer className="Results__footer" />
    </div>
  );
};

Results.defaultProps = {};

export default Results;
