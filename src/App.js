import React from "react";
import Home from "./layouts/Home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Profile from "./layouts/Profile/Profile";

function App() {

  return (
    <Router>
      <Switch>   
        <Route path="/:channel">
          <Profile />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
