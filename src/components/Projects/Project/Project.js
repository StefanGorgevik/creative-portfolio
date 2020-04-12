import React from 'react'
import './Project.css'
import Button from '../../Button/Button'

export default function Project(props) {
    return (
            <div className="project-info-div">
                <h1 className="project-info-h1">{props.name}</h1>
                    <p className="project-info-p">
                        {props.info}
                        {props.extra ? <p className="extra-info-p">{props.extra}</p> : null}
                    </p>
                    <Button url={props.url}/>
            </div>
    )
}
