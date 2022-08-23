import React,{useState} from "react";
import HookMouseOne from "./hookmouseone";

function MouseContainerOne(){
    const [show,setShow] = useState(true)
    return(
        <div>
            <button onClick = {()=>setShow(!show)}>Toggle Display</button>
            {show && <HookMouseOne />}
        </div>
    )
}

export default MouseContainerOne