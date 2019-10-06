import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SurveyForm from './components/SurveyForm';
import ThanksComponent from './components/ThanksComponent';

class App extends Component {

  constructor(props) {
    super(props)
  }


  render() {
    return (
      <Router>
        <div className='App'>
          <Header />

          <Route
            exact
            path='/'
            render={(props) => (
              <React.Fragment>
                <SurveyForm />
              </React.Fragment>
            )}
          />
          <Route path='/thanks' component={ThanksComponent} />

        </div >
      </Router>
    )
  }

}

export default App;
