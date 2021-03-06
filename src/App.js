import React from 'react';
import PlantsContainer from './containers/PlantsContainer'
import UserContainer from './containers/UserContainer'
import UserLogin from './components/UserLogin'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

class App extends React.Component {

  render() {
    return (
      
      <Router>
      <div className="App">
        <Container>
      <Switch>
          <Route path="/login" component={UserLogin}/> 
          <Route path ="/home" component={PlantsContainer}/>
          <Route path="/userhome" component={UserContainer} />      
      </Switch>
      </Container>
      </div>
      </Router>
    );
  }
}

export default App;


//NPM ROUTES ARE LOCALHOST:3001/HOME AND /LOGIN



//connect(null, {fetchPlants})(App); 
//connect is saying hey, i want access to this part of the store
//automatically calling dispatch for us on return value of fetchPlants
//function that sends action object to reducer is dispatch, which is called in connect
//essentially calling store.dispatch(action)
//we use thunk when we want to make asynchronous request to backend
//without thunk, connect is expecting an action returned from the action,
//but when we make fetch request, it takes some time & connect expects immediate return
//thunk allows connect to call dispatch from inside fetch/action create, 
//allows us to wait for request to finish before dispatching anything to reducer


//mapstatetoprops gives us access to what's in store
//mapdispatchtoprops gives us ability to pass down functions
