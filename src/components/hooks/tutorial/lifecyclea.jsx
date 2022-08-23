import React, { Component } from "react";
import LifecycleB from "./lifecycleb";

class LifecycleA extends Component{
    constructor(props){
        super(props)
        this.state = {
            name:'poojitha'
        }
        console.log('LifecycleA constructor')
    }
    static getDerivedStateFromProps(props,state){
        console.log("LifecycleA getDerivedStateFromProps")
        return null
    }
    componentDidMount(){
        console.log("LifecycleA componentDidMount")
    }
    shouldComponentUpdate(){
        console.log("LifecyleA shouldComponentUpdate ")
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevstate){
        console.log("LifecycleA getSnapshotBeforeUpdate")
        return null

    }
    componentDidUpdate(){
        console.log("LifecycleA componentDidUpdate")
    }
    changeState=()=>{
        this.setState({
            name:'codevolution'
        })
    }
    render(){
        console.log("lifecycleA render")
        return(
            <div>
                <div>LifeCycle A</div>
                <button onClick={this.changeState}>Change state </button>
                <LifecycleB />
            </div>
        )
    }
}
export default LifecycleA