import React, { Component } from 'react';
import Navigation from './components/Navigation.jsx';
import Main from './components/Main.jsx';
import './stylesheets/style.scss';

class App extends Component {
  render() {
    return (
      <div id='app'>
        <Navigation />
        <Main />
      </div>
    );
  }
}

export default App;
