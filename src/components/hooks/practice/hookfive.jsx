import React,{useState} from "react";

function HookFive(){
    const [item,setItem] = useState([])
    const addItems=()=>{
        setItem([...item,
            {
                id:item.length,value:Math.floor(Math.random()*10)+1
            }])
    }
    return(
        <div>
            <button onClick={addItems}>Add a number</button>
            <ul>
                {
                    item.map(item1=>(
                    <li key={item1.id}>{item1.value}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default HookFive