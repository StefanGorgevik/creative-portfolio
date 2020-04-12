import React from 'react'
import './Project.css'

export default function Project(props) {
    return (
            <div className="project-info-div">
                <h1 className="project-info-h1">{props.name}</h1>
                    <p className="project-info-p">
                        {props.info}
                        {props.extra ? <p className="extra-info-p">{props.extra}</p> : null}
                    </p>
                    
                    <a href={props.url}
                        target="_blank"
                        rel="noopener noreferrer">
                        <button className="visit-btn">Visit the project</button></a>
            </div>
    )
}
