//import logo from './logo.svg';
import React from "react"
import './App.css';
import Home from "./pages/Home"
import Rooms from "./pages/Rooms"
import SingleRoom from "./pages/SingleRoom"
import NotFound from "./pages/NotFound"
import {Route, Switch} from  'react-router-dom'
import NavBar from "./component/NavBar"

function App() {
  return (
    <>
    <NavBar/>
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/rooms/" component={Rooms}/>
    <Route exact path="/rooms/:slug" component={SingleRoom}/>
    <Route component={NotFound}/>
    </Switch>
    </>
  );
}

export default App;
