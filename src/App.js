import React from 'react';
import './App.css';
import Todo from './Components/Todo';
import {Route,BrowserRouter as Router,Switch} from  'react-router-dom';
import Home from './Components/Home';
import Detail from './Components/Detail';


function App() {
  return (
    <div>
    <Todo />
    <Switch>
    <Route exact path="/" component={Home} />
      <Route path="/detail" component={Detail} /> 
    </Switch>
    </div>
  )
}

export default App;
