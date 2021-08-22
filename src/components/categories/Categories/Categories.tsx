import { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";

// Components
import Navbar from "../../global/Navbar/Navbar";
import AmiiboList from "../../global/AmiiboList/AmiiboList";
import InfoBar from "../../global/InfoBar/InfoBar";
// Contexts
import useAmiibos from "../../../contexts/amiibos/amiibos.hooks";
// Services
import { fetchAmiibos } from "../../../services/amiibos/amiibos.service";
// Types
import { CategoriesProps as Props } from "./Categories.types";
import { Amiibo } from "../../../types/amiibos.types";

const Categories: React.FC<Props> = (props) => {
  const [amiibosByCategory, setAmiibosByCategory] = useState<Amiibo[]>();
  const { currentAmiiboList, setCurrentAmiiboList } = useAmiibos();
  const { params } = useRouteMatch<{ amiiboSeries: string }>();

  const { amiiboSeries } = params;

  useEffect(() => {
    if (params) {
      (async () => {
        const amiibos = await fetchAmiibos(params);
        setAmiibosByCategory(amiibos);
      })();
    }
  }, [params]);

  useEffect(() => {
    if (amiibosByCategory) setCurrentAmiiboList(amiibosByCategory);
  }, [amiibosByCategory, setCurrentAmiiboList]);

  return (
    <div className="Categories">
      <header className="Categories__header">
        <Navbar />
      </header>

      <main className="Categories__main">
        <InfoBar title={amiiboSeries} />
        <AmiiboList list={currentAmiiboList} />
      </main>

      <footer className="Categories__footer" />
    </div>
  );
};

Categories.defaultProps = {};

export default Categories;
