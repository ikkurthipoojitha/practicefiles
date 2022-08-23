import React, { Component } from "react";

class LifecycleTwo extends Component{
    constructor(props){
        super(props)
        this.state = {
            tech:'React'
        }
        console.log('LifecycleTwo constructor')
    }
    static getDerivedStateFromProps(props,state){
        console.log("LifecycleTwo getDerivedStateFromProps")
        return null
    }
    componentDidMount(){
        console.log("LifecycleTwo componentDidMount")
    }
    shouldComponentUpdate(){
        console.log("LifecyleTwo shouldComponentUpdate ")
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevstate){
        console.log("LifecycleTwo getSnapshotBeforeUpdate")
        return null

    }
    componentDidUpdate(){
        console.log("LifecycleTwo componentDidUpdate")
    }
    changeState=()=>{
        this.setState({
            tech:'Angular'
        })
    }
    render(){
        console.log("lifecycleTwo render")
        return(
            <div>LifeCycle Two</div>

                
        )
    }
}
export default LifecycleTwo