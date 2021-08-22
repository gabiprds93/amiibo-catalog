import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import HomeContainer from "../pages/Home.page";
import CategoriesContainer from "../pages/Categories.page";
import ResultsContainer from "../pages/Results.page";
import FavoritesContainer from "../pages/Favorites.page";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomeContainer />
        </Route>

        <Route path="/results">
          <ResultsContainer />
        </Route>

        <Route path="/categories/:amiiboSeries">
          <CategoriesContainer />
        </Route>

        <Route path="/favorites">
          <FavoritesContainer />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
