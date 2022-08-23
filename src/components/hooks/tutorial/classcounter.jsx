import React, { Component } from "react";

class ClassCounter extends Component{
    constructor(props){
        super(props)
        this.state = {
            value : 0
        }
    }
    incrementValue = ()=>{
        this.setState({
            value : this.state.value + 1
        })
    }
    render(){
        return(
            <div>
                <button onClick={this.incrementValue}>Count {this.state.value}</button>
            </div>
        )
    }
}

export default ClassCounter