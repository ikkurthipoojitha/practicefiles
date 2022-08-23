import React, { useState } from "react";

function HookCounter(){

    const[count2, setCount] = useState(0)
    return(
        <div>
            <button onClick={()=>setCount(count2 + 1)}>Count {count2}</button>
        </div>
    )
}
export default HookCounter