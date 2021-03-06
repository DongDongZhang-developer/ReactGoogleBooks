import React from "react";
// react router imported 
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Saved from "./pages/Saved";

function App() {
  return (
    <Router> 
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/saved" component={Saved} />
          {/* <Route component = {NoMatch} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
