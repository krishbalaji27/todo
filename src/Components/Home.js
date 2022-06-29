import React from "react";

const Home=(props)=>
{
    let a = [
        {
            header:'react', 
            catagory: 'web',
            deadline: '10/07/2022'
        },
        {
            header:'tree', 
            catagory: 'code',
            deadline: '30/07/2022'
        },
        {
            header:'list & array', 
            catagory: 'code',
            deadline: '30/07/2022'
        },
        {
            header:'update mobile no in pan', 
            catagory: 'personal',
            deadline: '12/07/2022'
        },
        {
            header:'javascript', 
            catagory: 'web',
            deadline: '30/07/2022'
        },
    ]
    const clickHandler=(item)=>
    {
      //  window.location.href='http://localhost:3000/detail'
        props.parent(item)
    }
    return (
        <div>
        <table>
            <tr>
            <th>Title</th>
            <th>catagory</th>
            </tr>
                {a.map((e)=><tr>
                    <td>{e.header}</td>
                    <td>{e.catagory}</td>
                    <td><button onClick={()=>clickHandler(e)}> View </button></td>
                </tr>)}
        </table>
        </div>
    )
}
export default Home;