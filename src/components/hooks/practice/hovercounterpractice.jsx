import React from "react";
import { Component } from "react";
import WithCounterPractice from "./withcounterpractice";
class HoverCounterPractice extends Component{
    
    render(){
        const {count,incrementCount} = this.props

        return(
        
                <h1 onMouseOver={incrementCount}>Hovered {count} times</h1>


        )
    }
}
export default WithCounterPractice(HoverCounterPractice,10)