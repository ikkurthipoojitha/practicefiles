import React from "react";

function Childcomp(props){
    return(
        <div>
            <button onClick = {()=>props.msgHandler('child1')}>Greet Parent</button>
        </div>
    )
}

export default Childcomp