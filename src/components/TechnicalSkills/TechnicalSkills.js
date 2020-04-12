import React from 'react'
import './TechnicalSkills.css'


function TechnicalSkills(props) {
    return (
        <div className="technical-skills-div">
            <h1 className="about-me-divs-title">Technical Skills</h1>
            <div className="ul-div">
                <h1 className="ul-div-h1">Front-end</h1>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Bootstrap</li>
                    <li>ReactJS</li>
                    <li>DOM</li>
                </ul>
            </div>
            <div className="ul-div">
                <h1 className="ul-div-h1">Back-end</h1>
                <ul>
                    <li >NodeJS</li>
                    <li >MongoDB</li>
                </ul>
            </div>
            <div className="ul-div">
                <h1 className="ul-div-h1">Concepts and skills</h1>
                <ul>
                    <li>MVC</li>
                    <li>JSON</li>
                    <li>API & RestAPI</li>
                    <li>HTTP</li>
                    <li>Databases</li>
                </ul>
            </div>
        </div>
    )
}

export default TechnicalSkills;