import React, { Component } from "react";

export class EventBindExample extends Component{
    constructor(props){
        super(props)
        this.state = {
            text1:'start'
        }

        // this.clickHandler1 = this.clickHandler1.bind(this)
    }
    // clickHandler1(){
    //     this.setState({
    //         text1:'stop!'
    //     })
    //     console.log(this)
    // }

    clickHandler1 = () => {
        this.setState({
            text1:'stop!'
        })
    }

    render(){
        return(
            <div>
                <div>{this.state.text1}</div>
                {/* <button onClick = {this.clickHandler1.bind(this)}>Click</button> */}
                {/* <button onClick = {() => this.clickHandler1()}>Click</button> */}
                <button onClick = {this.clickHandler1}>Click</button>

            </div>
        )
    }
}

export default EventBindExample