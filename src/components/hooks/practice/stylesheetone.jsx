import React from "react";
// import './appstyles.css'

function StyleSheetOne(props){
    let className = props.secondary ? 'secondary': ''
    return(
        <div>
            <h1 className={`${className} font-xl`}>
                Stylesheet Practice
            </h1>
        </div>
    )
}
export default StyleSheetOne