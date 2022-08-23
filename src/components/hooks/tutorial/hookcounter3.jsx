import React,{useState} from "react";

function HookCounterState(){
    const initialCount = 0
    const[countValue3,setCount] = useState(initialCount)
    const incrementsix = ()=>{
        for(let i=0;i<6;i++){
            setCount(prevCount => prevCount + 1)
        }
    }
    return(
        <div>
            Count : {countValue3}
            <button onClick={()=>setCount(initialCount)}>Reset</button>
            <button onClick={()=>setCount(prevCount => prevCount + 1)}>Increment</button>
            <button onClick={()=>setCount(prevCount => prevCount - 1)}>Decrement</button>
            <button onClick={incrementsix}>Increment 6</button>
        </div>
    )
}
export default HookCounterState