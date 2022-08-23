import React from "react";
import Person from "./person";


function NameList(){
    const names = ["Bruce","Clark","Diana","Bruce"]
    const nameList = names.map((name,index) =><h2 key = {index}>{index}  {name}</h2>)
    const persons = [
        {
            id:1,
            name:'Bruce',
            age:30,
            skill:'React'

        },
        {
            id:2,
            name:'Clark',
            age:30,
            skill:'Java'

        },
        {
            id:3,
            name:'Diana',
            age:30,
            skill:'Python'

        }
    ]
    // const personList = persons.map(person => <Person key ={person.id} person = {person}/>)
    return(
        <div>
             { nameList} 
            {/* <h2>{names[0]}</h2>
            <h2>{names[1]}</h2>
            <h2>{names[2]}</h2> */}

        </div>
    )
}

export default NameList