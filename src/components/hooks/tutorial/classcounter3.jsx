import React, { Component } from "react";

class ClassCounterValue extends Component{
    constructor(props){
        super(props)
        this.state = {
            value4 : 0
        }
    }
    incrementValueCount = ()=>{
        this.setState(prevState => {
            return {
            value4 : prevState.value4 + 1
            }
        })
    }
    render(){
        return(
            <div>
                <button onClick={this.incrementValueCount}>Count {this.state.value4}</button>
            </div>
        )
    }
}

export default ClassCounterValue