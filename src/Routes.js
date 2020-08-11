import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginYeonuk from "./Pages/yeonuk/Login/Login";
import MainYeonuk from "./Pages/yeonuk/Main/Main";
import LoginDoyoon from "./Pages/doyoon/Login/Login";
import MainDoyoon from "./Pages/doyoon/Main/Main";
import LoginHohyun from "./Pages/hohyun/Login/Login";
import MainHohyun from "./Pages/hohyun/Main/Main";
import LoginSumin from "./Pages/sumin/Login/Login";
import MainSumin from "./Pages/sumin/Main/Main";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* <Route exact path="/" component={intro} /> */}
          <Route exact path="/login-yeonuk" component={LoginYeonuk} />
          <Route exact path="/main-yeonuk" component={MainYeonuk} />
          {/* <Route exact path="/login-doyoon" component={LoginDoyoon} />
          <Route exact path="/main-doyoon" component={MainDoyoon} />
          <Route exact path="/login-hohyun" component={LoginHohyun} />
          <Route exact path="/main-hohyun" component={MainHohyun} />
          <Route exact path="/login-sumin" component={LoginSumin} />
          <Route exact path="/main-sumin" component={MainSumin} /> */}
        </Switch>
      </Router>
    );
  }
}

export default Routes;
