import React from "react";
import Home from "./pages/Home.js";
import PortfolioPage from "./pages/PortfolioPage.js";
//Router
import { Switch, Route, useLocation } from "react-router-dom";
//Animation
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  console.log(location);
  return (
    <div className="App">
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/portfolio">
            <PortfolioPage />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
