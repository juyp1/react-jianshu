import React, { Component } from 'react';
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store/store';

class App extends Component {
  render() {
    return (
      <Provider store={store} >
       <div>
       <Header />
        <BrowserRouter basename='/'>
          <div>
          <Route path='/' exact component={ Home }></Route>
          <Route path='/detail' exact component={ Detail }></Route>
          </div>
        </BrowserRouter>
       </div>
      </Provider>
    );
  }
}

export default App;
