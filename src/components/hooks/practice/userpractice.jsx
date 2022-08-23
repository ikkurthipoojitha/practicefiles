import React, { Component } from "react";

class UserPractice extends Component{
    render(){
        return(
            <div>{this.props.render(true)}</div>

        )
    }
}

export default UserPractice