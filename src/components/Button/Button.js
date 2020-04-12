import React from 'react'
import './Button.css'

function Button(props) {
    return (
        <a href={props.url}
            target="_blank"
            rel="noopener noreferrer">
            <button className="visit-btn">Project</button>
        </a>
    )
}

export default Button