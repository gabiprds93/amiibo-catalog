// Components
import AmiiboList from "../../global/AmiiboList/AmiiboList";
import Navbar from "../../global/Navbar/Navbar";
// Types
import { HomeProps as Props } from "./Home.types";

const Home: React.FC<Props> = (props) => {
  return (
    <div className="Home">
      <header className="Home__header">
        <Navbar />
      </header>

      <main className="Home__main">
        <AmiiboList />
      </main>

      <footer className="Home__footer" />
    </div>
  );
};

Home.defaultProps = {};

export default Home;
