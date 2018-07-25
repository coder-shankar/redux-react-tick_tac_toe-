import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import Board from "./views/Board";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <Board />
        </div>
      </Provider>
    );
  }
}

export default App;
