import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Main from './Pages/Main/Main';
import Departure from './Pages/GradeSelector/Departure';
import Arrival from './Pages/GradeSelector/Arrival';
import Confirm from './Pages/Confirm';
import Nav from './Components/Nav';
import PassengerInfo from './Pages/PassengerInfo/PassengerInfo';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/gradeselect/departure" component={Departure} />
          <Route exact path="/gradeselect/arrival" component={Arrival} />
          <Route exact path="/confirm" component={Confirm} />
          <Route exact path="/passengerInfo" component={PassengerInfo} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
