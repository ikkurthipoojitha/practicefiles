import React,{useState,useEffect,useRef} from "react";

function HookTimerPrctice(){
    const [time,setTime] = useState(0)
    const PracticeIntervalRef = useRef()

    useEffect(()=>{
        PracticeIntervalRef.current = setInterval(()=>{
            setTime(prevTime => prevTime + 1)
        },1000)
        return () =>{
            clearInterval(PracticeIntervalRef.current)
        }
    },[])
    return(
        <div>
            Hook timer Practice - {time}
            <button onClick={()=>clearInterval(PracticeIntervalRef.current)} >Clear Hook Timer</button>
        </div>

    )
}

export default HookTimerPrctice