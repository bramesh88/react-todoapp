import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import AuthenticationService from "../js/AuthenticationService";

class HeaderComponent extends Component {
  render() {
    let hasLoggedIn = AuthenticationService.isUserLoggedIn();
    return (
      <header>
        <nav className="navbar  navbar-expand-md navbar-dark bg-dark">
          <div className="navbar-brand">
            <Link to="#" className="nav-link">
              My ToDo App
            </Link>
          </div>
          <ul className="navbar-nav">
            {hasLoggedIn && (
              <li>
                <Link to="/welcome/Ramesh" className="nav-link">
                  Home
                </Link>
              </li>
            )}
            {hasLoggedIn && (
              <li>
                <Link to="/todos" className="nav-link">
                  Todos
                </Link>
              </li>
            )}
          </ul>
          <ul className="navbar-nav navbar-collapse justify-content-end">
            {!hasLoggedIn && (
              <li>
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
            )}
            {hasLoggedIn && (
              <li>
                <Link
                  to="/logout"
                  className="nav-link"
                  onClick={() => AuthenticationService.logout()}
                >
                  Logout
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </header>
    );
  }
}

export default withRouter(HeaderComponent);
