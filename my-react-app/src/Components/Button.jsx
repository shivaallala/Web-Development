import React from 'react';  
import './button.css';
// make a button component


const Button = (props) => {

    return (
        <div style={{marginTop: '2px'}}>
            <button className = 'button' onClick={props.onClick}>{props.label}</button>
        </div>
    )
}   

export default Button;
  