import React, { Component } from "react";
import HomePage from "./pages/HomePage";
import "./App.css";
import "./components/navbar.css";
import "./components/hero.css";
import "./components/header.css";
import "./components/articlesList.css";
import "./pages/articlePage.css";
import "./components/footer.css";
import "./components/shareButtons.css";
import "./pages/contactPage.css";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import AboutPage from "./pages/AboutPage";
import ArticlePage from "./pages/ArticlePage";
import Navigation from "./components/NavBar";
import ArticlesListPage from "./pages/ArticlesListPage";
import Contact from "./pages/ContactPage";

import Footer from "./components/Footer";
import NotFoundPage from "./pages/404page";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />
          <TransitionGroup>
            <CSSTransition classNames="page" timeout={300}>
              <Switch>
                <Route path="/" component={HomePage} exact />
                <Route path="/about" component={AboutPage} exact />
                <Route path="/article/:name" component={ArticlePage} exact />
                <Route
                  path="/articles-list"
                  component={ArticlesListPage}
                  exact
                />
                <Route path="/contact" component={Contact} exact />

                <Route component={NotFoundPage} />
                <Redirect to="/" />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
