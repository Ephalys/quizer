import React from "react";
import { Switch, Route, withRouter, } from "react-router-dom";
import Nomatch from "../pages/nomatch/nomatch"
import Home from "../pages/home/home";
import Entry from "../pages/entry/entry";
import ProtectedRoute from "./ProtectedRoute";

const Routes = () => {
    return (
        <Switch>
            <ProtectedRoute exact path="/login" component={Entry} mustBeLogged={false} />
            <ProtectedRoute exact path="/" component={Home} mustBeLogged={true} />
            <Route path="*">
                <Nomatch />
            </Route>
        </Switch>
    );
}

export default withRouter(Routes);