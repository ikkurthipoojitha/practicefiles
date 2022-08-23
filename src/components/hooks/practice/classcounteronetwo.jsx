import React, { Component } from "react";

class  ClassCounterOneTwo extends Component{
    constructor(props){
        super(props)
        this.state = {
            countTwo : 0
        }
    }
    componentDidMount(){
        document.title = `Clicked ${this.state.countTwo} times`
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.countTwo !==  this.state.countTwo){
        console.log("updating document file")
        document.title = `Clicked ${this.state.countTwo} times`
        }

    }
    render(){
        return(
            <div>
                <input type="text" value={this.state.name} onChange={e=>{
                    this.setState({name:e.target.value})
                }}/>
                <button onClick={()=>this.setState({countTwo: this.state.countTwo + 10})}>
                    Click {this.state.countTwo} times
                </button>
            </div>
        )
    }
}

export default ClassCounterOneTwo