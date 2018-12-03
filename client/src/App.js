import React, { Component } from 'react';
import AppNavBar from './components/AppNavbar';
import FruitsList from './components/FruitsList';
import VegetablesList from './components/VegetablesList';
import { Provider } from 'react-redux';
import store from './store';
import { Container } from 'reactstrap';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Routes from './Routes';

class App extends Component {
  render() {
    return (
    <Provider store={store}>
      <div className="App">
      <AppNavBar/>
        <Routes childProps={childProps}/>
      </div>
    </Provider>
    );
  }
}

export default App;
