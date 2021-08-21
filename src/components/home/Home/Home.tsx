import React from "react";

// Services
import { useFetchAmiibos } from "../../../services/amiibos/amiibos.service.hooks";
// Types
import { HomeProps as Props } from "./Home.types";

const Home: React.FC<Props> = (props) => {
  const { data: amiibos } = useFetchAmiibos();

  console.log(amiibos);

  return (
    <div className="Home">
      <header className="Home__header" />
      <main className="Home__main">Home</main>
      <footer className="Home__footer" />
    </div>
  );
};

Home.defaultProps = {};

export default Home;
