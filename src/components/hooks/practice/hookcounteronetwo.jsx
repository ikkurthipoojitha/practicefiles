import React,{useState,useEffect} from "react";

function HookCounterOneTwo(){
    const [hookCounter,setHookCounter] = useState(0)
    const [name,setName] = useState('')

    useEffect(()=>{
        console.log('useEffect - updating document title')
        document.title = `You Clicked ${hookCounter} times`
    })
    return(
        <div>
            <input type ="text" value = {name} onChange = {e=>setName(e.target.value)} />
            <button onClick={()=>setHookCounter(hookCounter + 1)}>
                Click {hookCounter} times
            </button>
        </div>
    )
}
export default HookCounterOneTwo