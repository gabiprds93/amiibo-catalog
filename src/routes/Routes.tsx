import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages./components/results/Results/Results";
import HomeContainer from "../pages/Home.page";
import CategoriesContainer from "../pages/Categories.page";
import ResultsContainer from "../pages/Results.page";

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
      </Switch>
    </Router>
  );
};

export default Routes;
