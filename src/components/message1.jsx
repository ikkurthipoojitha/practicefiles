import React, { Component } from 'react';

class MessageExample extends Component{
    constructor(){
        super()
        this.state={
            message : 'Welcome to state'
        }
    }
    changeMessage(){
        this.setState({
            message:'Thank you for clicking'
        })
    }
    render(){
        return( 
            <div>
                <h1> {this.state.message}</h1> 
                <button onClick={()=>this.changeMessage()}>Subscribe</button>
            </div>
        )

    }
}
export default MessageExample
