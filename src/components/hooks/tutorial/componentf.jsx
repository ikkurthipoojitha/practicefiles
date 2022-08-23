import React from "react";
import { UserContext,channelContext } from "../../../App";
function ComponentF(){
    return(
        <div>
            <UserContext.Consumer>
                {
                    user =>{
                        return(
                            <channelContext.Consumer>
                                {
                                    channel =>{
                                        return <div>User context value {user}, channel context value {channel}</div>
                                    }
                                }
                            </channelContext.Consumer>
                        ) 
                    }
                }
            </UserContext.Consumer>
        </div>
    )
}
export default ComponentF