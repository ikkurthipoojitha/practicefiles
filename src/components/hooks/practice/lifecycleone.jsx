import React, { Component } from "react";
import LifecycleTwo from "./lifecycletwo"

class LifecycleOne extends Component{
    constructor(props){
        super(props)
        this.state = {
            tech:'React'
        }
        console.log('LifecycleOne constructor')
    }
    static getDerivedStateFromProps(props,state){
        console.log("LifecycleOne getDerivedStateFromProps")
        return null
    }
    componentDidMount(){
        console.log("LifecycleOne componentDidMount")
    }
    shouldComponentUpdate(){
        console.log("LifecyleOne shouldComponentUpdate ")
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevstate){
        console.log("LifecycleOne getSnapshotBeforeUpdate")
        return null

    }
    componentDidUpdate(){
        console.log("LifecycleOne componentDidUpdate")
    }
    changeState=()=>{
        this.setState({
            name:'codevolution'
        })
    }
    render(){
        console.log("lifecycleOne render")
        return(
            <div>
                <div>LifeCycle one</div>
                <button onClick={this.changeState}>Change state </button>
                <LifecycleTwo />
            </div>
        )
    }
}
export default LifecycleOne