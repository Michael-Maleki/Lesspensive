import React from 'react';
import './App.css';
import './App.scss';
import Home from './components/Home/Home';
import Bedrooms from './components/Bedrooms/Bedrooms';
import Livingrooms from './components/Livingrooms/Livingrooms';
import Diningrooms from './components/Diningrooms/Diningrooms';
import Requests from './components/Requests/Requests';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>

        <Route path = "/"  exact component={Home}/>
        <Route path = "/bedrooms" exact component={Bedrooms}/>
        <Route path = "/living-rooms" exact component={Livingrooms}/>
        <Route path = "/dining-rooms" exact component={Diningrooms}/>
        <Route path = "/request" exact component={Requests}/>
        {/* <Route path = "/:id" exact component={Home}/> */}

      </Switch>
    </Router>
    
  );
}

export default App;
