import React from 'react';

// function Greet() {
//     return <h1>Hello Poojitha</h1>
// }

const GreetExample = props =>{
    console.log(props)
    return <h1>Hello {props.name}</h1>
}

export default GreetExample;