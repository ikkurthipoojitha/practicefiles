import React, { Component } from "react";

class ClassTimerPractice extends Component{
    interval
    constructor(props){
        super(props)
        this.state = {
            time:0
        }
    }

    componentDidMount(){
        this.interval = setInterval(()=>{
            this.setState(previousState => ({time:previousState.time + 5}))
        },1000)
    }

    componentWillUnmount(){
        clearInterval( this.interval)
    }
    render(){
        return(
            <div>
                Class Timer Practice - {this.state.time}
                <button onClick={() =>clearInterval(this.interval)}>Clear Timer</button>
            </div>
        )
    }
}

export default ClassTimerPractice