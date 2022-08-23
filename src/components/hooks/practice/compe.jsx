import React,{useContext} from "react";
import { nameContext, titleContext } from "../../../App";
import CompF from "./compf";

function CompE(){
    const name = useContext(nameContext)
    const title = useContext(titleContext)
    return(
        <div>
            {/* <CompF/> */}
            {name} - {title}
        </div>
    )
}
export default CompE