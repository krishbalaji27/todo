import React, { useEffect, useState } from "react";

const Detail=(props)=>
{
    const[count,set1]=useState(props.item?.header)
    useEffect(()=>{set1(props.item?.header)
    },[props.item?.header])
    const [isEditMode,set] = useState(false)
    const clickHandle =(item2,key1)=>
    {
        props.data(item2,key1);
    }
    const deleteData=()=>
    {
        props.delete();
    }
    if(props.item!= null)
    {
        console.log(count,props.item.header)
    return (
        <div>
            <button onClick={e=>set(true)}>Edit</button>
            <button onClick={deleteData}>delete</button>
            <br />
            {isEditMode==true?<div><input type="text" onChange={e=>set1(e.target.value)} value={count}></input>
            <button onClick={()=>clickHandle(count,props.item.key)}>Save</button></div>:<p>{props.item.header}</p>}
            <p>{props.item.catagory}</p>
            <p>{props.item.deadline}</p>
        </div>    
    )
    }
    else
    return null;
}
export default Detail;