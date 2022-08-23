import React, { Component } from "react";

class LifecycleB extends Component{
    constructor(props){
        super(props)
        this.state = {
            name:'poojitha'
        }
        console.log('LifecycleB constructor')
    }
    static getDerivedStateFromProps(props,state){
        console.log("LifecycleB getDerivedStateFromProps")
        return null
    }
    componentDidMount(){
        console.log("Lifecycleb componentDidMount")
    }
    shouldComponentUpdate(){
        console.log("LifecyleB shouldComponentUpdate ")
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevstate){
        console.log("LifecycleB getSnapshotBeforeUpdate")
        return null

    }
    componentDidUpdate(){
        console.log("LifecycleB componentDidUpdate")
    }
    render(){
        console.log("lifecycleB render")
        return(
            
                <div>LifeCycle B</div>
                
        )
    }
}
export default LifecycleB