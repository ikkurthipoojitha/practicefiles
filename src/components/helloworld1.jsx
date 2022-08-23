import React from 'react';
const HelloExample = () => {
    // return (
    //     <div>
    //         <h1>Hello, this is an example</h1>
    //     </div>
    // )
    return React.createElement(
        'div', {id:'hello',className:'sampleclass'},
        React.createElement('h1',null,'Hello, this is an example')
    )
}

export default HelloExample