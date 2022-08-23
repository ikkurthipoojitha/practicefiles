import React, { Component } from "react";

class ClassCounterPrev extends Component{
    constructor(props){
        super(props)
        this.state = {
            value5 : 0
        }
    }
    incrementValueCountPrev = ()=>{
        this.setState(previousState => {
            return {
            value5 : previousState.value5 + 1
            }
        })
    }
    render(){
        return(
            <div>
                <button onClick={this.incrementValueCountPrev}>Count {this.state.value5}</button>
            </div>
        )
    }
}

export default ClassCounterPrev

