import React from 'react'
import './Education.css'
import '../shared.css'
import Button from '../Button/Button'

function Education(props) {
    return (
        <div className="education-main-div">
            <h1 className="about-me-divs-title">Education</h1>
                <div className="education-div">
                        <h3>Semos Education, Skopje, North Macedonia</h3>
                        <p>March 2019 - February 2020</p>
                        <h4>
                            I have worked and understood the connection between the front-end and the back-end when it comes to developing
                            a web application, including the architectural pattern MVC. I have a good understanding of the communication
                            between the handlers of the back-end and the UI in the front end. During the course that lasted aproximately 1 year,
                            I have acknowledged skills with languages and frameworks such as Javascript, DOM,ReactJS, NodeJS and MongoDB, altogether with multiple libraries.
                        </h4>
                        <Button url="https://stark-island-29614.herokuapp.com" />
            </div>
        </div>
    )
}

export default Education;