import React, { Component } from "react";

class UserGreet extends Component{

    constructor(props){
        super(props)
        this.state={
            isSignedIn : true
        }
    }
    render(){
        return this.state.isLoggedIn && <div>Welcome User</div>
    }

    // return (
    //     this.state.isLoggedIn ?
    //     <div>Welcome User</div> :
    //     <div>Welcome Guest</div>
    // )
    

    // let msg
    //     if(this.state.isSignedIn){
    //         msg = <div>Welcome User</div>
    //     }
    //     else{
    //         msg = <div>Welcome Guest</div>
    //     }

    //     return (
    //         <div>
    //             {msg}
    //         </div>
    //     )
        // if(this.state.isSignedIn){
        //     return(
        //         <div>
        //             Welcome User
        //         </div>
        //     )
        // }
        // else{
        //     return(
        //         <div>
        //             Welcome Guest
        //         </div>
        //     )
        // }

        // return(
        //     <div>
        //     <div>Welcome User</div>
        //     <div>Welcome Guest</div>

        //     </div>
        // )
    
}

export default UserGreet