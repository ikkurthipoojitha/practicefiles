import React,{useState} from "react";

function HookCounterThree(){
    const initialCount = 0
    const[countValue4,setCount] = useState(initialCount)
    const incrementsixteen = ()=>{
        for(let i=0;i<16;i++){
            setCount(prevCount => prevCount + 1)
        }
    }
    return(
        <div>
            Count : {countValue4}
            <button onClick={()=>setCount(initialCount)}>Reset</button>
            <button onClick={()=>setCount(prevCount => prevCount + 1)}>Increment</button>
            <button onClick={()=>setCount(prevCount => prevCount - 1)}>Decrement</button>
            <button onClick={incrementsixteen}>Increment 16</button>
        </div>
    )
}
export default HookCounterThree