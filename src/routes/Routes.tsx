import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import Home from "../components/home/Home/Home";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
