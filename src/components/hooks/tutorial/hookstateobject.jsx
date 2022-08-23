import React from "react";
import { useState } from "react";

function HookState(){
    const takeFirstName =(event)=>{
        setName({firstName:event.target.value})
    }
    const takeLastName =(event)=>{
        setName({lastName:event.target.value})
    }
    const [name,setName]=useState({firstName:'',lastName:''})
    return(

        <form>
            <input type = "text" value = {name.firstName} onChange={takeFirstName}/>
            <input type = "text" value = {name.lastName} onChange={takeLastName}/>
            <h2>Your First Name is - {name.firstName}</h2>
            <h2>Your Last Name is - {name.lastName}</h2>
            {/* <h2>{JSON.stringify(name)}</h2> */}
        </form>
    )
}
export default HookState