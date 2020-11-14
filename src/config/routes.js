import React from "react";
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";
import Nomatch from "../pages/nomatch/nomatch"
import Home from "../pages/home/home";
import Entry from "../pages/entry/entry";

const Router = () => {
    const loggedIn = localStorage.getItem('token');

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    {loggedIn ? <Home /> : <Entry />}
                </Route>
                <Route path="*">
                    <Nomatch />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Router;