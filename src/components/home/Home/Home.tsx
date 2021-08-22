import { useEffect } from "react";

// Components
import AmiiboList from "../../global/AmiiboList/AmiiboList";
import Navbar from "../../global/Navbar/Navbar";
import InfoBar from "../../global/InfoBar/InfoBar";
// Services
import { useFetchAmiibos } from "../../../services/amiibos/amiibos.service.hooks";
// Types
import { HomeProps as Props } from "./Home.types";
import useAmiibos from "../../../contexts/amiibos/amiibos.hooks";

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
        <InfoBar title="Amiibos" />
        <AmiiboList list={currentAmiiboList} />
      </main>

      <footer className="Home__footer" />
    </div>
  );
};

Home.defaultProps = {};

export default Home;
