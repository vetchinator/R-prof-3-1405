import React from 'react'
import './style.sass'

export default function Button(props) {
    let text = <p>Нормально</p>
    return (
        <button onClick = {props.addText}>Enter</button>
    )
}