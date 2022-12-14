import React, { Component } from "react";

const withCounterPractice = (WrappedComponent,incrementNumber) =>{
    class WithCounterPractice extends Component{
        constructor(props){
            super(props)
            this.state = {
                count: 0
            }
        }
        incrementCount = ()=>{
            this.setState(prevState=>{
                return {
                    count:prevState.count + incrementNumber}
            })
        }
        render(){
            return <WrappedComponent count={this.state.count} 
            incrementCount = {this.incrementCount}{...this.props}/> 
        }
    }
    return WithCounterPractice
}

export default withCounterPractice