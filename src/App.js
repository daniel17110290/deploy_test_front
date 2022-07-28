import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
//import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
//import AnyRoute from "./components/AnyRoute";
//import Detail from "./components/Detail";
//import DogCreator from "./components/DogCreator";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
