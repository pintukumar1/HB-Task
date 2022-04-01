import React from 'react'
import './Button.css'

const Button = (props) => {
    return (
        <button
          className={`button ${props.className}`}
          type={props.type}
          style={props.style}
          onClick={props.onClick}
          disabled={props.disabled}
        >
          {props.children}
        </button>
      );
}

export default Button
