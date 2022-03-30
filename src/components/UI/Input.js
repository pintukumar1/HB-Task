import React from 'react'
import './Input.css'

const Input = (props) => {
    return (
        <div className="form-control">
            <label htmlFor={props.id}>{props.label}</label>
            <input type={props.type} placeholder={props.placeholder}/>
        </div>
    )
}

export default Input
