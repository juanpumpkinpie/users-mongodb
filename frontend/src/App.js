import React, { Component } from "react";
import ViewList from "./components/ViewList";
import UserForm from "./components/UserForm";

export default class App extends Component {
  state = {
    route: "list",
  };

  render() {
    return (
      <div className="App">
        <ViewList />
        <UserForm />
      </div>
    );
  }
}
