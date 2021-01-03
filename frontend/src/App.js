import React, { Component } from "react";
import axios from "axios";
import ViewList from "./components/ViewList";
import UserForm from "./components/UserForm";

export default class App extends Component {
  state = {
    route: "list",
  };
  constructor() {
    super();
  }

  render() {
    const { route } = this.state;
    return (
      <div className="App">
        {route === "list" && <ViewList />}
        {route === "users" && <UserForm />}
      </div>
    );
  }
}
