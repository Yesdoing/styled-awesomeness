import React, { Component, Fragment } from 'react';
import "./App.css";

class App extends Component {
  render() {
    return (
      <Fragment>
      <Button />
      <Button danger />
      </Fragment>
    );
  }
}

const Button = ({ danger }) => (
  <button className={danger ? "btn btn--danger" : "btn btn--success"}>hello world!</button>
)

export default App;
