import './App.css';
import Navigation from './components/Navigation';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React,{useState} from 'react'
import Course from './components/Course';
import Home from './components/Home'
import Members from './components/Members';
import Admin from './components/Admin';
import Login from './components/Login';
import User from './components/User';

function App() {

  return (
    <div>
      <BrowserRouter >
        <Navigation/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/admin" component={Admin} />
          <Route path="/login" component={Login}/>
          <Route path="/user" component={User}/>
          <Route path="/navigation" component={Navigation}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
