import React from "react";

function FunctionClickExample(){
    function clickHandler(){
        console.log("Clicked the button")
    }
    return(
        <div>
            <button onClick={clickHandler()}>Click</button>
        </div>
    )
}

export default FunctionClickExample