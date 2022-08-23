import React, { Component } from "react";

class ClassMouseOne extends Component{
    constructor(props){
        super(props)
        this.state = {
            a:0,
            b:0
        }
    }
    logMousePosition = e =>{
        this.setState({a:e.clientX,a:e.clientY})
    }
    componentDidMount(){
        window.addEventListener('mousemove',this.logMousePosition)
    }
    render(){
        return(
            <div>
                X - {this.state.a} Y - {this.state.b}
            </div>
        )
    }
}

export default ClassMouseOne