import React from "react";

// Types
import { HomeProps as Props } from "./Home.types";

const Home: React.FC<Props> = (props) => {
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
