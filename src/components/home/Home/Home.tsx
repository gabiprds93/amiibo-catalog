import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";

// Components
import AmiiboList from "../../global/AmiiboList/AmiiboList";
import Navbar from "../../global/Navbar/Navbar";
import InfoBar from "../../global/InfoBar/InfoBar";
import Filters from "../../global/Filters/Filters";
import DarkToggle from "../../global/DarkToggle/DarkToggle";
// Contexts
import useAmiibos from "../../../contexts/amiibos/amiibos.hooks";
// Services
import { useFetchAmiibos } from "../../../services/amiibos/amiibos.service.hooks";
// Types
import { HomeProps as Props } from "./Home.types";
// Configs
import CONSTANTS from "../../../configs/constants";

const { BREAKPOINTS } = CONSTANTS;

const Home: React.FC<Props> = (props) => {
  const { currentAmiiboList, setCurrentAmiiboList } = useAmiibos();
  const { data: amiibos } = useFetchAmiibos();
  const isDesktop = useMediaQuery({
    query: `(min-width: ${BREAKPOINTS.desktop}px)`,
  });

  useEffect(() => {
    if (amiibos) setCurrentAmiiboList(amiibos);
  }, [amiibos, setCurrentAmiiboList]);

  return (
    <div className="Home">
      <header className="Home__header">
        <Navbar />
      </header>

      <main className="Home__main">
        <div className="Home__dark-toggle">
          <DarkToggle />
        </div>

        <InfoBar title="Amiibos" />

        <div className="Home__main__info">
          {isDesktop ? <Filters /> : null}

          <AmiiboList list={currentAmiiboList} />
        </div>
      </main>

      <footer className="Home__footer" />
    </div>
  );
};

Home.defaultProps = {};

export default Home;
