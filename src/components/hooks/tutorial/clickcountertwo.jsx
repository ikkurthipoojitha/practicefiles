import React from "react";
import { Component } from "react";

class ClickCounterTwo extends Component{
    
    render(){
        const {count,incrementCount} = this.props
        return(
            <button onClick={incrementCount}>Click {count} times</button>
        )
    }
}
export default ClickCounterTwo