import React, { Component } from 'react';
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail/loadable.js';
import Login from './pages/login';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store/store';

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <BrowserRouter basename='/'>
          <div>
          <Header />
          <Route path='/' exact component={ Home }></Route>
          <Route path='/login' exact component={ Login }></Route>
          <Route path='/detail ' exact component={ Detail }></Route>
          </div>
        </BrowserRouter>
       
      </Provider>
    );
  }
}

export default App;
