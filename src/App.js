import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Udemy from './containers/Udemy/Udemy';

class App extends Component {
  render () {
    return (
        <BrowserRouter>
          <Udemy />
        </BrowserRouter>
    );
  }
}

export default App;
