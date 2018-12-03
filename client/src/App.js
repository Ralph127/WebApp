import React, { Component } from 'react';
import AppNavBar from './components/AppNavbar';
import FruitsList from './components/FruitsList';
import FruitModal from './components/FruitModal';
import { Provider } from 'react-redux';
import store from './store';
import { Container } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
    <Provider store={store}>
      <div className="App">
        <AppNavBar/>
        <Container>
          <FruitModal/>
          <FruitsList/>
        </Container>
      </div>
    </Provider>
    );
  }
}

export default App;
