import React from "react";
import Courses from "./courses";

function CourseList(){
    const technologies = ["Java","Python","Javascript"]
    const courseList = technologies.map((tech,index) =><h1 key={index}> {index} {tech}</h1>)
    const courses = [
        {
            id:1,
            course:'Java',
            experience:2

        },
        {
            id:2,
            course:'Python',
            experience:3

        },
        {
            id:3,
            course:'Angular',
            experience:3

        }
    ]
    // const courseList = courses.map(courseName => <Courses key = {courseName.id} courseName = {courseName}/>)


    return(
        <div>
            { courseList }
            {/* <h2>{courses[0]}</h2>
            <h2>{courses[1]}</h2>
            <h2>{courses[2]}</h2> */}

        </div>
    )
}

export default CourseList