import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
import Header from "./views/common/Header.js";
import Footer from "./views/common/Footer.js";
import Landing from "./views/landingPage/LandingWeb.js";
import Login from "./views/userPage/loginPage/LoginPage.js";
import Register from "./views/userPage/registerPage/RegistePager.js";
import KeepPage from "./views/keepPage/KeepPage.js";
import SearchResultPage from "./views/searchResultPage/SearchResultPage";
import MapContainer from "./views/kakaoMap/MapContainer";
import { MapContextProvider } from "../contexts/map_context";
import { ApplicationContextProvider } from "../contexts/weatherAndMap_context";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "../App.css";
import MyPage from "./views/userPage/MyPage";
function App() {
  return (
    <div>
      <Header />

      <ApplicationContextProvider>
        <MapContextProvider>
          <Route
            render={({ location }) => {
              return (
                <TransitionGroup className="transition-group">
                  <CSSTransition
                    key={location.key}
                    timeout={{ enter: 300, exit: 300 }}
                    classNames="fade"
                  >
                    <section className="route-section">
                      <Switch location={location}>
                        <Route exact path="/" component={Auth(Landing, null)} />
                        
                        <Route
                          exact
                          path="/login"
                          component={Auth(Login, false)}
                        />
                        <Route
                          exact
                          path="/register"
                          component={Auth(Register, false)}
                        />
                        <Route exact path="/map" component={MapContainer} />
                        <Route
                          exact
                          path="/keep"
                          component={Auth(KeepPage, true)}
                        />
                        <Route
                          exact
                          path="/searchResult"
                          component={Auth(SearchResultPage, null)}
                        />
                        <Route
                          exact
                          path="/mypage"
                          component={Auth(MyPage, true)}
                        />
                      </Switch>
                    </section>
                  </CSSTransition>
                </TransitionGroup>
              );
            }}
          ></Route>
        </MapContextProvider>
      </ApplicationContextProvider>
      <Footer />
    </div>
  );
}

export default App;
