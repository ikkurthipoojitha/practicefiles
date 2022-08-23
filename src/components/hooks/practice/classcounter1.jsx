import React, { Component } from "react";

class ClassCounterExample extends Component{
    constructor(props){
        super(props)
        this.state = {
            value2 : 0
        }
    }
    incrementTenExample = ()=>{
        this.setState({
            value2 : this.state.value2 + 10
        })
    }
    render(){
        return(
            <div>
                <button onClick={this.incrementTenExample}>Count {this.state.value2}</button>
            </div>
        )
    }
}

export default ClassCounterExample