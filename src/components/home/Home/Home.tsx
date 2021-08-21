// Components
import AmiiboList from "../../global/AmiiboList/AmiiboList";
// Types
import { HomeProps as Props } from "./Home.types";

const Home: React.FC<Props> = (props) => {
  return (
    <div className="Home">
      <header className="Home__header" />

      <main className="Home__main">
        <AmiiboList />
      </main>

      <footer className="Home__footer" />
    </div>
  );
};

Home.defaultProps = {};

export default Home;
