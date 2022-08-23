import React,{useState,useEffect} from "react";

function HookCounterOne(){
    const [hookCount,setHookCount] = useState(0)
    const [name,setName] = useState('')

    useEffect(()=>{
        console.log('useEffect - updating document title')
        document.title = `You Clicked ${hookCount} times`
    })
    return(
        <div>
            <input type ="text" value = {name} onChange = {e=>setName(e.target.value)} />
            <button onClick={()=>setHookCount(hookCount + 1)}>
                Click {hookCount} times
            </button>
        </div>
    )
}
export default HookCounterOne