import React, { Component } from 'react';
import Navigation from './components/Navigation.jsx';
import Main from './components/Main.jsx';
import './stylesheets/style.scss';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home.jsx'


class App extends Component {
  render() {
    return (
          <div>
            <Navigation />
           {/* <Route path = "/home" component={Home}/> */}
            <Main />
          </div>
    );
  };
};

export default App;