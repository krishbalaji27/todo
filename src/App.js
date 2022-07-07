import React from 'react';
import './App.css';
import Todo from './Components/Todo';
import {Route,BrowserRouter as Router,Switch} from  'react-router-dom';
import Home from './Components/Home';
import Detail from './Components/Detail';
import {useState} from 'react';


function App() {


  const[count,set]=useState(null)
  const [a,setA]=useState([
    {
        key:100,
        header:'react', 
        catagory: 'web',
        deadline: '10/07/2022'
    },
    {
        key:101,
        header:'tree', 
        catagory: 'code',
        deadline: '30/07/2022'
    },
    {
        key:102,
        header:'list & array', 
        catagory: 'code',
        deadline: '30/07/2022'
    },
    {
        key:103,
        header:'update mobile no in pan', 
        catagory: 'personal',
        deadline: '12/07/2022'
    },
    {
        key:104,
        header:'javascript', 
        catagory: 'web',
        deadline: '30/07/2022'
    }
   ])
  const parent=(e)=>{
    set(e)
    console.log(e)
  }
  const dataChange=(e,k)=>{
    var temp=a;
      for(let i=0;i<temp.length;i++)
      {
        if(k==temp[i].key)
          {
            temp[i].header=e;
          }
      }
      setA([...temp])
  }
  const updateValues=(header1,catagory1,deadline1)=>
  {
    let a1=a;
    const maxKey=Math.max(...a.map(e=>e.key))
    let b={key:maxKey+1,header:header1,catagory:catagory1,deadline:deadline1}
    setA([...a1,b])
  }
  const deleteData=()=>
  {
    let a1=a;
    let b1=a1.filter(e=>e.key!=count.key)
    setA([...b1])
  }
  return (
    <div>
    <Todo />
    <Switch>
    <Route exact path="/"><Home parent={parent} a={a} update={updateValues}></Home><Detail item={count} data={dataChange} delete={deleteData}>
    </Detail></Route>
    <Route path="/detail"><Detail item={count} ></Detail></Route>
    </Switch>
    </div>
  )
}

export default App;
