import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import About from "./Pages/About";
import NotFound from "./Pages/Notfound";
import { NavLink } from "react-router-dom";
import Login from "./Pages/Login";

function App() {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <NavLink to="/" activeStyle={{ fontSize: 5 }}>
            home
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" activeClassName="activeee">
            /profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile/33">/profile/33</NavLink>
        </li>
        <li>
          <NavLink to="/about">/about</NavLink>
        </li>
        <li>
          <NavLink to="/login">/login</NavLink>
        </li>
      </ul>
      <Switch>
        <Route path="/profile/:id" component={Profile} />
        <Route path="/profile" component={Profile} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/" exact component={Home} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
