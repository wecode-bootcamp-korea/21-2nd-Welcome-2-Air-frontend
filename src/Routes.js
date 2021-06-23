import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Main from './Pages/Main';
import GradeSelect from './Pages/GradeSelect';
import OrderForm from './Pages/OrderForm';
import Confirm from './Pages/Confirm';
import Nav from './Components/Nav';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/gradeselect" component={GradeSelect} />
          <Route exact path="/orderform" component={OrderForm} />
          <Route exact path="/confirm" component={Confirm} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
