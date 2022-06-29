import React from 'react';
import './App.css';
import Todo from './Components/Todo';
import {Route,BrowserRouter as Router,Switch} from  'react-router-dom';
import Home from './Components/Home';
import Detail from './Components/Detail';
import {useState} from 'react';


function App() {

  const [count,set]=useState({})
  const parent=(e)=>{
    set(e)
    console.log(e)
  }
  return (
    <div>
    <Todo />
    <Switch>
    <Route exact path="/"><Home parent={parent}></Home><Detail item={count}></Detail></Route>
      <Route path="/detail"><Detail item={count}></Detail></Route>
    </Switch>
    </div>
  )
}

export default App;
