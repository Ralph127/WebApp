import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { FruitExport } from './components/FruitsList';
import { VegetableExport } from './components/VegetablesList';
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
            <Route path="/" component={Login}/>
            <Route path="/home" component={FruitExport}/>
            <Route path="/fruits" component={FruitExport}/>
            <Route path="/vegetables" component={VegetableExport}/>
            <Route path="/login" component={Login}/>
            
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
    );
  }
}

export default App;
