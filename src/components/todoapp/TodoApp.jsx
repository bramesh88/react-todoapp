import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WelcomeComponent from "../welcome/Welcome";
import HeaderComponent from "./Header";
import FooterComponent from "./Footer";
import TodoListComponent from "./TodoListComponent";
import ErrorComponent from "./ErrorComponent";
import LoginComponent from "../login/Login";
import LogoutComponent from "../login/Logout";
import AuthenticateRoute from "./AuthenticatedRoute";
import ToDoComponent from "./ToDoComponent";

class TodoApp extends Component {
  render() {
    return (
      <div className="todo">
        <Router>
          <>
            <HeaderComponent />
            <Switch>
              <Route path="/" exact component={LoginComponent}></Route>
              <Route path="/login" component={LoginComponent}></Route>
              <AuthenticateRoute
                path="/welcome/:name"
                component={WelcomeComponent}
              />
              <AuthenticateRoute path="/todos/:id" component={ToDoComponent} />
              <AuthenticateRoute path="/todos" component={TodoListComponent} />
              <AuthenticateRoute path="/logout" component={LogoutComponent} />
              <Route component={ErrorComponent}></Route>
            </Switch>
            <FooterComponent />
          </>
        </Router>
      </div>
    );
  }
}

export default TodoApp;
