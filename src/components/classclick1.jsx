import React, { Component } from "react";

class ClassClickExample extends Component{
    clickHandler2(){
        console.log("Tapped the button")
    }
    render() {
        return(
            <div>
                <button onClick={this.clickHandler2()}>Click the button</button>
            </div>

        )
    }
}

export default ClassClickExample