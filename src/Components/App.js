import React, { Component } from 'react';
import Router from 'Components/Router';
import GlobalStyles from "Components/GlobalStyles";
// index.js 를 호추랳서 괜찮다

class App extends Component {
  render() {
    return <>
      <Router ></Router>
      <GlobalStyles></GlobalStyles>
    </>
  }
}

export default App;
