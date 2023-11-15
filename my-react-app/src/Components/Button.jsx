import React from 'react';  
import './button.css';
// make a button component


const Button = (props) => {

    const myButtonOnClick= () => {
        props.onClick();
        console.log('button clicked')
    }

    return (
        <div style={{marginTop: '2px'}}>
            <button className = 'button' onClick={myButtonOnClick}>{props.label}</button>
        </div>
    )
}   

export default Button;
  