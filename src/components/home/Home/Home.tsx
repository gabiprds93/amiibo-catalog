import { useEffect } from "react";

// Components
import AmiiboList from "../../global/AmiiboList/AmiiboList";
import Navbar from "../../global/Navbar/Navbar";
import InfoBar from "../../global/InfoBar/InfoBar";
import Filters from "../../global/Filters/Filters";
// Contexts
import useAmiibos from "../../../contexts/amiibos/amiibos.hooks";
// Services
import { useFetchAmiibos } from "../../../services/amiibos/amiibos.service.hooks";
// Types
import { HomeProps as Props } from "./Home.types";

const Home: React.FC<Props> = (props) => {
  const { currentAmiiboList, setCurrentAmiiboList } = useAmiibos();
  const { data: amiibos } = useFetchAmiibos();

  useEffect(() => {
    if (amiibos) setCurrentAmiiboList(amiibos);
  }, [amiibos, setCurrentAmiiboList]);

  return (
    <div className="Home">
      <header className="Home__header">
        <Navbar />
      </header>

      <main className="Home__main">
        <Filters />

        <div className="Home__main__info">
          <InfoBar title="Amiibos" />

          <AmiiboList list={currentAmiiboList} />
        </div>
      </main>

      <footer className="Home__footer" />
    </div>
  );
};

Home.defaultProps = {};

export default Home;
