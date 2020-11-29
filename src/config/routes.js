import React from "react";
import { Switch, Route, withRouter, useLocation } from "react-router-dom";
import Nomatch from "pages/nomatch/nomatch"
import Home from "pages/home/home";
import Entry from "pages/entry/entry";
import Quiz from "pages/quiz/quiz";
import ProtectedRoute from "./ProtectedRoute";
import { AnimatePresence } from "framer-motion";

const Routes = () => {
    const location = useLocation();
    return (
        <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
                {/*
                <ProtectedRoute exact path="/login" component={Entry} mustBeLogged={false} />
                <ProtectedRoute exact path="/" component={Home} mustBeLogged={true} />
                <ProtectedRoute exact path="/quiz/:categoryId" component={Quiz} mustBeLogged={true} />
                */}
                <Route path="/login" exact>
                    <Entry />
                </Route>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route exact path="/quiz/:categoryId">
                    <Quiz />
                </Route>
                <Route path="*">
                    <Nomatch />
                </Route>
            </Switch>
        </AnimatePresence>
    );
}

export default withRouter(Routes);