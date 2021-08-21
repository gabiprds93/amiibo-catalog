// Components
import AmiiboList from "../../global/AmiiboList/AmiiboList";
import Navbar from "../../global/Navbar/Navbar";
// Services
import { useFetchAmiibos } from "../../../services/amiibos/amiibos.service.hooks";
// Types
import { HomeProps as Props } from "./Home.types";

const Home: React.FC<Props> = (props) => {
  const { data: amiibos } = useFetchAmiibos();

  return (
    <div className="Home">
      <header className="Home__header">
        <Navbar />
      </header>

      <main className="Home__main">
        <AmiiboList list={amiibos} />
      </main>

      <footer className="Home__footer" />
    </div>
  );
};

Home.defaultProps = {};

export default Home;
