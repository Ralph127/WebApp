import React, { Component } from 'react';
import FruitsList from './components/FruitsList';
import VegetablesList from './components/VegetablesList';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
            <Route path="/fruits" component={FruitsList}/>
            <Route path="/vegetables" component={VegetablesList}/>
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
    );
  }
}

export default App;
