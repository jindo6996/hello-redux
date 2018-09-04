import React, { Component } from "react";
import HelloWorld from "./HelloWorld";
import {store} from "./store";
import { ButtonGroup } from "./ButtonGroup";
import ButonGroup from "./ButtonGroup";

class App extends Component {
  render() {
    return [
        <HelloWorld key = {1} tech={store.getState().tech} />,
        <ButonGroup key = {2} technologies ={["React", "Elm","React-redux"]} />
      ];
  }
}

export default App;
