import './App.css';

import React from "react"
import {Route, Switch} from "react-router-dom"
import Main from "./pages/main"
import Stocks from "./pages/stocks"
import Dashboard from "./pages/dashboard"
import About from "./pages/about"
import Nav from "./components/nav"



function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
      <Route exact path="/">
        <Main />
      </Route>

      <Route 
        path="/stocks/:symbol"
        render={(routerProps) => {return <Stocks {...routerProps} />}}
      />

      <Route path="/stocks">
        <Dashboard />
      </Route>
      

      <Route path="/about">
        <About />
      </Route>
      </Switch>
    </div>
  );
}

export default App;
