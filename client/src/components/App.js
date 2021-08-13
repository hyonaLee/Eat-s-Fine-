import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
import Landing from "./views/landingPage/Landing.js";
import Login from "./views/loginPage/Login.js";
import Register from "./views/registerPage/Register.js";
import Header from "./views/common/Header.js";
import Footer from "./views/common/Footer.js";
import ChangeLocation from "./views/changeLocation/ChangeLocation";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Auth(Landing, null)} />
        <Route exact path="/login" component={Auth(Login, false)} />
        <Route exact path="/register" component={Auth(Register, false)} />
        <Route
          exact
          path="/changelocation"
          component={Auth(ChangeLocation, false)}
        />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
