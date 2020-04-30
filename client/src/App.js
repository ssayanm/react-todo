import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState";
import Header from "./components/layout/Header";

import About from "./components/pages/About";
import Home from "./components/pages/Home";

import "./App.css";

const App = () => {
  return (
    <div className="container">
      <GlobalProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
          </Switch>
        </Router>
      </GlobalProvider>
    </div>
  );
};

export default App;
