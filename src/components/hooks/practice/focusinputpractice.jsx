import React,{useEffect,useRef} from "react";

function FocusInputPractice(){

    const practiceRef = useRef(null)
    useEffect(() =>{
        practiceRef.current.focus()
    },[])
    return(
        <div>
            <input ref={practiceRef} type="text"/>

        </div>
    )
}
export default FocusInputPractice