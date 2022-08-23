import React, { Component } from "react";

class CounterExample extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count1:0
        }
    }

    increment1(){
        // this.setState(
        // {
        //     count1: this.state.count1 + 2
        // },
        // ()=>{
        //     console.log("Callback value",this.state.count1)
        // })
        this.setState(prevstate =>({
            count1 : prevstate.count1 + 2
        }))
        console.log(this.state.count1)
    }

    incremenTen(){
        this.increment1()
        this.increment1()
        this.increment1()
        this.increment1()
        this.increment1()
        this.increment1()
        this.increment1()
        this.increment1()
        this.increment1()
        this.increment1()

    }
    render(){
        return(
            <div>
            <div>
                Count1 - {this.state.count1}</div>
            <button onClick = {()=>this.incrementTen()}>Increment</button>
            </div>
        )
    }
}

export default CounterExample