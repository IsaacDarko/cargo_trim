import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Log from './components/Log';
import Result from './components/Result';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import Takeoff from './components/Takeoff';



function App() {
  return (
    <React.Fragment>     

      <Navbar />

      <Switch>        
        <Route exact path="/" component={Home} />
        <Route path="/takeoff" component={Takeoff} />
        <Route path="/form" component={Form} />
        <Route path="/result" component={Result} />
        <Route path="/log" component={Log} />
        <Route component={ErrorPage} />                 
      </Switch>      

    </React.Fragment>
  );
}

export default App;
