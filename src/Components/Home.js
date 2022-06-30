import React from "react";

const Home=(props)=>
{
    const clickHandler=(item)=>
    {
      //  window.location.href='http://localhost:3000/detail'
        props.parent(item)
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
        </div>
    )
}
export default Home;