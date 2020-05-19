import React from 'react';
import ReactDom from 'react-dom';

import './style.css';
import Button from '../Button.jsx'

let Test = (props)=>{
    let {msg} = props
    let msgArr =[]
    function Oi (){
        msgArr.push(msg)
        return (
            //<div>
            //    {msg}    //хотел так, но ничего не выдает, сделал ниже
            //</div>
            document.body.insertAdjacentHTML('afterend', `<p>${msg}</p>`)
        )
    }
    return (
        <div>
            <Button func={Oi}/>
        </div>
    )
}

export default Test


