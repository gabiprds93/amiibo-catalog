import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import Home from "../components/home/Home/Home";
import Results from "../components/results/Results/Results";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/results">
          <Results />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
