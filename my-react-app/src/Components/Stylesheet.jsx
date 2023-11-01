import React from 'react'
import stylesheet from './stylesheet.css' 

const Stylesheet = (props) => {
    let className = props.primary ? 'primary' : ''
    return (
        <div>
            <h1 className = {`${className} font-xl`}>HI</h1>
        </div>
    )
}

export default Stylesheet
