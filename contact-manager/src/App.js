import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Contacts from './contacts/Contacts';
import Header from './components/layout/Header';
import About from './components/pages/about';
import AddContact from './contacts/addContact';
import Notfound from './components/pages/notfound';
import { Provider } from './context';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component{
  render(){
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Contact Manager"/>
            <div className="container">
              <Switch>
                <Route exact path='/' component={Contacts}/>
                <Route exact path='/contact/add' component={AddContact}/>
                <Route exact path='/about' component={About}/>
                <Route component={Notfound}/>
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
