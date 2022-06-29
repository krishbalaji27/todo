import React from "react";

const Detail=(props)=>
{
    return (
        <div>
            <p>{props.item.header}</p>
            <p>{props.item.catagory}</p>
            <p>{props.item.deadline}</p>
        </div>
        
    )
}
export default Detail;