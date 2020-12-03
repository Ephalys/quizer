import React from "react";
import { Switch, Route, withRouter, useLocation } from "react-router-dom";
import Nomatch from "pages/nomatch/nomatch";
import Home from "pages/home/home";
import Entry from "pages/entry/entry";
import Quiz from "pages/quiz/quiz";
import { AnimatePresence } from "framer-motion";
import Profil from "pages/profil/profil";

const Routes = () => {
  // const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route path="/login" exact component={Entry}/>
        <Route path="/" exact component={Home}/>
        <Route exact path="/quiz/:categoryId" component={Quiz}/>
        <Route exact path="/profil" component={Profil}/>
        <Route path="*" component={Nomatch}/>
      </Switch>
    </AnimatePresence >
  );
};

export default withRouter(Routes);
