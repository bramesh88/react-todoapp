import React, { Component } from "react";
import ToDoDataService from "../../api/todo/ToDoDataService";
import AuthenticationService from "../js/AuthenticationService";

class ToDoComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      desc: "",
      targetDate: new Date(),
    };

    this.back = this.back.bind(this);
    this.createTodo = this.createTodo.bind(this);
    this.updateItem = this.updateItem.bind(this);
  }

  back() {
    this.props.history.push("/todos");
  }
  createTodo() {
    console.log("In create");
  }

  updateItem() {
    console.log("In update:" + this.state.id);
    let todo = {
      id: 1,
      desc: "test desc",
      targetDate: new Date(),
    };
    let userName = AuthenticationService.getLoggedInUserName();
    if (this.state.id == -1) {
      ToDoDataService.createToDo(userName, todo).then((response) => {
        console.log(response);
      });
    } else {
      ToDoDataService.updateToDo(userName, this.state.id, todo).then(
        (response) => {
          console.log(response);
        }
      );
    }
  }

  validate() {
    let errors = {};
  }
  render() {
    return (
      <div className="container">
        I am in todo app -{this.props.match.params.id}
        <div className="row">
          <button className="btn btn-success" onClick={this.updateItem}>
            Save
          </button>{" "}
          &nbsp;
          <button className="btn btn-success" onClick={this.back}>
            Cancel
          </button>
        </div>
        <br /> <br />
        <button className="btn btn-success" onClick={() => this.back()}>
          Back
        </button>
      </div>
    );
  }
}

export default ToDoComponent;
