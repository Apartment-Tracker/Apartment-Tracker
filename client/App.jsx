import React, { Component } from 'react';
import Navigation from './components/Navigation.jsx';
import Main from './components/Main.jsx';
import './stylesheets/style.scss';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Main />
        <ul>
          <li>Hi</li>
          <li>Hi</li>
          <li>Hi</li>
        </ul>
      </div>
    );
  };
};

export default App;