import React from "react";
import { Switch, Route, withRouter, useLocation } from "react-router-dom";
import Nomatch from "pages/nomatch/nomatch";
import Home from "pages/home/home";
import Entry from "pages/entry/entry";
import Quiz from "pages/quiz/quiz";
import { AnimatePresence } from "framer-motion";
import Profil from "pages/profil/profil";
import ProtectedRoute from "./ProtectedRoute";

const Routes = () => {
  // const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch>
        <Route path="/login" exact component={Entry} />
        <ProtectedRoute path="/" exact={true} component={Home} />
        <ProtectedRoute
          path="/quiz/:categoryId"
          exact={true}
          component={Quiz}
        />
        <ProtectedRoute path="/profil" exact={true} component={Profil} />
        <Route path="*" component={Nomatch} />
      </Switch>
    </AnimatePresence>
  );
};

export default withRouter(Routes);
