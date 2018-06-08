import React, { Component } from 'react';
import { Route } from 'react-router';
import About from './components/About';
import Contacts from './components/Contacts';
import Main from './components/Main';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Route path='/about' component={About} />
        <Route path='/contacts' component={Contacts} />
        <Route path='/main' component={Main} />
      </div>
    );
  }
}

export default App;
