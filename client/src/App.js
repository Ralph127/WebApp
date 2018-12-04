import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FruitsList from './components/FruitsList';
import VegetablesList from './components/VegetablesList';
import Login from './components/Login';
import Home from './components/Home';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state ={
      isAuthenticated:false
    }
  }
  render() {
    return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Switch>
           
            <Route path="/home" component={Home}/>
            <Route path="/fruits" component={FruitsList}/>
            <Route path="/vegetables" component={VegetablesList}/>
            <Route path="/login" component={Login}/>
            
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
    );
  }
}

export default App;
