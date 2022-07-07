import React, { useEffect, useState } from "react";

const Home=(props)=>
{
    const [createMode,set] = useState(false)
    const [count1,set1] = useState('')
    const [count2,set2] = useState('')
    const [count3,set3] = useState('')
    const updateValues=()=>
    {
        props.update(count1,count2,count3)
        set1('')
        set2('')
        set3('')
    }
    const clickHandler=(item1)=>
    {
      //  window.location.href='http://localhost:3000/detail'
        props.parent(item1)
    }
    return (
        <div>
        <table className="center tablecontent" >
            <tr>
            <th>Title</th>
            <th>catagory</th>
            </tr>
                {props.a.map((e)=><tr>
                    <td>{e.header}</td>
                    <td>{e.catagory}</td>
                    <td><button onClick={()=>clickHandler(e)}> View </button></td>
                </tr>)}
        </table>
        <button onClick={e=>set(true)}>Create</button>
        {createMode==true?<div>title<input type="text" onChange={e=>set1(e.target.value)} value={count1}></input>catagory<input type="text" onChange={e=>set2(e.target.value)} value={count2}></input>deadline<input type="date" onChange={e=>set3(e.target.value)} value={count3}></input>
        <button onClick={updateValues}>Save</button></div>:null}
        </div>
    )
}
export default Home;