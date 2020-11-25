import React from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";
import history from "./history"

function ProtectedRoute(props) {
  if (props.mustBeLogged === true && localStorage.getItem("username") === null) {
    history.push("/login")
  }
  return <Route path={props.path} exact={props.exact} component={props.component} />
}

ProtectedRoute.propTypes = {
  component: PropTypes.func,
  path: PropTypes.string,
  exact: PropTypes.bool,
  mustBeLogged: PropTypes.bool
};

export default ProtectedRoute;