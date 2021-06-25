import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './Pages/Login/index';
import Main from './Pages/Main/index';
import GradeSelect from './Pages/GradeSelect/index';
import OrderForm from './Pages/OrderForm/index';
import Confirm from './Pages/Confirm/index';

class Routes extends React.Component {
  render() {
    return (
      <Router>
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
