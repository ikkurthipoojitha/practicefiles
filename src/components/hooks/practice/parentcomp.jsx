import React,{Component} from "react";
import Childcomp from "./childcomp";

class ParentComp extends Component{

    constructor(props){
        super(props)
        this.state = {
            parentValue:'parent1'
        }
        this.msgParent = this.msgParent.bind(this)
    }
    msgParent(childValue){
        alert(`${this.state.parentValue} from ${childValue}`)
    }

    render(){
        return (
            <div>
                <Childcomp msgHandler = {this.msgParent}/>
            </div>

        )
    }
}

export default ParentComp