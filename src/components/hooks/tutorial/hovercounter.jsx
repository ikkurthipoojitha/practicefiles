import React from "react";
import { Component } from "react";
import WithCounter from "./withcounter";

class HoverCounter extends Component{
    
    render(){
        const {count,incrementCount} = this.props

        return(
        
                <h1 onMouseOver={incrementCount}>Hovered {count} times</h1>


        )
    }
}
export default WithCounter(HoverCounter,10)