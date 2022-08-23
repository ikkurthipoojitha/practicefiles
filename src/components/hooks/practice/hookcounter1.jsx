import React, { useState } from "react";

function HookCounterExample(){

    const[countValue, setCountValue] = useState(0)
    return(
        <div>
            <button onClick={()=>setCountValue(countValue + 100)}>Count {countValue}</button>
        </div>
    )
}
export default HookCounterExample