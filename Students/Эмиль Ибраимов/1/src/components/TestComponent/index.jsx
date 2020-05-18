 import React from 'react';
import ReactDom from 'react-dom';
 let arr = [];  
 
 let clickBtn = props => {
        arr.push('Чтото');
        console.log(arr);
        let mapArr = arr.map(name => {
            return(
                {name}
            )
        })


    return (<div>{mapArr}</div>)
    
}
export default clickBtn