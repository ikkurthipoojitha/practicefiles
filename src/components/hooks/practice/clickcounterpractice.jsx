import React, { Component } from "react";
import WithCounterPractice from "./withcounterpractice";

class ClickCounterPractice extends Component{
    
     render(){
        const {count,incrementCount} = this.props
        return(
            <div>
                <button onClick={incrementCount}>{this.props.name} Clicked {count} times</button>
            </div>
        )
     }
}
export default WithCounterPractice(ClickCounterPractice,5)