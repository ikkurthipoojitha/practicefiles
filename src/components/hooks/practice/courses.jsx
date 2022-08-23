import React from "react";

function Courses({courseName}){
    return(
        <div>
            <h2> 
                I have {courseName.experience} years experience in {courseName.course}.
            </h2>
        </div>
    )
}
export default Courses