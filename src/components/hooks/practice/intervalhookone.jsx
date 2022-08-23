import React,{useState,useEffect} from "react";

function IntervalHookOne(){
    const [count,setCount] = useState(0)
    const tick = () =>{
        setCount(prevCount => prevCount + 1)
    }
    useEffect(() =>{
        const interval = setInterval(tick,2000)
        return() =>{
            clearInterval(interval)
        }
    },[])
    return(
        <div>
            {count}
        </div>
    )
}
export default IntervalHookOne