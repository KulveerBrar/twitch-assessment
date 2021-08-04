import React from "react"
import Home from "./layouts/Home/Home"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Profile from "./layouts/Profile/Profile";
import Header from "./layouts/Header/Header";
import ContextIndex from "./Context/ContextIndex";

function App() {

  return (
    <Router>
      <ContextIndex>
        <Header />
        <Switch>
          <Route path="/:channelId">
            <Profile />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </ContextIndex>
    </Router>
  );
}

export default App;
