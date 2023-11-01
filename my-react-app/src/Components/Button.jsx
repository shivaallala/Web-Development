import React from 'react';  
import './button.css';
// make a button component


const Button = (props) => {

    return (
        <button className = 'button' onClick={props.onClick}>{props.label}</button>
    )
}   

export default Button;
  