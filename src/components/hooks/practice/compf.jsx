import React from "react";
import { nameContext, titleContext } from "../../../App";

function CompF(){
    return(
        <div>
            <nameContext.Consumer>
                {
                    name =>{
                        return(
                            <titleContext.Consumer>
                                {
                                    title =>{
                                        return <div>User context value {name}, title context value {title}</div>
                                    }
                                }
                            </titleContext.Consumer>
                        ) 
                    }
                }
            </nameContext.Consumer>
        </div>
    )
}
export default CompF