import React, { Component } from "react";

class  ClassCounterOne extends Component{
    constructor(props){
        super(props)
        this.state = {
            countOne : 0
        }
    }
    componentDidMount(){
        document.title = `Clicked ${this.state.countOne} times`
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.count !==  this.state.countOne){
        console.log("updating document file")
        document.title = `Clicked ${this.state.countOne} times`
        }

    }
    render(){
        return(
            <div>
                <input type="text" value={this.state.name} onChange={e=>{
                    this.setState({name:e.target.value})
                }}/>
                <button onClick={()=>this.setState({countOne: this.state.countOne + 1})}>
                    Click {this.state.countOne} times
                </button>
            </div>
        )
    }
}

export default ClassCounterOne