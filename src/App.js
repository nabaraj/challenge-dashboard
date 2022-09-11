import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.scss";
import Login from "./pages/login/Login";
import GlobalContext from "./GlobalContext";
import Home from "./pages/Home/Home";
import ErrorBoundary from "./component/ErrorBoundary";
import NoMatch from "./component/NoMatch";

export default function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <GlobalContext>
          <Switch>
            <Route exact path='/'>
              <Login />
            </Route>
            <Route path='/home'>
              <Home />
            </Route>
            <Route path='*'>
              <NoMatch />
            </Route>
          </Switch>
        </GlobalContext>
      </ErrorBoundary>
    </BrowserRouter>
  );
}
