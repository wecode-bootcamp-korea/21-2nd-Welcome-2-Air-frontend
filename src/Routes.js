import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
