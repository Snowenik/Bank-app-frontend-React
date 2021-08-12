import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Home from "./screens/Home";
import About from "./screens/About";
import CreateAccount from "./screens/CreateAccount";
import User from "./screens/User";
import Account from "./screens/UserKonto";
import AccountManage from "./screens/ManageAccount";
import Transaction from "./screens/Transaction";
import Transfer from "./screens/Transfer";
import Settings from "./screens/Settings";
import Login from "./screens/Login";
import Support from "./screens/Support";
import UserHome from "./screens/UserHome";
import UserAbout from "./screens/UserAbout";
import UserSupport from "./screens/UserSupport";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";


function App() {  




  return (
    <Router>
      <Switch>
        <PublicRoute exact path="/" component={Home} to="/user/home"/>
        <PublicRoute exact path="/about" component={About} to="/user/about"/>
        <PublicRoute exact path="/support" component={Support} to="/user/support"/>
        <PublicRoute exact path="/create" component={CreateAccount} to="/user/home"/>
        <PublicRoute exact path="/zaloguj" component={Login} to="/user/home"/>
        <PrivateRoute exact path="/user" component={User} to="/"/>
        <PrivateRoute exact path="/user/support" component={UserSupport} to="/support"/>
        <PrivateRoute exact path="/user/about" component={UserAbout} to="/about"/>
        <PrivateRoute exact path="/user/home" component={UserHome} to="/"/>
        <PrivateRoute exact path="/user/ustawienia" component={Settings} to="/"/>
        <PrivateRoute exact path="/user/transakcje" component={Transaction} to="/"/>
        <PrivateRoute exact path="/user/przelewy" component={Transfer} to="/"/>
        <PrivateRoute exact path="/user/konto/zarzadzaj" component={AccountManage} to="/"/>
        <PrivateRoute exact path="/user/konto" component={Account} to="/"/>
      </Switch>
    </Router>
  );
}

export default App;
